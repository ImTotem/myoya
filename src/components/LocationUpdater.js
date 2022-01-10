import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function updateMetaTag(title, desc) {
    document.head.querySelectorAll("meta").forEach((element) => {
        if (element.classList.contains(".meta-url")) {
            element.content = window.location.href;
        } else if (element.classList.contains("meta-title")) {
            element.content = title;
        } else if (element.classList.contains("meta-desc")) {
            element.content = desc;
        }
    });
}

function LocationUpdater() {
    const location = useLocation();

    const update = () => {
        const { pathname } = location;

        if ( pathname === "/" ) {
            document.body.className = "home";

            document.title = "About Myoya";

            updateMetaTag("About Myoya", "About Myoya");
        } else {
            const path2 = pathname.replace("/", "").toLowerCase();
            const text =
                path2 === "twitch" ? "트위치" :
                path2 === "blog" ? "블로그" :
                path2 === "cafe" ? "카페" :
                path2 === "youtube" ? "유튜브" :
                path2 === "sns" ? "SNS" :
                path2 === "illustration" ? "그림"
                : "About Myoya";

            document.body.className = path2.charAt(0).toUpperCase() + path2.slice(1);

            document.title = `묘야's ${text}`;

            updateMetaTag(text, `묘야 ${text}`);
        }

    }
    
    useEffect(update, [location]);

    return null;
}
export default LocationUpdater;