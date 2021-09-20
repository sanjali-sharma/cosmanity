import React, { Component } from "react";
import Image from "next/image";

const MobileNavList = [
    {
        name: "Testimonials",
        hash: "",
    },
    {
        name: "About Us",
        hash: "",
    },
    {
        name: "Contact",
        hash: "",
    },
];

class MobileNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openMenu: false,
        };
    }

    handleOpen = (e) => {
        const cParent = e.currentTarget;
        const checker = e.currentTarget.querySelector(".menu-expand");
        if (checker) {
            cParent.classList.toggle("active-parent");
            checker.classList.toggle("menu-show");
        }
    };

    renderMobileItems = () => {
        return MobileNavList.map(({ name, hash }, idx) => {
            return (
                <div className="mob-menu-tab" key={idx}>
                    <div className="menu-item f-d f-h-sb f-v-c">
                        <div className="body-large font-wt-500">{name}</div>
                        <div className="arrow-right">
                            <Image src={"/chevron-right.svg"} layout={"fill"} objectFit={"contain"} />
                        </div>
                    </div>
                    <div className="divider"></div>
                </div>
            );
        });
    };

    render() {
        return (
            <>
                <div
                    className={`nav-mobile-container ${
                        this.props.isClicked ? "open-menu" : "closed-menu"
                    } lr-pad-d lr-pad-m`}
                >
                    <div className="mob-menu-items">{this.renderMobileItems()}</div>

                    <div className="btn-p btn-x-lg font-suez get-started-btn">Get Started</div>
                </div>

                <style>
                    {`
                        .closed-menu {
                            display: none !important;
                        }

                        @media only screen and (max-device-width: 760px) {
                            .arrow-right {
                                position: relative;
                                width: 24px;
                                height: 24px;
                            }

                            .nav-mobile-container .get-started-btn {
                                position: absolute;
                                bottom: 90px;
                                left: 16px;
                                right: 16px;
                            }

                            .nav-mobile-container  .divider {
                                border-top: 2px dashed var(--prussion);
                                opacity: 0.2;
                                margin-bottom: 18px;
                            }
        

                            .menu-item {
                                margin-bottom: 18px;
                            }

                            .nav-mobile-container {
                                display: flex;
                                flex-direction: column;
                                position: fixed;
                                top: 0;
                                left: 0;
                                background: var(--dove);
                                width: 100vw;
                                height: 0vh;
                                padding: 1rem 1rem 1rem 1rem;
                                overflow-y: auto;
                                overflow-x: hidden;
                                z-index: 990;
                                transition: all 0.2s;
                            }

                            .nav-mobile-container.open-menu {
                                height: 100vh;
                                padding: 4rem 1rem 1rem 1rem;
                                top: 76px;
                            }

                            .nav-mobile-container .item,
                            .nav-mobile-container .menu-item {
                                color: var(--carbon);
                            }

                            .nav-mobile-container .mob-menu-tab .menu-expand {
                                background: #fafafa;
                                height: 0px;
                                display: none;
                                width: 100vw;
                                margin-left: -1rem;
                                padding: 1rem;
                                transition: all 0.4s;
                            }

                            .mob-menu-tab .open-icon {
                                width: 12px;
                                height: 12px;
                                transform: rotate(0deg);
                                transition: all 0.4s;
                            }

                            .mob-menu-tab.active-parent .open-icon {
                                transform: rotate(180deg);
                            }

                            ::-webkit-scrollbar {
                                width: 1px;
                            }

                            ::-webkit-scrollbar-thumb {
                                border-radius: 50px;
                                background: #69696900;
                            }
                        }
                    `}
                </style>
            </>
        );
    }
}

export default MobileNav;
