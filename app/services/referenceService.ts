import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import type { Reference } from '../types/Reference';
import type { Page } from '../types/Page';

export type ReferencePage = Page & { type: string; category?: string };

function getAllReferences(): ReferencePage[] {
  const root = path.join(process.cwd(), 'reference');
  const files: string[] = [];
  function walk(dir: string) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (entry.isDirectory()) walk(path.join(dir, entry.name));
      else if (entry.name.endsWith('.yml')) files.push(path.join(dir, entry.name));
    }
  }
  walk(root);
  return files.map(file => {
    const data = yaml.load(fs.readFileSync(file, 'utf8')) as Reference;
    const slug = path.relative(root, file).replace(/\\/g, '/').replace(/\.yml$/, '');
    return {
      name: data.name || slug,
      description: data.description || '',
      reference: slug,
      type: data.type,
      category: (data as any).category || '',
    };
  });
}

export function getReferencesGroupedByTypeAndCategory() {
  const refs = getAllReferences();
  const grouped: Record<string, Record<string, ReferencePage[]>> = {};
  for (const ref of refs) {
    if (!grouped[ref.type]) grouped[ref.type] = {};
    if (!grouped[ref.type][ref.category || 'Uncategorized']) grouped[ref.type][ref.category || 'Uncategorized'] = [];
    grouped[ref.type][ref.category || 'Uncategorized'].push(ref);
  }
  return grouped;
}

export function getReferencesByTypeGroupedByCategory(type: string) {
  const refs = getAllReferences().filter(r => r.type === type);
  const grouped: Record<string, ReferencePage[]> = {};
  for (const ref of refs) {
    if (!grouped[ref.category || 'Uncategorized']) grouped[ref.category || 'Uncategorized'] = [];
    grouped[ref.category || 'Uncategorized'].push(ref);
  }
  return grouped;
}

export function getAllTypeCategoryCombinations(): { type: string; category: string }[] {
  const refs = getAllReferences();
  const combinations = new Set<string>();
  for (const ref of refs) {
    const category = ref.category || 'Uncategorized';
    combinations.add(`${ref.type}:${category}`);
  }
  return Array.from(combinations).map(combo => {
    const [type, category] = combo.split(':');
    return { type, category };
  });
}

export function isValidTypeCategoryCombination(type: string, category: string): boolean {
  const refs = getAllReferences();
  return refs.some(ref => ref.type === type && (ref.category || 'Uncategorized') === category);
}

export function getAllReferenceParams(): { type: string; category: string; name: string }[] {
  const refs = getAllReferences();
  return refs.map(ref => {
    // Extract just the filename (last part of the path) without extension
    const parts = ref.reference.split('/');
    const filename = parts[parts.length - 1];

    return {
      type: ref.type,
      category: ref.category || 'Uncategorized',
      name: filename // Use the filename, not the name field
    };
  });
}

export function getReferenceByPath(type: string, category: string, name: string): Reference | null {
  const root = path.join(process.cwd(), 'reference');
  const refs = getAllReferences();

  // Match by type, category, and filename (not name)
  const matchingRef = refs.find(r => {
    const parts = r.reference.split('/');
    const filename = parts[parts.length - 1];

    return r.type === type &&
      (r.category || 'Uncategorized') === category &&
      filename === name;
  });

  if (!matchingRef) return null;

  const filePath = path.join(root, `${matchingRef.reference}.yml`);
  if (!fs.existsSync(filePath)) return null;

  const data = yaml.load(fs.readFileSync(filePath, 'utf8')) as Reference;
  return data;
}
