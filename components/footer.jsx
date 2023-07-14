import style from '../styles/footer.module.css';
import CurrentDate from '../components/date';

export default function Footer() {
    return (
        <div className={style.footer}>
            Last updated <CurrentDate dateString={"2023-07-13"} />
        </div>
    );
}