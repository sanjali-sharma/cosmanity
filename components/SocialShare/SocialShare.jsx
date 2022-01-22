import Image from "next/image";

const SocialShare = ({ icon_name = "whatsapp", url }) => {
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
        case "instagram":
            imagePath = "/social-icons/instagram.svg";
            break;
        default:
            imagePath = "/social-icons/whatsapp.svg";
    }

    return (
        <>
            <div className="social-box c-pointer">
                <a className="social-logo f-d f-h-c f-v-c" href={url}>
                    <Image src={imagePath} width={20} height={20} alt={""} />
                </a>
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
