import React from "react";
import AboutCard from "./AboutCard";
import { content } from "./AboutData";

const About = () => {
    return (
        <>
            <div className="about lr-pad-d lr-pad-m tb-pad-d tb-pad-m f-d f-h-sb">
                <div className="about-left">
                    <h1 className="h1-heading font-suez title">{content.heading}</h1>
                    <div className="desc body-large">{content.desc}</div>
                    <div className='about-cards f-d'>
                        {content.cards.map((x, i) => <AboutCard title={x.title} key={i} desc={x.desc} color={i === 1 ? 'yellow' : ''} />)}
                    </div>
                </div>
                <div className='about-right'>
                    <div className="bg-image-full" style={{
                        backgroundImage: `url("/images/about_design.svg")`
                    }} />
                </div>
            </div>
            <style jsx>
                {`
                    .about{
                        background: linear-gradient(180deg, #F9F4E8 0%, rgba(249, 244, 232, 0) 100%);
                    }
                    .about .about-left{
                        width:75%
                    }
                    .about .about-right{
                        width:25%;
                        margin-right: -4rem;
                    }
                    .about .about-right .bg-image-full{
                        width:100%;
                        height:100%;
                        background-position:right;
                    }
                    .about .about-left .desc {
                        margin-top: 24px;
                    }
                    .about .about-left .about-cards {
                        margin-top: 40px;
                    }
                    @media only screen and (max-device-width: 760px) {
                        .about .about-left{
                            width:100%;
                        }
                        .about .about-right{
                           display:none;
                        }
                        .about .about-left .about-cards {
                            flex-direction: column;
                        }
                    }
            `}
            </style>
        </>
    )
}

export default About