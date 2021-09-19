import Hero from "../components/Hero/Hero";
import Intro from "../components/Intro/Intro";
import Layout from "../components/Layout/Layout";

export default function Home() {
    return (
        <>
            <Layout>
                <Hero />
                <Intro />
            </Layout>
            <style jsx>
                {`
                    .hero {
                    }
                `}
            </style>
        </>
    );
}
