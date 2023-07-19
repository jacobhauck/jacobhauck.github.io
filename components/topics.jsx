import style from "@/styles/topics.module.css";
import Link from "next/link";

export default function Topics({ category, topic, topics }) {
    return (
        <div className={style.topics}>
            <div className={style.title}>Topics</div>
            {topics.map(data => (
                <Link key={data.id} className={data.id == topic ? style.current : style.topic} href={`/${category}/${data.id}`}>
                    {data.title}
                </Link>
            ))}
        </div>
    );
}