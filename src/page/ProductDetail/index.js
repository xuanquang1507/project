import React from "react";
import ProductApi from "../../apis/ProductApi";
import "./ProductDetail.css"; // Import your CSS file
import { useNavigate, useParams } from "react-router-dom";
import "./index.css";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search"; // Import biểu tượng tìm kiếm
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import styles from './ProductItem.module.css'

export default function ProductDetail() {
  const navigate = useNavigate();
  const param = useParams();
  const [product, setProduct] = React.useState({});
  const [cartItems, setCartItems] = React.useState([]);

  const fetchDetail = async (id) => {
    const response = await ProductApi.getByID(id);
    setProduct(response.data);
  };
  React.useEffect(() => {
    fetchDetail(param.id);
  }, []);

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
  const handleAddToCart = () => {
    // Thêm sản phẩm vào danh sách giỏ hàng
    const newCartItems = [...cartItems, product];
    setCartItems(newCartItems);

    // Lưu danh sách sản phẩm giỏ hàng vào localStorage (nếu bạn muốn lưu trữ giỏ hàng khi làm mới trang)
    localStorage.setItem("cartItems", JSON.stringify(newCartItems));

    // Hiển thị thông báo hoặc chuyển đến trang giỏ hàng
    alert("Đã thêm sản phẩm vào giỏ hàng!");
  };

  return (
    <>
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
      <div className="container-fluid">
        <div className="row clearfix">
            <div className="product-left">
              <div className="grid-images">
                <img src={product.image} className="img-product"/>
              </div>
            </div>
            <div className="product-right">
              <h3>{product.title}</h3>
              <p className="pro_sku">SKU: QJ004</p>

              <div className="product-price">
                <span>{product.price},000đ</span>
              </div>

              {/*  */}
              <div className="clearfix product-attributes">
                <div className="selector-wrapper size req">
                  <label>Kích thước:</label>
                  <ul>
                    <li>
                      <span>L</span>
                    </li>
                    <li>
                      <span>M</span>
                    </li>
                    <li>
                      <span>S</span>
                    </li>
                  </ul>
                </div>
                <div className="action-btn">
                  <button className="add-to-cart tp_button" onClick={handleAddToCart}>Thêm Vào Giỏ</button>
                </div>

              {/*  */}
                <div className="product-policy">
                  <div className="box-icon row">
                    <div className="col-12">
                      <div className="banner-footer-item">
                        <img src="https://pos.nvncdn.net/556e88-134541/bn/20221017_sMyWamgsdGC9FG4KShYUZ6Za.png"/>
                        <div className="banner-footer-item-info">
                          <p className="banner-footer-item-title">MIỄN PHÍ SHIP CHO HÓA ĐƠN TRÊN 1 TRIỆU</p>
                          <p className="banner-footer-item-des">(Áp dụng toàn quốc)</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="banner-footer-item">
                        <img src="https://pos.nvncdn.net/556e88-134541/bn/20221017_3z4Gsifz4wmIEOdFcJ8WTuU6.png"/>
                        <div className="banner-footer-item-info">
                          <p className="banner-footer-item-title">HOTLINE LIÊN HỆ</p>
                          <p className="banner-footer-item-des">Từ thứ 2 đến Chủ Nhật</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="banner-footer-item">
                        <img src="https://pos.nvncdn.net/556e88-134541/bn/20221017_sMyWamgsdGC9FG4KShYUZ6Za.png"/>
                        <div className="banner-footer-item-info">
                          <p className="banner-footer-item-title">ĐỔI HÀNG LÊN TỚI 7 NGÀY</p>
                          <p className="banner-footer-item-des">(Khách hàng giữ nguyên tem mác HOẶC hóa đơn)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/*  */}
                <div className="product-content-tab">
                  <ul className="nav nav-pills">
                    <li className="active">
                      <p className="content-product">MÔ TẢ SẢN PHẨM</p>
                    </li>
                    <li className="active">
                      <p className="content-product2">CHI TIẾT</p>
                    </li>
                  </ul>
                </div>

                {/*  */}
                <div className="tab-content clearfix">{product.description}</div>
              </div>
            </div>
        </div>
      </div>

      {/*  */}

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
      {/* <div key={product.id} className="product-card">
        <img className="product-image" src={product.image} alt={product.name} />
        <h2 className="product-name">{product.name}</h2>
        <p className="product-price">Price: ${product.price}</p>
        <p className="product-description">
          Description: {product.description}
        </p>
      </div> */}
    </>
  );
}