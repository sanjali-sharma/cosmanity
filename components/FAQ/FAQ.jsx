import React, { useState } from "react";
import { content } from "./FAQData";
import ReactHtmlParser from "react-html-parser";
import Image from "next/image";

const FAQ = () => {
    const [activeQuestions, setActiveQuestions] = useState([]);
    const handleActiveQuestion = (questionIndex) => {
        if (activeQuestions.includes(questionIndex)) {
            let newActiveQuestions = activeQuestions.filter((value) => value !== questionIndex);
            setActiveQuestions([...newActiveQuestions]);
        } else {
            setActiveQuestions([...activeQuestions, questionIndex]);
        }
    };
    const renderQuestions = (faqs) => {
        faqs = faqs ? faqs : [];
        let status = "down";
        let active = false;
        return faqs.map((faq, key) => {
            status = "down";
            active = false;
            if (activeQuestions.includes(key)) {
                status = "up";
                active = true;
            }
            return (
                <>
                    <div className="f-d f-vt faq-data" key={key}>
                        <div className="c-pointer" onClick={() => handleActiveQuestion(key)}>
                            <div className="g-d g-v-c question-wrapper">
                                <span className="body-large question">{faq.q}</span>
                                <div className="f-d f-v-s f-h-e chevron-icon-container">
                                    <Image src={"/images/expand.png"} width={15} height={15} alt="cosmanity" />
                                </div>
                            </div>
                            {active && (
                                <div className="answer-wrapper">
                                    <span className="f-d body-medium answer">{ReactHtmlParser(faq.a)}</span>
                                </div>
                            )}
                        </div>
                        {key + 1 !== faqs.length && <div className="divider"></div>}
                    </div>
                    <style jsx>
                        {`
                            .question-wrapper {
                                grid-template-columns: 8fr 1fr;
                            }
                            .faq-data {
                                background: white;
                                padding: 2rem;
                                margin-bottom: 32px;
                                border: 1px solid #EFF0F6;
                            }
                            .question-wrapper .question {
                                font-weight: 700;
                            }
                            .answer-wrapper {
                                margin-top: 1rem;
                            }
                        `}
                    </style>
                </>
            );
        });
    };
    return (
        <>
            <div className="faq lr-pad-d lr-pad-m tb-pad-d tb-pad-m ">
                <h1 className="h1-heading font-suez title">{content.heading}</h1>
                <div className="body-large desc">{content.desc}</div>
                <div className="faq-content f-d">
                    <div className="faq-left f-d">
                        <div
                            className="faq-img bg-image-full"
                            style={{
                                backgroundImage: `url("/images/faq.svg")`,
                            }}
                        />
                    </div>
                    <div className="faq-right">
                        <div className="faq-container f-d  f-vt">
                            <div className="faq-q"> {renderQuestions(content.faq)}</div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>
                {`
                    .faq {
                        background: linear-gradient(180deg, #ffedea 0%, rgba(255, 237, 234, 0) 100%);
                    }
                    .faq .desc {
                        margin-top: 24px;
                        width: 60%;
                    }
                    .faq .faq-left {
                        width: 30%;
                    }
                    .faq .faq-left .faq-img {
                        width: 240px;
                        height: 200px;
                        // background-position: bottom;
                        margin: auto;
                        margin-bottom: 3rem;
                    }
                    .faq .faq-right {
                        width: 70%;
                        margin-top: 80px;
                    }
                    @media only screen and (max-device-width: 760px) {
                        .faq .desc {
                            width: unset;
                        }
                        .faq .faq-left {
                            width: 0%;
                        }
                        .faq .faq-right {
                            width: 100%;
                        }
                        .faq-container {
                            padding-left: 0;
                            padding-right: 0;
                        }
                    }
                `}
            </style>
        </>
    );
};

export default FAQ;
