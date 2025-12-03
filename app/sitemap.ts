import { MetadataRoute } from 'next';
import { getAllArticlePaths } from './services/articleService';
import { getAllReferenceParams } from './services/referenceService';
import { execSync } from 'child_process';
import path from 'path';

// Required to evaluate at build time
export const dynamic = 'force-static';

// Determine base URL
const getBaseUrl = (): string => 'https://documentdb.io';

// Get the last git commit date for a specific file
const getGitLastModified = (filePath: string): Date => {
  try {
    // Convert absolute path to relative path from repo root
    const relativePath = path.relative(process.cwd(), filePath).replace(/\\/g, '/');
    const output = execSync(
      `git log -1 --format=%cI -- "${relativePath}"`,
      { encoding: 'utf-8', cwd: process.cwd() }
    ).trim();

    return output ? new Date(output) : new Date();
  } catch (error) {
    console.warn(`Could not get git date for ${filePath}`);
    return new Date();
  }
};

// Get the most recent git commit date for a directory
const getDirectoryLastModified = (dirPath: string): Date => {
  try {
    // Convert absolute path to relative path from repo root
    const relativePath = path.relative(process.cwd(), dirPath).replace(/\\/g, '/');
    const output = execSync(
      `git log -1 --format=%cI -- "${relativePath}"`,
      { encoding: 'utf-8', cwd: process.cwd() }
    ).trim();

    return output ? new Date(output) : new Date();
  } catch (error) {
    console.warn(`Could not get git date for directory ${dirPath}`);
    return new Date();
  }
};

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl();
  const currentDate = new Date();

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // 1. Homepage
  sitemapEntries.push({
    url: baseUrl,
    lastModified: currentDate,
    changeFrequency: 'yearly',
    priority: 1.0,
  });

  // 2. Main section pages
  const mainSections = [
    { path: '/docs', dirPath: 'articles' },
    { path: '/blogs', dirPath: 'blogs' },
    { path: '/packages', dirPath: 'app/packages' },
    { path: '/docs/reference', dirPath: 'reference' },
  ];

  mainSections.forEach(section => {
    const dirFullPath = path.join(process.cwd(), section.dirPath);
    const lastModified = getDirectoryLastModified(dirFullPath);

    sitemapEntries.push({
      url: `${baseUrl}${section.path}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.70,
    });
  });

  // 3. Article/Documentation pages
  try {
    const articlePaths = getAllArticlePaths();

    articlePaths.forEach(({ section, slug }) => {
      // Build the URL path
      let urlPath = `/docs/${section}`;
      if (slug.length > 0) {
        urlPath += `/${slug.join('/')}`;
      }

      // Determine the markdown file path
      const mdFilePath = path.join(process.cwd(), 'articles', section, ...slug, 'index.md');
      const lastModified = getGitLastModified(mdFilePath);

      sitemapEntries.push({
        url: `${baseUrl}${urlPath}`,
        lastModified,
        changeFrequency: 'weekly',
        priority: 0.70,
      });
    });
  } catch (error) {
    console.error('Error generating article sitemap entries:', error);
  }

  // 4. Blog posts
  // Note: Blog posts are external URIs, so we don't include them in the sitemap
  // as they redirect to external sites. The /blogs page itself is already included above.

  // 5. Reference documentation pages
  try {
    const referenceParams = getAllReferenceParams();

    referenceParams.forEach(({ type, category, name }) => {
      const urlPath = `/docs/reference/${type}/${category}/${name}`;

      // Determine the markdown file path
      const mdFilePath = path.join(process.cwd(), 'reference', type, category, `${name}.md`);
      const lastModified = getGitLastModified(mdFilePath);

      sitemapEntries.push({
        url: `${baseUrl}${urlPath}`,
        lastModified,
        changeFrequency: 'weekly',
        priority: 0.85,
      });
    });
  } catch (error) {
    console.error('Error generating reference sitemap entries:', error);
  }

  // 6. Reference type index pages (e.g., /docs/reference/commands, /docs/reference/operators)
  try {
    const referenceParams = getAllReferenceParams();
    const uniqueTypes = [...new Set(referenceParams.map(p => p.type))];

    uniqueTypes.forEach(type => {
      const dirPath = path.join(process.cwd(), 'reference', type);
      const lastModified = getDirectoryLastModified(dirPath);

      sitemapEntries.push({
        url: `${baseUrl}/docs/reference/${type}`,
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.55,
      });
    });
  } catch (error) {
    console.error('Error generating reference type index sitemap entries:', error);
  }

  // 7. Reference category pages (e.g., /docs/reference/operators/miscellaneous-query)
  try {
    const referenceParams = getAllReferenceParams();
    const uniqueCategories = [...new Set(referenceParams.map(p => `${p.type}/${p.category}`))];

    uniqueCategories.forEach(typeCategory => {
      const dirPath = path.join(process.cwd(), 'reference', ...typeCategory.split('/'));
      const lastModified = getDirectoryLastModified(dirPath);

      sitemapEntries.push({
        url: `${baseUrl}/docs/reference/${typeCategory}`,
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.55,
      });
    });
  } catch (error) {
    console.error('Error generating reference category sitemap entries:', error);
  }

  return sitemapEntries;
}
