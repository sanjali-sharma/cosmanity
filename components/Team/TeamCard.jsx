import Image from "next/image";
import React from "react";

const TeamCard = ({ image, name, designation, deviceType }) => {
    return (
        <>
            <div className="carousel-item">
                <div className='carousel-content'>
                    <div className='body-medium'>{designation}</div>
                    <h2 className='h2-heading font-suez'>{name}</h2>
                </div>
                <div className="carousel-image">
                    <Image
                        src={image}
                        height={deviceType === 'mobile' ? '2250px' : '400px'}
                        width={deviceType === 'mobile' ? '2250px' : '400px'}
                        objectFit={"cover"}
                        alt={""} />
                </div>
            </div>
            <style jsx>
                {`
                    .carousel-item {
                        height: 500px;
                        position: relative;
                        margin: 0 1.5rem;
                        background:var(--dove);
                       
                    }
                    .carousel-item .carousel-content{
                        padding:40px;
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

export default TeamCard