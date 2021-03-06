import React, { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

import { useAuth } from "../../contexts/authContext";

import { cartContext } from "../../contexts/cartContext";

import "./Header.css";

const Header = () => {
  const location = useLocation();
  const {
    handleLogout,
    user: { email },
  } = useAuth();
  const { getCart, cartLength } = useContext(cartContext)
  useEffect(() => {
    getCart()
  }, [])
  const NAV_ITEMS = [
    {
      title: "TROPHIES",
      link: "/brands",
      id: 1,
    },
    {
      title: "STORES",
      link: "/trophies",
      id: 2,
    },
    {
      title: "STORES",
      link: "*",
      id: 3,
    },
    {
      title: "NEWS",
      link: "*",
      id: 4,
    },
    {
      title: "CONTACTS",
      link: "*",
      id: 5,
    },
  ];
  return (
    <>
      <nav>
        <div>
          {email ? (
            <Link to="/auth">
              <button className="sign-btn" onClick={handleLogout}>
                Logout
              </button>
            </Link>
          ) : null}

          {email ? null : (
            <Link to="/auth">
              <button className="sign-btn">Login</button>
            </Link>
          )}
        </div>
      </nav>
      <div className="header">
        <div></div>
        <Link to="/">
          <img
            width="400px"
            src="https://logos-world.net/wp-content/uploads/2020/05/Chelsea-Logo.png"
            alt=""
          />
        </Link>
        <div>
          <Link to="/cart">
            <Badge count={+cartLength}>
              <ShoppingCartOutlined
                style={{ fontSize: "30px", cursor: "pointer" }}
              />
            </Badge>
          </Link>
        </div>
      </div>
      <div className="navbar">
        {NAV_ITEMS.map((item) => (
          <Link
            to={item.link}
            className={
              location.pathname === item.link
                ? "navbar__item-active"
                : "navbar__item"
            }
          >
            {item.title}
          </Link>
        ))}

        {email === "akjol2001@gmail.com" ? (
          <Link
            className={
              location.pathname === "/admin"
                ? "navbar__item-active"
                : "navbar__item"
            }
            to="/admin"
          >
            ADMIN
          </Link>
        ) : null}
      </div>
    </>
  );
};

export default Header;
