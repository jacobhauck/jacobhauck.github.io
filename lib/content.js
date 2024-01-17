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

function hasSubtopics(category, id) {
    var checkPath = path.join("pages", category, id);
    if(!fs.existsSync(checkPath)) {
        return false;
    }

    var stat = fs.lstatSync(checkPath);
    if(stat != undefined){
        return stat.isDirectory();
    }
    return false;
}

export default function getTopicProps(category, topic) {
    var topics = [];
    var subtopics = [];
    const topicIDs = getTopicIDs(category);
    for(let id of topicIDs){
        if(id != 'index') {
            if(id == topic) {
                const subtopicIDs = getTopicIDs(path.join(category, id));
                for(let subid of subtopicIDs){
                    if(subid != 'index'){
                        subtopics.push( {id: subid, title: getTopicTitle(path.join(category, id), subid)} );
                    }
                }
            } 
            
            if(hasSubtopics(category, id)) {
                topics.push( {id, title: getTopicTitle(path.join(category, id), "index")} );
            } else {
                topics.push( {id, title: getTopicTitle(category, id)} );
            }
        }
    }

    return {
        props: {
            topics,
            subtopics
        }
    };
}
