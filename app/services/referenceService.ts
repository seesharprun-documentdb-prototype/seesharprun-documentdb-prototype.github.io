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
      slug,
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
