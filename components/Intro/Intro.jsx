import { stepsData } from "./introData";

const Step = ({ step_no = 0 }) => {
    let data = stepsData[step_no];

    return (
        <>
            <div className="step-container f-d f-h-c">
                <div className="step-box font-suez f-d f-h-c f-v-c">{data.stepNo}</div>
                <div className="step-details f-d f-vt">
                    <h2 className="font-suez step-title">{data.title}</h2>
                    <div className="desc body-medium">{data.detail}</div>
                </div>
            </div>
            <style jsx>
                {`
                    .step-container .step-box {
                        width: 72px;
                        height: 72px;
                        background-color: var(--flamingo);
                        margin-right: 20px;
                        color: var(--dove);
                        font-size: 32px;
                    }
                    .step-container .step-details .step-title {
                        color: var(--dove) !important;
                    }
                    .step-container .step-details .desc {
                        color: var(--dove) !important;
                        opacity: 0.5;
                    }
                `}
            </style>
        </>
    );
};

const Intro = () => {
    return (
        <>
            <section className="hero-intro lr-pad-d lr-pad-m tb-pad-d tb-pad-m">
                <div className="how-it-works">
                    <h2 className="font-suez title text-c-d">How it works ?</h2>
                    <div className="body-large desc text-c-d">
                        When you lost your job, it can be hard to know how to get back into work. <br /> Cosmanity helps
                        you find a new job and we’ll support you every step of the way.
                    </div>
                    <div className="g-d g-col-3 steps">
                        <Step step_no={0} />
                        <Step step_no={1} />
                        <Step step_no={2} />
                    </div>
                </div>
            </section>
            <style jsx>
                {`
                    .hero-intro .how-it-works {
                        background-color: var(--prussion);
                        padding: 64px;
                    }

                    .hero-intro .how-it-works .title {
                        color: var(--dove) !important;
                    }

                    .hero-intro .how-it-works .desc {
                        margin-top: 24px;
                        margin-bottom: 64px;
                        color: var(--dove) !important;
                    }
                `}
            </style>
        </>
    );
};

export default Intro;
