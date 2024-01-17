import style from "@/styles/topics.module.css"
import Link from "next/link";


export default function Subtopics( {category, topic, subtopic, subtopics}) {
    return (
        <div key={"subtopics"} className={style.topics_indent}>
            {subtopics.map(data => (
                <Link key={data.id} className={data.id == subtopic ? style.current : style.topic} href={`/${category}/${topic}/${data.id}`}>
                    {data.title}
                </Link>
            ))}
        </div>
    );
}