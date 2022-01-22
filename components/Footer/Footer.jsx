import Image from "next/image";
import { useState } from "react";
import SocialShare from "../SocialShare/SocialShare";

const Footer = () => {
    const [emailAddress, setemailAddress] = useState("");

    return (
        <>
            <footer className="footer lr-pad-d lr-pad-m">
                <div className="g-d g-col-3 footer-container">
                    <div className="company-info">
                        <div className="footer-logo-container" style={{ position: "relative" }}>
                            <Image src={"/cosmanity_logo.svg"} alt="cosmanity" layout={"fill"} />
                        </div>
                        <div className="address body-regular">
                            #75, Kailash Building, K G Marg <br />
                            Delhi 110001
                        </div>
                    </div>
                    {/* company-info div ends */}
                    <div className="contact-us">
                        <div className="title body-medium">Contact</div>
                        <div className="info f-d f-vt">
                            <a href="tel:+919658245122" className="detail font-suez body-big">+91 9658245122</a>
                            <a href="mailto:info@cosmanity.com" className="detail font-suez body-big">info@cosmanity.com</a>
                        </div>
                    </div>
                    {/* contact us div ends */}
                    <div className="follow-us">
                        <div className="title body-medium">Follow Us</div>
                        <div className="social-container f-d ">
                            <SocialShare icon_name={"instagram"} url={"https://www.instagram.com/cosmanity/"} />
                            <SocialShare icon_name={"twitter"} url={"https://mobile.twitter.com/@cosmanity"} />
                        </div>
                        {/* <div className="title body-medium join-news-title">Join Newsletter</div>
                        <div className="f-d f-h-sb email-form">
                            <div className="email-field">
                                <input
                                    type="text"
                                    name="email"
                                    id=""
                                    placeholder="Email Address"
                                    className="input-email"
                                    value={emailAddress}
                                    onChange={(e) => setemailAddress(e.target.value)}
                                />
                            </div>
                            <button className="btn-p font-suez send-btn">Send</button>
                        </div> */}
                    </div>
                    {/* Follow us div end */}
                </div>

                <div className="divider"></div>

                <div className="footer-end f-d f-h-sb f-v-c">
                    <div className="copy-right body-regular hide-m">
                        &copy; 2021 COSMANITY NGO. All Rights Reserved.
                    </div>

                    <div className="privacy-terms f-d f-h-sb">
                        <div className="footer-link c-pointer body-regular">Privacy Policy</div>
                        <div className="footer-link c-pointer body-regular">Terms of use</div>
                    </div>

                    <div className="copy-right body-regular hide-d  text-c-d">
                        &copy; 2021 COSMANITY NGO. <br /> All Rights Reserved.
                    </div>
                </div>
            </footer>
            <style jsx>
                {`
                    .footer {
                        padding-top: 64px;
                        padding-bottom: 64px;
                        background-color: var(--seashell);
                    }

                    .footer-logo-container {
                        width: 200px;
                        height: 24px;
                    }

                    .footer .company-info .address,
                    .footer .contact-us .info,
                    .footer div.social-container {
                        margin-top: 24px;
                    }

                    .footer .contact-us .info {
                        gap: 1rem;
                    }

                    .footer .contact-us a {
                        font-size: 28px;
                    }

                    .footer .contact-us .title,
                    .footer .follow-us .title {
                        font-weight: 700;
                    }

                    .footer .follow-us .join-news-title {
                        margin-top: 40px;
                        margin-bottom: 24px;
                    }

                    .email-form .email-field {
                        width: 90%;
                    }

                    .email-form .input-email {
                        background: var(--dove);
                        border: 1px solid #eff0f6 !important;
                        padding: 0 24px;
                        outline: none !important;
                        height: 64px;
                        width: inherit;
                    }

                    .email-form .input-email:focus-visible {
                        border: 1px solid #eff0f6 !important;
                        outline: none !important;
                    }

                    .email-form .send-btn {
                        border-radius: unset;
                    }

                    .divider {
                        border-top: 2px dashed var(--prussion);
                        opacity: 0.2;
                        margin-top: 64px;
                        margin-bottom: 40px;
                    }

                    div.footer-link:not(:last-child) {
                        margin-right: 40px;
                    }

                    @media only screen and (max-device-width: 760px) {
                        .hide-desk {
                            display: block;
                        }

                        .footer-container {
                            display: block;
                        }

                        .footer .company-info,
                        .footer .contact-us {
                            margin-bottom: 40px;
                        }

                        .footer .contact-us .info {
                            margin-bottom: 24px;
                        }

                        .footer .contact-us .info .detail {
                            margin-top: 8px;
                        }

                        .footer-end {
                            display: block;
                        }

                        .footer-end .privacy-terms {
                            margin-top: 16px;
                            margin-bottom: 32px;
                        }

                        .footer-end .privacy-terms .footer-link {
                            margin-top: 8px;
                        }

                        .email-form {
                            flex-direction: column;
                        }

                        .email-form .email-field {
                            width: 100%;
                            margin-bottom: 16px;
                        }
                    }
                `}
            </style>
        </>
    );
};

export default Footer;
