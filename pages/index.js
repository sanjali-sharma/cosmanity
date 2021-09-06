import Head from "next/head";

export default function Home() {
    return (
        <div className="home-page-container">
            <Head>
                <title>Cosmanity</title>
                <meta name="description" content="Connecting the Unconnected" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="theme-color" content="#04014D" />
            </Head>
            <h1 className="f-d f-v-c f-h-c">For the ones in need</h1>
        </div>
    );
}
