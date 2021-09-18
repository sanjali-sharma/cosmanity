import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = (props) => {
    return (
        <>
            <div id={"root"}>
                <Header />
                {props.children}
                <Footer />
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
