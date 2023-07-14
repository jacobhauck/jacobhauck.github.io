import style from "@/styles/layout.module.css";
import TopMatter from "./topmatter";
import Navbar from "./navbar";
import Footer from "./footer";
import Article from "./article";
import Topics from "./topics";


export default function Layout( { children, category, topics } ) {
    return (<>
        <section className={style.verticalFlex}>
            <TopMatter />
            <Navbar category={category}/>
            <section className={style.sublayoutFlex}>
                {topics ? <Topics category={category} topics={topics}></Topics> : (<></>)}
                
                <section className={style.contentFlex}>
                    <Article>
                        {children}
                    </Article>
                </section>
            </section>
            <Footer />
        </section>
    </>);
}