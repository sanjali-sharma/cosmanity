import Image from "next/image";

const SocialShare = ({ icon_name = "whatsapp" }) => {
    let imagePath = "";

    switch (icon_name) {
        case "whatsapp":
            imagePath = "/social-icons/whatsapp.svg";
            break;
        case "twitter":
            imagePath = "/social-icons/twitter.svg";
            break;
        case "fb":
            imagePath = "/social-icons/fb.svg";
            break;
        case "linkedin":
            imagePath = "/social-icons/linkedin.svg";
            break;
        default:
            imagePath = "/social-icons/whatsapp.svg";
    }

    return (
        <>
            <div className="social-box c-pointer">
                <div className="social-logo f-d f-h-c f-v-c">
                    <Image src={imagePath} width={20} height={20} />
                </div>
            </div>
            <style jsx>
                {`
                    .social-box {
                        width: 36px;
                        height: 36px;
                        padding: 8px;
                        background-color: var(--prussion);
                    }

                    div.social-box:not(:last-child) {
                        margin-right: 24px;
                    }
                `}
            </style>
        </>
    );
};

export default SocialShare;
