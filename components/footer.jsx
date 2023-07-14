import style from '../styles/footer.module.css';
import CurrentDate from '../components/date';

export default function Footer() {
    return (
        <div className={style.footer}>
            Site last updated <CurrentDate dateString={"2023-07-13"} />
        </div>
    );
}