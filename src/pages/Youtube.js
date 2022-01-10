import React from "react";
import { Profile } from "../components";

function Youtube() {
    return (
        <div className="flex horizontal">
            <Profile id={"youtube1"}
                profile={`${process.env.PUBLIC_URL}/assets/images/youtube1_profile.png`}
                name={"묘야(노래)"}
                to={"https://www.youtube.com/channel/UC4eCeHvwkrk50PJYUA8anYQ"}
            >유튜브</Profile>

            <Profile id={"youtube2"}
                profile={`${process.env.PUBLIC_URL}/assets/images/youtube2_profile.png`}
                name={"Myoya(방송)"}
                to={"https://www.youtube.com/channel/UCDZTV0gSwZBZriB3GmnGq0w"}
            >유튜브</Profile>
        </div>
    );
}

export default Youtube;