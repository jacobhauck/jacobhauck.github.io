import Layout from "@/components/layout";
import Head from "next/head";
import { getTopicData } from "@/lib/content";

export async function getStaticProps(){
    const topicData = getTopicData(["notes"]);
    return {
        props: {
            topicData
        }
    }
}

export default function NotesHome({ topicData }) {
    return (<>
        <Head><title>Notes</title></Head>
        <Layout category={"notes"} topics={topicData}>
            <p>
                Here are notes on various topics.
            </p>
        </Layout>
    </>)
}