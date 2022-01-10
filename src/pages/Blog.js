import React from "react";
import { Profile } from "../components";

function Blog() {
    return (
        <div className="flex horizontal">
            <Profile id={"blog"}
                profile={`${process.env.PUBLIC_URL}/assets/images/blog_profile.png`}
                name={"동화공방♥ : 네이버 블로그"}
                to={"https://blog.naver.com/myoya419"}
            >블로그</Profile>
        </div>
    );
}

export default Blog;