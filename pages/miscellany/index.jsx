import Layout from "@/components/layout";
import Head from "next/head";
import getTopicProps from "@/lib/content";

export async function getStaticProps(){
    return getTopicProps('miscellany');
}

export default function MiscellanyHome({ topics }) {
    return (<>
        <Head><title>Miscellany</title></Head>
        <Layout category={"miscellany"} topics={topics}>
            <p>
                Here are a bunch of random things.
            </p>
        </Layout>
    </>)
}