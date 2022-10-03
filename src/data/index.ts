import { readFileSync } from "fs";
import path from "path";

const getData = (fileName: string) => {
    return readFileSync(path.resolve(__dirname, fileName), 'utf8');
}

export const getFeeds = () => {    
    const feedData = JSON.parse(getData("feeds.json"));
    return feedData;
}