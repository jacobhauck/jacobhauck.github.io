import Layout from "@/components/layout";
import Head from "next/head";
import getTopicProps from "@/lib/content";

export async function getStaticProps(){
    return getTopicProps('solved-problems');
}

export default function SolvedProblemsHome({ topics }) {
    return (<>
        <Head><title>Solved Problems</title></Head>
        <Layout category={"solved-problems"} topics={topics}>
            <p>
                This is a collection of problems that I have solved.
            </p>
        </Layout>
    </>)
}