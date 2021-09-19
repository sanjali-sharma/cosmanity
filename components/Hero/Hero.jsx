import Image from "next/image";

const Hero = () => {
    return (
        <>
            <section className="hero-container lr-pad-d lr-pad-m tb-pad-d tb-pad-m f-d f-h-sb">
                <div className="hero-left">
                    <h1 className="h1-heading font-suez">
                        Let's get you back <br /> on your feet.
                    </h1>
                    <div className="body-large hero-desc">
                        Cosmanity is a nonprofit that empowers COVID <br /> Affected Candidates to find their
                        credibility and be <br /> employable again.
                    </div>
                    <div className="btn-p btn-x-lg get-started-btn font-suez"> Get Started</div>
                </div>
                <div className="hero-right f-d f-h-e">
                    <div className="hero-image">
                        <Image src={"/images/relax-work.png"} alt={"Comanity-Hero-Image"} layout={"fill"} />
                    </div>
                </div>
            </section>
            <style jsx>
                {`
                    .hero-container .hero-left,
                    .hero-container .hero-right {
                        width: 50%;
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
                `}
            </style>
        </>
    );
};

export default Hero;
