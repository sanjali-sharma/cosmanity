import testimonialData from "./testimonialData";

const Testimonials = () => {
    return (
        <>
            <section className="testimonials lr-pad-d lr-pad-m tb-pad-d tb-pad-m f-d f-h-sb">
                <div className="testimonials-left">
                    <h1 className="h1-heading font-suez title">{testimonialData.content.heding}</h1>
                    <div className="desc body-large">{testimonialData.content.desc_one}</div>
                    <div className="desc body-large">{testimonialData.content.desc_two}</div>
                </div>
                <div className="testimonials-right"></div>
            </section>
            <style jsx>
                {`
                    .testimonials .testimonials-left {
                        width: 40%;
                    }

                    .testimonials .testimonials-left .desc {
                        margin-top: 24px;
                    }

                    .testimonials .testimonials-right {
                        width: 60%;
                    }
                `}
            </style>
        </>
    );
};

export default Testimonials;
