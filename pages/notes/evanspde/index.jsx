import Layout from "@/components/layout";
import Head from "next/head";
import getTopicProps from "@/lib/content";

export async function getStaticProps(){
    return getTopicProps('notes', 'evanspde');
}

export default function EvansPDEHome({ topics, subtopics }) {
    return (<>
        <Head><title>Evans PDEs</title></Head>
        <Layout category={"notes"} topic={"evanspde"} topics={topics} subtopics={subtopics}>
            <p>
                Here are my notes on the textbook <i>Partial Differential Equations</i> by Lawrence Evans.
                {/* TODO: citation */}
            </p>
        </Layout>
    </>)
}