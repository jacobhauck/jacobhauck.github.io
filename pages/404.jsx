import Head from "next/head";
import style from "@/styles/error.module.css";
import Footer from "@/components/footer";

export default function Custom404() {
    return (<>
        <Head><title>You messed up.</title></Head>
        <div className={style.contentContainer}>
            <h1>404 Error</h1>
            Sadly, the page you're looking for does not exist. You should probably do something different (or maybe I should fix my broken website?).
            <Footer />
        </div>
    </>);
}