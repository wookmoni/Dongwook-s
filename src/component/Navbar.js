import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];
  return (
    <div>
      <div>
        <div className="login-button">
          <FontAwesomeIcon icon={faUser} />
          <div>로그인</div>
        </div>
      </div>
      <div className="nav-section">
        <img
          width={100}
          src="https://1000logos.net/wp-content/uploads/2017/02/Hennes-Logo-19682.jpg"
        />
      </div>
      <div className="menu-area">
        <div></div>
        <ul className="menu-list">
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>

        <div className="icon-box">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input type="text" placeholder="텍스트를 입력해주세요" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
