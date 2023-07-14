import Layout from "@/components/layout";
import Head from "next/head";
import Article from "@/components/article";


export default function About() {
    return (
        <>
            <Head><title>About Jacob</title></Head>
            <Layout>
            <Article>
                This is where you will find information about me.
            </Article>
            </Layout>
        </>
    );
}