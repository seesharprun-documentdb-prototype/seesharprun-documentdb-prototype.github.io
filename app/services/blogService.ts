import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { Post } from '../types/Post';

export function getAllPosts(): Post[] {
  const filePath = path.join(process.cwd(), 'blogs', 'content.yml');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const posts = yaml.load(fileContents) as Post[];
  return posts;
}