import Image from "next/image";

const Hero = () => {
    return (
        <>
            <section className="hero-container lr-pad-d lr-pad-m tb-pad-d tb-pad-m f-d f-h-sb f-v-c">
                <div className="hero-left" data-aos={"fade-up"} data-aos-duration="2000">
                    <h1 className="h1-heading font-suez title">
                        Let's get you back <br /> on your feet.
                    </h1>
                    <div className="hero-mobile-image hide-d">
                        <Image
                            src={"/images/relax-work.png"}
                            alt={"Comanity-Hero-Image"}
                            layout={"fill"}
                            objectFit={"contain"}
                        />
                    </div>
                    <div className="body-large hero-desc">
                        Cosmanity is a nonprofit that empowers COVID <br /> Affected Candidates to find their
                        credibility and be <br /> employable again.
                    </div>
                    <div className="btn-p btn-x-lg get-started-btn font-suez"> Get Started</div>
                </div>
                <div className="hero-right f-d f-h-e hide-m" data-aos={"fade-up"} data-aos-duration="2000">
                    <div className="hero-image">
                        <Image
                            src={"/images/relax-work.png"}
                            alt={"Comanity-Hero-Image"}
                            layout={"fill"}
                            objectFit={"contain"}
                        />
                    </div>
                </div>
            </section>
            <style jsx>
                {`
                    .hero-container {
                        min-height: 80vh;
                        height: auto;
                    }

                    .hero-container .hero-left,
                    .hero-container .hero-right {
                        width: 50%;
                    }

                    .hero-container .hero-right {
                        height: 360px;
                    }

                    .hero-left .hero-desc {
                        margin-top: 24px;
                    }

                    .hero-left .get-started-btn {
                        margin-top: 40px;
                        width: 250px;
                        font-size: 24px;
                    }

                    .hero-image {
                        width: 500px;
                        position: relative;
                    }

                    @media only screen and (max-device-width: 760px) {
                        .hero-container .hero-left,
                        .hero-container .hero-right {
                            width: 100%;
                        }

                        .hero-mobile-image {
                            margin-top: 24px;
                            width: auto;
                            position: relative;
                            height: 100px;
                        }
                    }
                `}
            </style>
        </>
    );
};

export default Hero;
