import Image from "next/image";
import React from "react";
import SocialShare from "../SocialShare/SocialShare";

const TeamCard = ({ image, name, designation, deviceType, social }) => {
    return (
        <>
            <div className="carousel-item">
                <div className="carousel-content">
                    <div className="body-medium">{designation}</div>
                    <h2 className="h2-heading font-suez">{name}</h2>
                </div>
                <div className="carousel-image">
                    <Image
                        src={image}
                        height={deviceType === "mobile" ? "2250px" : "400px"}
                        width={deviceType === "mobile" ? "2250px" : "400px"}
                        objectFit={"cover"}
                        alt={""}
                    />
                    <div className="social-handles f-d f-v-c f-h-c">
                        <div className="social-container f-d ">
                            <SocialShare icon_name={"instagram"} url={social.instagram} />
                            <SocialShare icon_name={"linkedin"} url={social.linkedin} />
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>
                {`
                    .carousel-item {
                        position: relative;
                        background: var(--dove);
                    }
                    .carousel-item .carousel-content {
                        padding: 40px;
                    }

                    .carousel-item .carousel-image {
                        position: relative;
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

                    .carousel-image .social-handles {
                        position: absolute;
                        left: 0;
                        right: 0;
                        bottom: 4px;
                        top: 0;
                        background: #04014D60;
                        opacity: 0;
                        transition: all 0.4s;
                    }

                    .carousel-item:hover .social-handles {
                        opacity: 1;
                    }

                    @media only screen and (max-device-width: 760px) {
                        .carousel-content {
                            padding: 1rem !important;
                        }
                    }
                `}
            </style>
        </>
    );
};

export default TeamCard;
