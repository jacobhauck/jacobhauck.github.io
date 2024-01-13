import Layout from "@/components/layout";
import Link from "next/link";
import Head from "next/head";
import Article from "@/components/article";


export default function About() {
    return (
        <>
            <Head><title>About Jacob</title></Head>
            <Layout category={'about'}>
            <Article>
                <h1>About Me</h1>
                <p>
                    Hello, my name is Jacob Hauck. I am currently a P.h.D. candidate (started 8/2022)
                    in mathematics at Missouri University of Science and Technology. My research is 
                    currently focused on efficient operator learning for high-dimensional problems
                    using low-rank tensor decomposition.
                </p>
                <p>
                    I also do some consulting work with <Link href="https://simerse.com">Simerse, Inc.</Link>,
                    a computer vision startup of which I was one of the original cofounders and where I served
                    as Chief Technology Officer for a few years before starting my P.h.D.
                </p>
            </Article>
            </Layout>
        </>
    );
}