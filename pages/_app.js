import "@fontsource/inter";
import "@fontsource/suez-one";
import "./../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        AOS.init({});
    }, []);
    return <Component {...pageProps} />;
}

export default MyApp;
