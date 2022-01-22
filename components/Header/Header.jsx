import Image from "next/image";
import { Link as ScrollTo } from "react-scroll";

const Header = (props) => {
    return (
        <>
            <nav className="nav-bar lr-pad-d lr-pad-m f-d f-h-sb">
                <div className="nav-logo-container" style={{ position: "relative" }}>
                    <Image src={"/cosmanity_logo.svg"} alt="cosmanity" layout={"fill"} />
                </div>
                <div className="nav-links-container f-d f-h-sb f-v-c hide-m">
                    <ScrollTo activeClass="active" to="testimonials" spy={true} smooth={true} duration={500}>
                        <div className="nav-link body-regular">Testimonials</div>
                    </ScrollTo>
                    <ScrollTo activeClass="active" to="about" spy={true} smooth={true} duration={500}>
                        <div className="nav-link body-regular">About</div>
                    </ScrollTo>
                    <ScrollTo activeClass="active" to="footer" spy={true} smooth={true} duration={500}>
                        <div className="nav-link body-regular">Contact</div>
                    </ScrollTo>
                    <div className="donate-btn f-d f-h-c f-v-c c-pointer hide-d hide-m">Donate Now</div>
                </div>

                <button
                    className={`hamburger hamburger--slider ${props.isActive ? "is-active" : ""}`}
                    type="button"
                    onClick={() => props.handleMobileNav(!props.isActive)}
                >
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
            </nav>
            <style jsx>
                {`
                    .nav-bar {
                        height: auto;
                        min-height: 112px;
                        position: fixed;
                        top: 0;
                        left: 0;
                        right: 0;
                        z-index: 5;
                        background-color: var(--dove);
                        box-shadow: 0px 5px 11px 0px rgba(50, 50, 50, 0);
                        transition: all 0.4s;
                    }

                    .logo-image {
                        height: 24px;
                        width: auto;
                    }

                    .nav-logo-container {
                        width: 200px;
                    }

                    .nav-links-container .nav-link {
                        margin-right: 40px;
                        cursor: pointer;
                    }

                    .nav-links-container .donate-btn {
                        background-color: var(--prussion);
                        height: 48px;
                        padding: 0 24px;
                        color: var(--dove);
                        font-family: "Suez One";
                        font-weight: 400;
                        font-size: 16px;
                    }

                    @media only screen and (max-device-width: 760px) {
                        .nav-bar {
                            min-height: 80px;
                            top: -2px;
                        }
                        .nav-logo-container {
                            width: 124px;
                        }
                    }
                `}
            </style>
        </>
    );
};

export default Header;
