import style from '../styles/footer.module.css';
import Date from '../components/date';

export default function Footer() {
    return (
        <div className={style.footer}>
            Last updated <Date dateString={"2023-07-13"}
        </div>
    );
}