import React from "react";
import { Profile } from "../components";

function Twitch() {
    return (
        <div className="flex vertical">
            <Profile id={"twitch"} className={"less-top-margin"}
                profile={`${process.env.PUBLIC_URL}/assets/images/twitch_profile.png`}
                name={"묘야님"}
                to={"https://www.twitch.tv/myoya_"}
            >트위치</Profile>
            
            <div className="flex horizontal">
                <Profile id={"twip"} className={"less-top-margin"}
                    profile={`${process.env.PUBLIC_URL}/assets/images/twip_profile.png`}
                    name={"묘야님"}
                    to={"https://twip.kr/myoya_"}
                >트윕</Profile>

                <Profile id={"toonation"} className={"less-top-margin"}
                    profile={`${process.env.PUBLIC_URL}/assets/images/toonation_profile.png`}
                    name={"묘야님"}
                    to={"https://toon.at/donate/myoya_"}
                >투네이션</Profile>

                <Profile id={"stickybomb"} className={"less-top-margin"}
                    profile={`${process.env.PUBLIC_URL}/assets/images/stickybomb_profile.png`}
                    name={"묘야님"}
                    to={"https://stickybomb.kr/e5851f2c177ac664bf04f9d53984ede3fd7f74d93944673ca48b66dba48b2402"}
                >스티키밤</Profile>
            </div>

            <div className="flex horizontal">
                <Profile id={"shopfanpick"} className={"less-top-margin"}
                    profile={`${process.env.PUBLIC_URL}/assets/images/shopfanpick_profile.png`}
                    name={"묘야"}
                    to={"https://shopfanpick.net/myoya_"}
                >샵팬픽</Profile>

                <Profile id={"fancim"} className={"less-top-margin"}
                    profile={`${process.env.PUBLIC_URL}/assets/images/fancim_profile.png`}
                    name={"묘야"}
                    to={"https://fancim.me/celeb/profile.aspx?cu_id=myoya"}
                >팬심</Profile>
            </div>
        </div>
    );
}

export default Twitch;