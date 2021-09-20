import Image from "next/image";

const Header = (props) => {
    return (
        <>
            <nav className="nav-bar lr-pad-d lr-pad-m f-d f-h-sb">
                <div className="nav-logo-container" style={{ position: "relative" }}>
                    <Image src={"/cosmanity_logo.svg"} alt="cosmanity" layout={"fill"} />
                </div>
                <div className="nav-links-container f-d f-h-sb f-v-c hide-m">
                    <div className="nav-link body-regular">Testimonials</div>
                    <div className="nav-link body-regular">About</div>
                    <div className="nav-link body-regular">Contact</div>
                    <div className="donate-btn f-d f-h-c f-v-c c-pointer">Donate Now</div>
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
