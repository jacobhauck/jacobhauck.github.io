import Head from "next/head";
import Layout from "@/components/layout";


export default function Home() {
    return (
        <>
            <Head>
                <title>Jacob's Website</title>
            </Head>
            <Layout>
                <h1>Welcome to my website!</h1>
                <p>I'm not sure why you're here already, seeing as there is almost no content posted yet. Enjoy anyway, I guess!</p>
            </Layout>
        </>
    );
}