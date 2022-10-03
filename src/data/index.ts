import { readFileSync } from 'fs';
import path from 'path';

const getData = (fileName: string) => {
  return readFileSync(path.resolve(__dirname, fileName), 'utf8');
};

export const getFeeds = () => {
  return JSON.parse(getData('feeds.json'));
};

export const getStats = () => {
  return JSON.parse(getData('stats.json'));
}