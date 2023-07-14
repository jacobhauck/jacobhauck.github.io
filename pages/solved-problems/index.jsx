import Layout from "@/components/layout";
import Head from "next/head";
import { getTopicData } from "@/lib/content";

export async function getStaticProps(){
    const topicData = getTopicData(["solved-problems"]);
    return {
        props: {
            topicData
        }
    }
}

export default function SolvedProblemsHome({ topicData }) {
    return (<>
        <Head><title>Solved Problems</title></Head>
        <Layout category={"solved-problems"} topics={topicData}>
            <p>
                This is a collection of problems that I have solved.
            </p>
        </Layout>
    </>)
}