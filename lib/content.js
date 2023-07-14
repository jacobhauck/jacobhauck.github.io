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

export function getTopicData(topicCategories) {
    var topicData = {}
    for(let cat of topicCategories){
        var topics = []
        const topicIDs = getTopicIDs(cat);
        for(let id of topicIDs){
            if(id != 'index') {
                topics.push( {id, title: getTopicTitle(cat, id)} );
            }
        }
        topicData[cat] = topics;
    }

    if(topicCategories.length == 1){
        return topicData[topicCategories[0]];
    } else {
        return topicData;
    }
}