import Layout from "@/components/layout";
import Head from "next/head";
import { getTopicData } from "@/lib/content";

export async function getStaticProps(){
    const topicData = getTopicData(["miscellany"]);
    return {
        props: {
            topicData
        }
    }
}

export default function MiscellanyHome({ topicData }) {
    return (<>
        <Head><title>Miscellany</title></Head>
        <Layout category={"miscellany"} topics={topicData}>
            <p>
                Here are a bunch of random things.
            </p>
        </Layout>
    </>)
}