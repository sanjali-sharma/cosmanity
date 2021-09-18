import Layout from "../components/Layout/Layout";

export default function Home() {
    return (
        <>
            <Layout>
                <div className="hero tb-pad-d"></div>
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
