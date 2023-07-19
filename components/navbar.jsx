import style from '../styles/navbar.module.css'
import Link from 'next/link';

export default function Navbar({ category }) {
    return (
        <div className={style.navbar}>
            <Link className={category == 'about' ? style.current : style.navbutton}
             href='/about'>
                About
            </Link>
            <Link className={category == 'notes' ? style.current : style.navbutton} href='/notes'>
                Notes
            </Link>
            <Link className={category == 'solved-problems' ? style.current : style.navbutton} href='/solved-problems'>
                Solved&nbsp;Problems
            </Link>
            <Link className={category == 'miscellany' ? style.current : style.navbutton} href='/miscellany'>
                Miscellany
            </Link>
        </div>
    );
}