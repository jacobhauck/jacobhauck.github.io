import style from "@/styles/article.module.css";


export default function Article({ children }) {
    return (
        <div className={style.mainBody}>{children}</div>
    );
}