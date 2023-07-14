import style from '../styles/navbar.module.css'
import Link from 'next/link';

export default function Navbar() {
    return (
        <div className={style.navbar}>
            <Link className={style.navbutton} href='https://runescape.com'>
                About
            </Link>
            <Link className={style.navbutton} href='https://runescape.com'>
                Notes
            </Link>
            <Link className={style.navbutton} href='https://runescape.com'>
                Solved Problems
            </Link>
            <Link className={style.navbutton} href='/miscellany'>
                Miscellany
            </Link>
        </div>
    );
}