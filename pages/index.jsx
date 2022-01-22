import Head from "next/head";
import Hero from "../components/Hero/Hero";
import Intro from "../components/Intro/Intro";
import Layout from "../components/Layout/Layout";
import Testimonials from "../components/Testimonials/Testimonials";
import About from "../components/About/About";
import Team from "../components/Team/Team";
import FAQ from "../components/FAQ/FAQ";
import Volunteer from "../components/Volunteer/Volunteer";

export default function Home({ deviceType }) {
    return (
        <>
            <Head>
                <title>Cosmanity</title>
                <meta property="og:title" content="Cosmanity" key="title" />
            </Head>
            <Layout>
                <Hero />
                <Intro />
                <Testimonials />
                <About />
                <Team deviceType={deviceType} />
                <FAQ />
                <Volunteer />
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

export async function getServerSideProps(context) {
    const UA = context.req.headers['user-agent'];
    const isMobile = Boolean(UA.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    ))

    return {
        props: {
            deviceType: isMobile ? 'mobile' : 'desktop'
        }
    }
}
