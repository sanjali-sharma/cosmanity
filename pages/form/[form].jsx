import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

const Form = () => {
    const router = useRouter();
    const { form } = router.query;

    let formData = {
        type: "job",
        name: "Job Seeker",
        image: "/images/in-a-reace.svg",
        iframe: (
            <iframe
                src="https://tally.so/embed/mVqajn?hideTitle=1&alignLeft=1"
                width="100%"
                height="800"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="Job Seeker"
            ></iframe>
        ),
    };

    switch (form) {
        case "job-seeker":
            formData = {
                type: "job",
                name: "Job Seeker",
                image: "/images/in-a-reace.svg",
                iframe: (
                    <iframe
                        src="https://tally.so/embed/mVqajn?hideTitle=1&alignLeft=1"
                        width="100%"
                        height="800"
                        frameBorder="0"
                        marginHeight="0"
                        marginWidth="0"
                        title="Job Seeker"
                    ></iframe>
                ),
            };
            break;
        case "organization":
            formData = {
                type: "organization",
                name: "Organization",
                image: "/images/hero-organization.svg",
                iframe: (
                    <iframe
                        src="https://tally.so/embed/nP4N1n?hideTitle=1&alignLeft=1"
                        width="100%"
                        height="500"
                        frameBorder="0"
                        marginHeight="0"
                        marginWidth="0"
                        title="Organization"
                    ></iframe>
                ),
            };
            break;
        case "volunteer":
            formData = {
                type: "volunteer",
                name: "Volunteer",
                image: "/images/super-helper.svg",
                iframe: (
                    <iframe
                        src="https://tally.so/embed/3EAGl3?hideTitle=1&alignLeft=1"
                        width="100%"
                        height="500"
                        frameBorder="0"
                        marginHeight="0"
                        marginWidth="0"
                        title="Volunteer"
                    ></iframe>
                ),
            };
            break;
        default:
            break;
    }

    return (
        <>
            <Head>
                <title>Cosmanity</title>
                <meta property="og:title" content="Cosmanity" key="title" />
            </Head>
            <header className="page-header lr-pad-d lr-pad-m bg-image-full">
                <div className="brand-logo">
                    <Link href={"/"} passHref>
                        <Image src={"/cosmanity_logo.svg"} alt="cosmanity" layout={"fill"} objectFit={"contain"} />
                    </Link>
                </div>
                <div className="desc">
                    <h1 className="h1-heading title font-suez">Register as {formData.name}</h1>
                    <div className="body-large">
                        You’re on your way to success! Please answer the following questions <br /> about you as
                        honestly as you can. All answers will be confidential.
                    </div>
                </div>
                <div className="form-character-image hide-m">
                    <div className="character-image bg-image-full">
                        <Image src={formData["image"]} alt="character-image" layout={"fill"} objectFit={"contain"} />
                    </div>
                </div>
            </header>

            <div className="form lr-pad-m lr-pad-d tb-pad-d tb-pad-m ">{formData.iframe}</div>
            <style jsx>
                {`
                    .page-header {
                        padding-top: 48px;
                        padding-bottom: 48px;
                        background-color: #ffe9e3;
                        background-image: url(${require("./../../public/pattern-1.svg")});
                        background-position-x: right;
                        position: relative;
                    }

                    .form-character-image {
                        position: absolute;
                        width: 250px;
                        height: 250px;
                        bottom: 0;
                        right: 24%;
                    }

                    .character-image {
                        position: relative;
                        height: inherit;
                    }

                    .page-header .brand-logo {
                        position: relative;
                        height: 24px;
                        width: 200px;
                        cursor: pointer;
                    }

                    .desc {
                        margin-top: 64px;
                        width: 60%;
                    }

                    .desc .title {
                        margin-bottom: 24px;
                    }

                    .form {
                        width: 60%;
                        margin: 0 auto;
                    }

                    @media only screen and (max-device-width: 760px) {
                        .page-header {
                            background-image: unset;
                        }

                        .desc {
                            margin-top: 64px;
                            width: 100%;
                        }

                        .form {
                            width: 100%;
                        }
                    }
                `}
            </style>
        </>
    );
};

export default Form;
