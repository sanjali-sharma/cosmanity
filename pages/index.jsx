import Hero from "../components/Hero/Hero";
import Intro from "../components/Intro/Intro";
import Layout from "../components/Layout/Layout";
import Testimonials from "../components/Testimonials/Testimonials";
import About from "../components/About/About";

export default function Home() {
    return (
        <>
            <Layout>
                <Hero />
                <Intro />
                <Testimonials />
                <About />
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
