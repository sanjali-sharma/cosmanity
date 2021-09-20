import { useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MobileNav from "../Header/MobileNav";

const Layout = (props) => {
    const [showMobileMenu, setshowMobileMenu] = useState(false);

    return (
        <>
            <div id={"root"}>
                <Header isActive={showMobileMenu} handleMobileNav={setshowMobileMenu} />
                {props.children}
                <Footer />
                <MobileNav isClicked={showMobileMenu} handleMobileNav={setshowMobileMenu} />
            </div>
            <style jsx>{`
                #root {
                    margin-top: 112px;
                    overflow-x: hidden;
                }
            `}</style>
        </>
    );
};

export default Layout;
