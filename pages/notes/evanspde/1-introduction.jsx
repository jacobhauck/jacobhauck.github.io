import Link from "next/link"
import Head from "next/head";
import Layout from "@/components/layout";
import getTopicProps from "@/lib/content";


export async function getStaticProps(){
    return getTopicProps('notes', 'evanspde');
}

export default function Post({ topics, subtopics }) {
    return (<>
    <Head><title>Introduction</title></Head>
    <Layout category={"notes"} topic={"evanspde"} subtopic={"1-introduction"} topics={topics} subtopics={subtopics}>
        <h1>
            Chapter 1: Introduction and Definitions
        </h1>
    </Layout>
    </>);
}