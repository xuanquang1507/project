import * as React from "react";
import ProductApi from "../../apis/ProductApi";
import ListCard from "./ListCard";
import styles from "./ProductItem.module.css";

export default function ProductItem() {
  const [listProduct, setListProduct] = React.useState([]);
  const fetchListProduct = async (config = {}) => {
    const response = await ProductApi.getAll(config);
    setListProduct(response.data);
  };
  React.useEffect(() => {
    fetchListProduct();
  }, []);
  return (
    <div className="container">
      <div className="row">
        {listProduct.map((item) => (
          <div className="col-lg-3 col-md-6 col-xs-12 my-3 list-card-container" key={item.id}>
            <ListCard item={item} refetch={fetchListProduct} />
          </div>
        ))}
      </div>
    </div>
  );
}
