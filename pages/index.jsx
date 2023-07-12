import Head from "next/head";
import TopMatter from "@/components/topmatter";
import Navbar from "@/components/navbar";
import utilStyles from '../styles/utils.module.css'

export default function Home() {
    return (
        <>
            <Head>
                <title>Jacob's Website</title>
            </Head>
            <section className={utilStyles.verticalFlex}>
                <TopMatter />
                <Navbar />
            </section>
        </>
    );
}