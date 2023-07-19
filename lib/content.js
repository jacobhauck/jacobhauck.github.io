import fs from 'fs';
import path from 'path';

export function getTopicIDs(category) {
    const topicIDs = fs.readdirSync(path.join(process.cwd(), "pages", category));
    return topicIDs.map((fileName) => fileName.replace(/\.jsx$/, ''));
}

export function getTopicTitle(category, id) {
    const content = fs.readFileSync(
        path.join(process.cwd(), "pages", category, id + '.jsx'), { encoding: 'utf-8' }
    );
    const titleStart = content.indexOf('<title>') + '<title>'.length;
    const titleEnd = content.indexOf('</title>', titleStart);
    return content.substring(titleStart, titleEnd);
}

export default function getTopicProps(category) {
    var topics = []
    const topicIDs = getTopicIDs(category);
    for(let id of topicIDs){
        if(id != 'index') {
            topics.push( {id, title: getTopicTitle(category, id)} );
        }
    }

    return {
        props: {
            topics
        }
    };
}
