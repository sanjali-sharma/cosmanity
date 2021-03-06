import { stepsData } from "./introData";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const Step = ({ step_no = 0 }) => {
    let data = stepsData[step_no];

    return (
        <>
            <div className="step-container f-d f-h-c" data-aos={"fade-left"} data-aos-duration="1000">
                <div className="step-box font-suez f-d f-h-c f-v-c">{data.stepNo}</div>
                <div className="step-details f-d f-vt">
                    <h2 className="font-suez step-title">{data.title}</h2>
                    <div className="desc body-medium">{data.detail}</div>
                </div>
            </div>
            <style jsx>
                {`
                    .step-container .step-box {
                        width: 72px;
                        height: 72px;
                        background-color: var(--flamingo);
                        margin-right: 20px;
                        color: var(--dove);
                        font-size: 32px;
                    }
                    .step-container .step-details .step-title {
                        color: var(--dove) !important;
                    }
                    .step-container .step-details .desc {
                        color: var(--dove) !important;
                        opacity: 0.5;
                    }

                    @media only screen and (max-device-width: 760px) {
                        .step-container {
                            margin-top: 24px;
                            width: 80%;
                            margin-left: auto;
                            margin-right: auto;
                        }
                    }
                `}
            </style>
        </>
    );
};

const TypeCard = ({
    bgColor = "#ffff",
    title = "",
    image = "/images/hero-organization.png",
    href = "/form/job-seeker",
}) => {
    const [hoverActive, sethoverActive] = useState(false);
    let diplay = "none";
    if (hoverActive) diplay = "flex";

    return (
        <>
            <Link href={href}>
                <div
                    className="type-card c-pointer"
                    onMouseOver={() => {
                        sethoverActive(true);
                    }}
                    onMouseOut={() => {
                        sethoverActive(false);
                    }}
                    data-aos={"zoom-in-up"}
                    data-aos-duration="1000"
                >
                    <div className="info text-c-d body-medium">I???m a</div>
                    <div className="title font-suez text-c-d">{title}</div>
                    <div className="type-image f-d f-h-c">
                        <Image src={image} layout={"fill"} objectFit={"contain"} alt={""} />
                    </div>

                    <div className="open-url f-d f-h-c f-v-c" style={{ display: diplay }}>
                        <div className="arrow-right-icon">
                            <Image src={"/icons/arrow-right-up.svg"} layout={"fill"} objectFit={"contain"} alt={""} />
                        </div>
                    </div>
                </div>
            </Link>
            <style jsx>
                {`
                    .type-card {
                        padding: 40px 0px;
                        background-color: ${bgColor};
                        position: relative;
                    }

                    .open-url {
                        position: absolute;
                        bottom: 0px;
                        right: 0px;
                        width: 80px;
                        height: 80px;
                        background-color: var(--prussion);
                    }

                    .open-url .arrow-right-icon {
                        width: 24px;
                        height: 24px;
                        position: relative;
                    }

                    .type-card .info {
                        font-weight: 700;
                        opacity: 0.4;
                    }

                    .type-card .title {
                        margin-top: 8px;
                        font-size: 36px;
                        color: var(--prussion);
                        margin-bottom: 48px;
                    }

                    .type-card .type-image {
                        position: relative;
                        width: 80%;
                        height: 200px;
                        margin: 0 auto;
                    }
                `}
            </style>
        </>
    );
};

const Intro = () => {
    return (
        <>
            <section className="hero-intro lr-pad-d lr-pad-m tb-pad-d tb-pad-m">
                <div className="how-it-works">
                    <h2 className="font-suez title text-c-d">How it works ?</h2>
                    <div className="body-large desc text-c-d ">
                        When you lost your job, it can be hard to know how to get back into work. <br /> Cosmanity helps
                        you find a new job and we???ll support you every step of the way.
                    </div>
                    <div className="g-d g-col-3 steps">
                        <Step step_no={0} />
                        <Step step_no={1} />
                        <Step step_no={2} />
                    </div>
                </div>
                <div className="org-types g-d g-col-3 g-gap-32" id={"intro-forms"}>
                    <TypeCard
                        bgColor={"#ECDFF6"}
                        title={"Organization"}
                        image={"/images/hero-organization.svg"}
                        href={"/form/organization"}
                    />
                    <TypeCard
                        bgColor={"#FFE9E3"}
                        title={"Job Seeker"}
                        image={"/images/in-a-reace.svg"}
                        href={"/form/job-seeker"}
                    />
                    <TypeCard
                        bgColor={"#C8EBFF;"}
                        title={"Volunteer"}
                        image={"/images/super-helper.svg"}
                        href={"/form/volunteer"}
                    />
                </div>
            </section>
            <style jsx>
                {`
                    .hero-intro .how-it-works {
                        background-color: var(--prussion);
                        padding: 64px 0px;
                    }

                    .hero-intro .how-it-works .title {
                        color: var(--dove) !important;
                    }

                    .hero-intro .how-it-works .desc {
                        margin-top: 24px;
                        margin-bottom: 64px;
                        color: var(--dove) !important;
                        width: 80%;
                        margin-left: auto;
                        margin-right: auto;
                    }

                    .org-types {
                        margin-top: 40px;
                    }
                    @media only screen and (max-device-width: 760px) {
                        .steps,
                        .org-types {
                            display: block;
                        }

                        .hero-intro .how-it-works .desc {
                            font-size: 18px;
                            line-height: 25px;
                        }
                    }
                `}
            </style>
        </>
    );
};

export default Intro;
