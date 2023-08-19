import React from "react";
import ProductApi from "../../apis/ProductApi";
import "./ProductDetail.css"; // Import your CSS file
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const param = useParams()
  const [product, setProduct] = React.useState({});

  const fetchDetail = async (id) => {
    const response = await ProductApi.getByID(id);
    setProduct(response.data);
  };
  React.useEffect(() => {
    fetchDetail(param.id);
  }, []);

  return (
     <>
        <div key={product.id} className="product-card">
          <img className="product-image" src={product.image} alt={product.name} />
          <h2 className="product-name">{product.name}</h2>
          <p className="product-price">Price: ${product.price}</p>
          <p className="product-description">Description: {product.description}</p>
        </div>
     </>
  );
}
