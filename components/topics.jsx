import style from "@/styles/topics.module.css";
import Link from "next/link";

export default function Topics({ category, topics }) {
    return (
        <div className={style.topics}>
            <div className={style.title}>Topics</div>
            {topics.map(data => (
                <Link key={data.id} className={style.topic} href={`/${category}/${data.id}`}>
                    {data.title}
                </Link>
            ))}
        </div>
    );
}