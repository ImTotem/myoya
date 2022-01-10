import React from "react";
import { Profile } from "../components";

function Illustration() {
    return (
        <div className="flex horizontal">
            <Profile id={"ateli"}
                profile={`${process.env.PUBLIC_URL}/assets/images/ateli_profile.png`}
                name={"묘야's Atelier"}
                to={"https://myoya419.ateli.com/"}
            >아트리</Profile>

            <Profile id={"pixiv"}
                profile={`${process.env.PUBLIC_URL}/assets/images/pixiv_profile.png`}
                name={"MYOYA"}
                to={"https://pixiv.net/users/33892571"}
            >픽시브</Profile>

            <Profile id={"artmug"}
                profile={`${process.env.PUBLIC_URL}/assets/images/artmug_profile.png`}
                name={"묘야 작가"}
                to={"http://artmug.kr/index.php?channel=view&uid=1359"}
            >아트머그</Profile>
        </ div>
    );
}

export default Illustration;