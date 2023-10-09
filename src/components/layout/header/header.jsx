import { Fragment } from "react";
import "./header.scss";
import { Link } from "react-router-dom";


import YouTubeImg from "../../../assets/images/youtube.svg"
import YouTubeAccImg from "../../../assets/images/youtube-home-account.png"
import MenuIcon from "../../../assets/icons/menu-icon.svg"
import SearchIcon from "../../../assets/icons/search-icon.svg"
import VoiceIcon from "../../../assets/icons/voice-icon.svg"
import LoadVideoIcon from "../../../assets/icons/load-icon.svg"
import NotificationIcon from "../../../assets/icons/notification-icon.svg"


const Header = () => {
  return (
    <Fragment>
      <header>
        <div className=" header__container">
          <div className="header__left">
            <div className="header__left__first__box">
              <button>
                <img src={MenuIcon} alt="Menu button icon" />
              </button>
            </div>
            <div className="header__left__second__box">
              <Link to="/">
                <img src={YouTubeImg} alt="" />
              </Link>
            </div>
          </div>
          <div className="header__center">
            <form className="header__form">
              <div className="header__search__box">
                <input className="header__search__input" type="text" placeholder="Searching..."  />
                <div className="header__search__icon__box">
                  <img src={SearchIcon} alt="Search icon" />
                </div>
              </div>
            </form>
                <div className="header__search__voice__box">
                  <button className="header__search__voice__btn">
                    <img src={VoiceIcon} alt="Voice search" />
                  </button>
                </div>
              
          </div>
          <div className="header__right">
            <div className="header__add__video__box">
              <button className="header__add__video__btn">
                <img src={LoadVideoIcon} alt="Add Video Icon" />
              </button>
            </div>
            <div className="header__notification__box">
              <button className="header__notification__btn">
                <img src={NotificationIcon} alt="Notification icon" />
              </button>
            </div>
            <div className="header__account__box">
              <button className="header__account__btn">
                <img src={YouTubeAccImg} alt="Account image" />
              </button>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  )
}

export default Header;