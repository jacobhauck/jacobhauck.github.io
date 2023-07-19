import Layout from "@/components/layout";
import Head from "next/head";
import getTopicProps from "@/lib/content";

export async function getStaticProps(){
    return getTopicProps('notes');
}

export default function NotesHome({ topics }) {
    return (<>
        <Head><title>Notes</title></Head>
        <Layout category={"notes"} topics={topics}>
            <p>
                Here are notes on various topics.
            </p>
        </Layout>
    </>)
}