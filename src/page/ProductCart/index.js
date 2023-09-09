import React, { useEffect, useState } from "react";
import "./index.css";
import "./ProductDetail.css"; // Import your CSS file
import { useNavigate, useParams } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search"; // Import biểu tượng tìm kiếm
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import styles from "./ProductItem.module.css";

export default function ProductCart() {
  const navigate = useNavigate();
  const [deleteCart, setDeleteCart] = useState(true);
  const handleHome = () => {
    navigate("/itemproduct");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleBuy = () => {
    alert("Bạn đã mua hàng thành công!");
  };
  const getdata1 = localStorage.getItem("cartItems");

  const parseData1 = JSON.parse(getdata1);
  const handleDeleteCart = (cartItem) => {
    // alert("Bạn đã xóa thành công!");
    setDeleteCart(e=>!e)
    const filtered = parseData1.filter((item) => item.id !== cartItem.id);
    localStorage.setItem("cartItems", JSON.stringify(filtered))
  };

  const handleClear = () => {
    const nav = document.getElementById("menuNavMobile");
    nav.classList.add("hidden");
    nav.classList.remove("block");
  };

  const handleNavMobile = () => {
    const nav = document.getElementById("menuNavMobile");
    nav.classList.add("block");
    nav.classList.remove("hidden");
  };

  const getdata = localStorage.getItem("cartItems");
  const parseData = JSON.parse(getdata);
  console.log("getdata", parseData);
  return (
    <>
      <div className="container-fluid header">
        <div className="row flex-row">
          <div className="flex-1 ">
            <div className="menu-icon none-pc" onClick={handleNavMobile}>
              <MenuIcon />
            </div>
            <div className="first-menu-index none-tablet none-mb">
              <a href="#" className="bg-slate-300">
                {" "}
                Nam{" "}
              </a>
              <a href="#"> Nữ </a>
            </div>
          </div>
          <div className="flex-1">
            <div className="logo-text text-center">
              {/* <img
                    src="https://pos.nvncdn.net/556e88-134541/store/20221011_6NQfoNa67Oj0RNf5okgXoTh6.png"
                    alt="Mô tả hình ảnh"
                    /> */}
              <h1>Mixmart</h1>
            </div>
          </div>
          <div className="flex-1 text-right">
            <div className="user-cart">
              <div className="header-wrap-icon">
                <SearchIcon className={styles.nonePc} />
                <PersonIcon className="mx-3" onClick={handleLogin} />
                <ShoppingCartIcon />
              </div>
            </div>
          </div>
        </div>

        {/* Modal menu */}
        <div
          className="menu-nav-mobile active-menu-nav-mobile hidden"
          id="menuNavMobile"
        >
          <div
            className="menu-nav-mobile-click-close"
            id="clearIcon"
            onClick={handleClear}
          >
            <ClearIcon
              style={{
                fontSize: "30px",
                marginTop: "10px",
                marginRight: "10px",
              }}
            />
          </div>
          <div className="sidebar-container ">
            <div className="content-menu">
              <ul>
                <li>
                  <a href="#" className="text-content-menu">
                    Trang chủ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-content-menu">
                    Tin tức
                  </a>
                </li>
                <li>
                  <a href="#" className="text-content-menu">
                    Sản phẩm
                  </a>
                </li>
                <li>
                  <a href="#" className="text-content-menu">
                    Bộ sưu tập
                  </a>
                </li>
                <li>
                  <a href="#" className="text-content-menu">
                    <AccountCircleIcon /> Đăng nhập
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8 col-md-12 none-tablet none-mb">
              <div className="menu-center">
                <ul className="main-nav-new flex">
                  <li>
                    <a href="#" onClick={handleHome}>
                      Trang chủ
                    </a>
                  </li>
                  <li>
                    <a href="#">Tin tức</a>
                  </li>
                  <li>
                    <a href="#listItem">Sản phẩm</a>
                  </li>
                  <li>
                    <a href="#">Bộ sưu tập</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              {/* 
                Search
                */}
              <div className="search-bar none-tablet none-mb">
                <input type="text" placeholder="Tìm kiếm..." />
                <button>Tìm</button>
              </div>
            </div>
          </div>
        </div>

        <div className="owl-stage-outer none-pc">
          <div className="owl-stage">
            <div className="owl-item active">
              <a href="#" className="owl-item__text owl-item__text1">
                <span>Nam</span>
              </a>
            </div>
          </div>
          <div className="owl-stage">
            <div className="owl-item active">
              <a href="#" className="owl-item__text">
                <span>Nữ</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="product-cart" style={{minHeight:"60vh"}}>
        <div className="container">
          <p className="title-cart">Tóm tắt mặt hàng</p>
          <div className="list-cart flex">
            <div className="list-cart-product text-left w-1/4">
              <p>Sản phẩm</p>
            </div>
            <div className="list-cart-info text-center w-1/3">
              <p>Mô tả</p>
            </div>
            <div className="list-cart-info text-center w-1/3">
              <p>Giá</p>
            </div>
            <div className="list-cart-info text-center w-1/3">
              <p>Hành động</p>
            </div>
          </div>
          {parseData.map((item, index) => (
            <div className="list-cart flex" key={index}>
              <div className="list-cart-product text-left w-1/4">
                <img src={item.image} />{" "}
                {/* Thay thế bằng tên thuộc tính thích hợp */}
              </div>
              <div className="list-cart-info text-center w-1/3">
                <p>{item.description}</p>{" "}
                {/* Thay thế bằng tên thuộc tính thích hợp */}
              </div>
              <div
                className="list-cart-info text-center w-1/3"
                style={{ color: "red" }}
              >
                <p>{item.price},000đ</p>{" "}
                {/* Thay thế bằng tên thuộc tính thích hợp */}
              </div>
              <div className="list-cart-info text-center w-1/3">
                <button onClick={handleBuy}>Mua ngay</button>{" "}
                {/* Thay thế bằng tên thuộc tính thích hợp */}
                <button
                  onClick={() => {
                    handleDeleteCart(item);
                  }}
                  style={{ background: "red" }}
                >
                  Xóa
                </button>{" "}
                {/* Thay thế bằng tên thuộc tính thích hợp */}
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="tp_footer">
        <div className="footer-block">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-6 col-12 footer-shop">
                <h2 className="titleFooter">TP. Hồ Chí Minh</h2>
                <ul>
                  <li className="listFooter">
                    <strong>Store 1</strong>: Tầng 3, Số 70 Lữ Gia, Phường 15,
                    Quận 11, Thành phố Hồ Chí Minh
                  </li>
                  <li className="listFooter">
                    <strong>Store 2</strong>: Tầng 2, Số 123 Nguyễn Du, Phường
                    10, Quận 5, Thành phố Hồ Chí Minh
                  </li>
                  <li className="listFooter">
                    <strong>Store 3</strong>: Tầng 4, Số 456 Lê Lợi, Phường 8,
                    Quận 3, Thành phố Hồ Chí Minh
                  </li>
                  <li className="listFooter">
                    <strong>Store 4</strong>: Tầng 1, Số 789 Cách Mạng Tháng
                    Tám, Phường 12, Quận 10, Thành phố Hồ Chí Minh
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-sm-6 col-12 footer-shop">
                <h2 className="titleFooter">TP. Hà Nội</h2>
                <ul>
                  <li className="listFooter">
                    <strong>Store 1</strong>: Tầng 3, Số 70 Lữ Gia, Phường 15,
                    Quận 11, Thành phố Hồ Chí Minh
                  </li>
                  <li className="listFooter">
                    <strong>Store 2</strong>: Tầng 2, Số 123 Nguyễn Du, Phường
                    10, Quận 5, Thành phố Hồ Chí Minh
                  </li>
                  <li className="listFooter">
                    <strong>Store 3</strong>: Tầng 4, Số 456 Lê Lợi, Phường 8,
                    Quận 3, Thành phố Hồ Chí Minh
                  </li>
                  <li className="listFooter">
                    <strong>Store 4</strong>: Tầng 1, Số 789 Cách Mạng Tháng
                    Tám, Phường 12, Quận 10, Thành phố Hồ Chí Minh
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
