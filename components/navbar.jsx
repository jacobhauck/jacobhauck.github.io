import style from '../styles/navbar.module.css'
import Link from 'next/link';

export default function Navbar({ category }) {
    return (
        <div className={style.navbar}>
            <Link className={style.navbutton} href='/about'>
                About
            </Link>
            <Link className={style.navbutton} href='/notes'>
                Notes
            </Link>
            <Link className={style.navbutton} href='/solved-problems'>
                Solved&nbsp;Problems
            </Link>
            <Link className={style.navbutton} href='/miscellany'>
                Miscellany
            </Link>
        </div>
    );
}