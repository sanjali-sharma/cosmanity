import Image from "next/image";

const Volunteer = () => {
    return (
        <>
            <div className="volunteer-container f-d f-vt f-v-c f-h-c">
                <h1 className="title font-suez h1-heading w-30 text-c-d">{`Let's help them get back to work`}</h1>
                <a href={"/form/volunteer"} className="volunteer-btn font-suez btn-p btn-x-lg">Volunteer Now</a>
                <div className="bottom-pattern">
                    <Image
                        src={"/images/bottom-pattern.svg"}
                        alt={"Bottom-Pattern"}
                        layout={"fill"}
                        objectFit={"contain"}
                    />
                </div>
            </div>
            <style jsx>
                {`
                    .volunteer-container {
                        position: relative;
                        background: #04014D;
                        height: 460px;
                        color: white;
                    }

                    .volunteer-container .title {
                        color: white !important;
                        margin-bottom: 3rem;
                    }

                    .volunteer-container .volunteer-btn {
                        z-index: 10;
                    }

                    .volunteer-container .volunteer-btn:hover {
                        color: white !important;
                    }

                    .volunteer-container .bottom-pattern {
                        position: absolute;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        height: 160px;
                        z-index: 1;
                    }

                    @media only screen and (max-device-width: 760px) {
                        .volunteer-container .title {
                            width: unset;
                        }

                        .volunteer-container .bottom-pattern {
                            height: 45px;
                        }
                    }
                `}
            </style>
        </>
    );
};

export default Volunteer;
