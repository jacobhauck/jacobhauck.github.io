import Head from "next/head";
import Layout from "@/components/layout";


export default function Home() {
    return (
        <>
            <Head>
                <title>Jacob's Website</title>
            </Head>
            <Layout>
                <p>Welcome to my website!</p>
                <p>I'm not sure why you're here already, seeing as there is almost no content posted yet. Enjoy anyway, I guess!</p>
            </Layout>
        </>
    );
}