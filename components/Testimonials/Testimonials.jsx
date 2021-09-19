import { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";

import testimonialData from "./testimonialData";

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    adaptiveHeight: true,
};

const Testimonials = () => {
    const carouselRef = useRef(null);

    const handleCarouselNav = (type = "prev") => {
        if (carouselRef) {
            switch (type) {
                case "prev":
                    carouselRef.current.slickPrev();
                    break;
                case "next":
                    carouselRef.current.slickNext();
                    break;
                default:
                    carouselRef.current.slickPrev();
                    break;
            }
        }
    };

    return (
        <>
            <section className="testimonials lr-pad-d lr-pad-m tb-pad-d tb-pad-m f-d f-h-sb">
                <div className="testimonials-left">
                    <h1 className="h1-heading font-suez title">{testimonialData.content.heding}</h1>
                    <div className="desc body-large">{testimonialData.content.desc_one}</div>
                    <div className="desc body-large">{testimonialData.content.desc_two}</div>
                </div>
                <div className="testimonials-right f-d f-h-e">
                    <div className="video-carousel-container">
                        <Slider {...settings} className="video-carousel" ref={carouselRef}>
                            <div className="carousel-item">
                                <h3>1</h3>
                            </div>
                            <div className="carousel-item">
                                <h3>2</h3>
                            </div>
                            <div className="carousel-item">
                                <h3>3</h3>
                            </div>
                        </Slider>
                        <div className="carousel-arrows f-d c-pointer">
                            <div className="arrow-box f-d f-h-c f-v-c" onClick={() => handleCarouselNav("prev")}>
                                <div className="arrow-icon">
                                    <Image src={"/icons/arrow-right.svg"} layout={"fill"} objectFit={"contain"} />
                                </div>
                            </div>
                            <div className="arrow-box f-d f-h-c f-v-c" onClick={() => handleCarouselNav("next")}>
                                <div className="arrow-icon arrow-next">
                                    <Image src={"/icons/arrow-right.svg"} layout={"fill"} objectFit={"contain"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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

                    .video-carousel {
                        height: 500px;
                    }

                    .video-carousel-container {
                        width: 80%;
                        position: relative;
                    }

                    .video-carousel-container .carousel-arrows {
                        position: absolute;
                        bottom: 0px;
                        right: 0px;
                    }

                    .video-carousel-container .carousel-arrows .arrow-box {
                        width: 80px;
                        height: 80px;
                        background-color: var(--prussion);
                    }

                    .video-carousel-container .carousel-arrows .arrow-box .arrow-icon {
                        position: relative;
                        width: 24px;
                        height: 24px;
                    }

                    .video-carousel-container .carousel-arrows .arrow-box .arrow-next {
                        transform: rotate(180deg);
                    }

                    .carousel-item {
                        background-color: wheat;
                        height: 500px;
                    }
                `}
            </style>
        </>
    );
};

export default Testimonials;
