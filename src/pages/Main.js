import { React, useState } from "react";
import { Loading } from "../components";

function Main() {
    const [loading, setLoading] = useState(true);

    return (
        <section id="profile">
            <picture id="profileBG">
                <img
                    src={`${process.env.PUBLIC_URL + '/assets/images/background.png'}`}
                    srcSet={`${process.env.PUBLIC_URL + '/assets/images/background.png'}`}
                    sizes="(max-width: 1920px) 100vw, 1920px"
                    alt="Myoya Live Broadcast"
                    onLoad={() => setLoading(false)}
                />
            </picture>
            <div style={{display: loading ? "block" : "none"}}><Loading /></div>
            <div className="mainInfo">
                <h1>묘야 / Myoya</h1>
                <h2>소속: <a className="collab" href="https://www.collabkorea.com/" target="_blank" rel="noopener noreferrer" >Collab</a></h2>
                <div>생일: 04월 19일</div>
                <br/>
                <h3>팬덤명: 젤리단 / 묘덕 </h3>
                <h4>방송 장르: Just Chatting, 노래, 그림</h4>
                <br/><br/>
                <h4>이메일: myoya419@naver.com</h4>
            </div>
        </section>
    );
}

export default Main;