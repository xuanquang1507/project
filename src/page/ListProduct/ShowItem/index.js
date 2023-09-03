import React from "react";
import "./index.css";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search"; // Import biểu tượng tìm kiếm
import ListItem from "./ListItem";
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ProductApi from "../../../apis/ProductApi";
import { useNavigate } from "react-router-dom";
import styles from './ProductItem.module.css'

export default function ShowItem() {
  const navigate = useNavigate();
  const [listProduct, setListProduct] = React.useState([]);
  const fetchListProduct = async (config = {}) => {
    const response = await ProductApi.getAll(config);
    setListProduct(response.data);
  };

  const handleHome = () => {
    navigate("/itemproduct");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleClear = () => {
    const nav = document.getElementById("menuNavMobile")
    nav.classList.add("hidden");
    nav.classList.remove("block");
  }

  const handleNavMobile = () => {
    const nav = document.getElementById("menuNavMobile")
    console.log("🚀 ~ file: index.js:36 ~ handleNavMobile ~ nav:", nav)
    nav.classList.add("block");
    nav.classList.remove("hidden");
  }
  React.useEffect(() => {
    fetchListProduct();
  }, []);
  return (
    <div>
      {/* Header */}
      <div className="container-fluid header">
        <div className="row flex-row">
          <div className="flex-1 " >
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
                  <SearchIcon className={styles.nonePc}/>
                  <PersonIcon className="mx-3" onClick={handleLogin} />
                  <ShoppingCartIcon />
              </div>
            </div>
          </div>
        </div>

        {/* Modal menu */}
        <div className="menu-nav-mobile active-menu-nav-mobile hidden" id="menuNavMobile" >
          <div className="menu-nav-mobile-click-close" id="clearIcon" onClick={handleClear}>
            <ClearIcon style={{
              fontSize:'30px',
              marginTop:'10px',
              marginRight:'10px',
            }}/>
          </div>
          <div className="sidebar-container ">
            <div className="content-menu">
              <ul>
                <li>
                  <a href="#" className="text-content-menu">Trang chủ</a>
                </li>
                <li>
                  <a href="#" className="text-content-menu">Tin tức</a>
                </li>
                <li>
                  <a href="#" className="text-content-menu">Sản phẩm</a>
                </li>
                <li>
                  <a href="#" className="text-content-menu">Bộ sưu tập</a>
                </li>
                <li>
                  <a href="#" className="text-content-menu"><AccountCircleIcon/> Đăng nhập</a>
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
                <input
                  type="text"
                  placeholder="Tìm kiếm..."
                />
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

      {/* Slider */}
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://pos.nvncdn.net/556e88-134541/bn/20230320_zk1SfSVA.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://pos.nvncdn.net/556e88-134541/bn/20230320_6orPK57k.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://pos.nvncdn.net/556e88-134541/bn/20230320_6orPK57k.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* category */}
      <div className="section-category-home">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-3 col-6 item-category-home">
              <div className="box-category">
                <a href="#" className="flex">
                  <div className="category-image ">
                    <img src="https://pos.nvncdn.net/556e88-134541/pc/20221018_MlgcV2pktv3F004miqAV0H0j.png" />
                  </div>
                  <div className="category-info">
                    <h4>Áo Hoodie</h4>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 col-6 item-category-home">
              <div className="box-category">
                <a href="#" className="flex">
                  <div className="category-image ">
                    <img src="https://pos.nvncdn.net/556e88-134541/pc/20221017_xcwpCwZb0wkOwqHGhVTDDuWb.png" />
                  </div>
                  <div className="category-info">
                    <h4>Áo Sơ mi</h4>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 col-6 item-category-home">
              <div className="box-category">
                <a href="#" className="flex">
                  <div className="category-image ">
                    <img src="https://pos.nvncdn.net/556e88-134541/pc/20221017_tAyzNRanCxKDu5mfHyzXDsw5.png" />
                  </div>
                  <div className="category-info">
                    <h4>Áo Khoác</h4>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 col-6 item-category-home">
              <div className="box-category">
                <a href="#" className="flex">
                  <div className="category-image ">
                    <img src="https://pos.nvncdn.net/556e88-134541/pc/20221017_iLHu5fKZAymofyKcaP6DL4mj.png" />
                  </div>
                  <div className="category-info">
                    <h4>Áo Polo</h4>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 col-6 item-category-home">
              <div className="box-category">
                <a href="#" className="flex">
                  <div className="category-image ">
                    <img src="https://pos.nvncdn.net/556e88-134541/pc/20221018_qBISKgkrHT6VdVvMZbGCiIzp.png" />
                  </div>
                  <div className="category-info">
                    <h4>Quần Kaki</h4>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 col-6 item-category-home">
              <div className="box-category">
                <a href="#" className="flex">
                  <div className="category-image ">
                    <img src="https://pos.nvncdn.net/556e88-134541/pc/20221018_5eiZibDU1j8rNS1GY6ikh1xN.png" />
                  </div>
                  <div className="category-info">
                    <h4>Quần Short</h4>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 col-6 item-category-home">
              <div className="box-category">
                <a href="#" className="flex">
                  <div className="category-image ">
                    <img src="https://pos.nvncdn.net/556e88-134541/pc/20221017_D9pALi06GHrKzDq09bxjDtaL.png" />
                  </div>
                  <div className="category-info">
                    <h4>Quần âu</h4>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-3 col-sm-3 col-6 item-category-home">
              <div className="box-category">
                <a href="#" className="flex">
                  <div className="category-image ">
                    <img src="https://pos.nvncdn.net/556e88-134541/pc/20221017_vHpnJAxA9LQBdsLqVQPInaLi.png" />
                  </div>
                  <div className="category-info">
                    <h4>Quần Jogger</h4>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section */}
      <div className="section-main-product">
        <div className="banner-index-head">
          <div className="banner--img">
            <img
              src="https://pos.nvncdn.net/556e88-134541/bn/20221017_x7JisGPgEVYcRKKANWuNTn1x.png"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>

      {/* items */}
      <div className="container" id="listItem">
        <div className="row r-main-prd">
          <div className="main-prd">
            {listProduct.map((item) => (
              <div
                className="col-6 col-sm-4 col-md-3 col-xs-12 product-item optimizer_img"
                key={item.id}
              >
                <ListItem item={item} refetch={fetchListProduct} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* section */}
      <div className="section-main-product">
        <div className="banner-index-head">
          <div className="banner--img">
            <img
              src="https://pos.nvncdn.net/556e88-134541/bn/20221017_H1V8ft5tHMMRPqWiPJowfRfB.png"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>

      {/* footer */}
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
    </div>
  );
}
