const Header = () => {
    return (
        <>
            <nav className="nav-bar lr-pad-d lr-pad-m f-d f-h-sb">
                <div className="logo-container"></div>
                <div className="nav-links-container f-d f-h-sb f-v-c">
                    <div className="nav-link body-small">Testimonials</div>
                    <div className="nav-link body-small">About</div>
                    <div className="nav-link body-small">Contact</div>
                    <div className="btn-p btn-sm">Donate Now</div>
                </div>
            </nav>
            <style jsx={"true"}>
                {`
                    .nav-bar {
                        height: auto;
                        min-height: 112px;
                    }

                    .nav-links-container .nav-link {
                        margin-right: 40px;
                    }
                `}
            </style>
        </>
    );
};

export default Header;
