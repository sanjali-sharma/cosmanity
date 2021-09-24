import React, { useRef } from "react";
import { content } from "./TeamData";
import Slider from "react-slick";
import TeamCard from './TeamCard'
import Image from "next/image";

const Team = ({ deviceType }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: deviceType === 'mobile' ? 1.1 : 3.1,
        slidesToScroll: 1,
        arrows: false,
        adaptiveHeight: true,
    };
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
        return list.map(({ image, name, designation }, idx) => {
            return (
                <TeamCard image={image} name={name} designation={designation} deviceType={deviceType} key={`VID-${idx}`} />
            )
        }
        );
    };

    return (
        <>
            <div className="team lr-pad-d lr-pad-m tb-pad-d tb-pad-m ">
                <div className='f-d'>
                    <h1 className="h1-heading font-suez title">{content.heading}</h1>
                    <div className="carousel-arrows f-d c-pointer">
                        <div className="arrow-box f-d f-h-c f-v-c" onClick={() => handleCarouselNav("prev")}>
                            <div className="arrow-icon">
                                <Image
                                    src={"/icons/arrow-right.svg"}
                                    layout={"fill"}
                                    objectFit={"contain"}
                                    alt={""}
                                />
                            </div>
                        </div>
                        <div className="arrow-box f-d f-h-c f-v-c" onClick={() => handleCarouselNav("next")}>
                            <div className="arrow-icon arrow-next">
                                <Image
                                    src={"/icons/arrow-right.svg"}
                                    layout={"fill"}
                                    objectFit={"contain"}
                                    alt={""}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <Slider {...settings} className="video-carousel" ref={carouselRef}>
                    {renderCarouselItem(content.videoCarousel)}
                </Slider>
            </div>
            <style jsx>
                {`
                    .team {
                        background: linear-gradient(180deg, var(--seashell)  50%, var(--dove) 50%);
                    }
                    .team .title{
                        margin-bottom:64px;
                    }
                    .team .carousel-arrows{
                        margin-left: auto;
                    }
                    .team .carousel-arrows .arrow-box {
                        width: 80px;
                        height: 80px;
                        background-color: var(--prussion);
                    }

                    .team .carousel-arrows .arrow-box .arrow-icon {
                        position: relative;
                        width: 24px;
                        height: 24px;
                    }

                    .team .carousel-arrows .arrow-box .arrow-next {
                        transform: rotate(180deg);
                    }
                `}
            </style>
        </>
    )
}

export default Team