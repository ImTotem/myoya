import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/icon/myoya.svg";
import "./Gnb.css";

function LinkWithScroll({className, to, callback, children}) {
    return (
        <NavLink to={to} className={className} onClick={() => { window.scrollTo(0, 0); callback?.(); }} >
            {children}
        </NavLink>
    );
}

function Gnb() {
    const [scrolled, setScrolled] = useState(false);
    const [navOpened, setNavOpened] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    const hideNav = () => {
        setNavOpened(false);
    };

    const checkScreenSize = () => {
        const isSmallerThan860 = window.innerWidth <= 860;

        if (isSmallScreen !== isSmallerThan860) {
            setIsSmallScreen(isSmallerThan860);
        }
    };

    window.addEventListener( "scroll", () => { window.scrollY === 0 ? setScrolled(false) : !scrolled && setScrolled(true); }, { passive: true } );
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize, { passive: true });

    return (
        <>
            <nav id="main-nav" className={ `${scrolled ? "shrink" : ""} ${ navOpened ? " navrevealed" : "" }` }>
                <div className="left">
                    {!isSmallScreen && (
                        <>
                            <LinkWithScroll to="/Twitch">Twitch</LinkWithScroll>
                            <LinkWithScroll to="/Blog">Blog</LinkWithScroll>
                            <LinkWithScroll to="/Cafe">Cafe</LinkWithScroll>
                        </>
                    )}
                </div>
                <div className="flex center">
                    <LinkWithScroll to="/" className="logoWrap"><Logo /></LinkWithScroll>
                </div>
                <div className="right">
                    {!isSmallScreen && (
                        <>
                            <LinkWithScroll to="/Youtube">Youtube</LinkWithScroll>
                            <LinkWithScroll to="/Sns">Sns</LinkWithScroll>
                            <LinkWithScroll to="/Illustration">Illustration</LinkWithScroll>
                        </>
                    )}
                    
                    <div className="hbg openbtn" onClick={() => { setNavOpened(true); }} >
                        <div class="hbg-top"></div>
                        <div class="hbg-mid"></div>
                        <div class="hbg-bot"></div>
                    </div>
                </div>
            </nav>

            {isSmallScreen && (
                <nav id="nav" className={navOpened ? "navrevealed" : ""}>
                    <div className="hbg" onClick={hideNav}>
                        <div className="hbg-top"></div>
                        <div className="hbg-mid"></div>
                        <div className="hbg-bot"></div>
                    </div>

                    <LinkWithScroll to="/Twitch" callback={hideNav}>Twitch</LinkWithScroll>
                    <LinkWithScroll to="/Blog" callback={hideNav}>Blog</LinkWithScroll>
                    <LinkWithScroll to="/Cafe" callback={hideNav}>Cafe</LinkWithScroll>
                    <LinkWithScroll to="/Youtube" callback={hideNav}>Youtube</LinkWithScroll>
                    <LinkWithScroll to="/Sns" callback={hideNav}>Sns</LinkWithScroll>
                    <LinkWithScroll to="/Illustration" callback={hideNav}>Illustration</LinkWithScroll>
                </nav>
            )}
        </>
    );
}

export default Gnb;