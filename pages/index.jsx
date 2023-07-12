import Head from "next/head";
import TopMatter from "@/components/topmatter";
import Navbar from "@/components/navbar";
import utilStyles from '../styles/utils.module.css'
import Footer from "@/components/footer";

export default function Home() {
    return (
        <>
            <Head>
                <title>Jacob's Website</title>
            </Head>
            <section className={utilStyles.verticalFlex}>
                <TopMatter />
                <Navbar />
                <section className={utilStyles.centeredText}>
                    <br />
                    <div>Welcome to my website!</div>
                    <div>I'm not sure why you're here already, seeing as there is almost no content posted yet.</div>
                </section>
                <Footer />
            </section>
        </>
    );
}