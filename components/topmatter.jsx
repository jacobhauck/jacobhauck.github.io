import style from '../styles/topmatter.module.css';
import Link from 'next/link';

export default function TopMatter() {
    return (
        <div className={style.headingContainer}>
            <Link className={style.heading} href='/'>
                Jacob's Website
            </Link>
        </div>
    );
}