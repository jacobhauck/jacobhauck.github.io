import style from "@/styles/topics.module.css"


export default function Subtopics( {subtopic, subtopics}) {
    return (
        <div className={style.topics-indent}>
            {subtopics.map(data => (
                <Link key={data.id} className={data.id == subtopic ? style.current : style.topic}>
                    {data.title}
                </Link>
            ))}
        </div>
    );
}