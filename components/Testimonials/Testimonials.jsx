import React, { useRef } from "react";
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

const VideoItem = ({ image }) => {
    return (
        <>
            <div className="carousel-item">
                <div className="carousel-image">
                    <Image src={image} layout={"fill"} objectFit={"cover"} />
                </div>
                <div className="play-btn-container f-d f-h-c ">
                    <div className="play-btn c-pointer  f-d f-h-c f-v-c">
                        <div className="play-icon">
                            <Image src={"/icons/play.svg"} layout={"fill"} objectFit={"contain"} />
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>
                {`
                    .carousel-item {
                        height: 500px;
                        position: relative;
                    }

                    .carousel-item .carousel-image {
                        position: relative;
                        height: 100%;
                    }

                    .play-btn-container {
                        position: absolute;
                        top: 42%;
                        left: 0;
                        right: 0;
                    }

                    .play-btn {
                        height: 80px;
                        width: 80px;
                        background-color: var(--flamingo);
                    }

                    .play-icon {
                        position: relative;
                        width: 36px;
                        height: 36px;
                    }
                `}
            </style>
        </>
    );
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

    const renderCarouselItem = (list) => {
        return list.map(({ image, video_link }, idx) => <VideoItem image={image} key={`VID-{idx}`} />);
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
                            {renderCarouselItem(testimonialData.videoCarousel)}
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

                    @media only screen and (max-device-width: 760px) {
                        .testimonials {
                            flex-direction: column;
                        }

                        .testimonials .testimonials-right,
                        .testimonials .testimonials-left {
                            width: 100%;
                        }

                        .video-carousel-container {
                            margin-top: 40px;
                            width: 100%;
                        }
                    }
                `}
            </style>
        </>
    );
};

export default Testimonials;
