import { Button, CardActions } from "@mui/material";
import React from "react";
import styles from "./ProductItem.module.css";
import { useNavigate } from "react-router-dom";

export default function ListItem({ item, refetch }) {
  const navigate = useNavigate();
  const handleDetailClick = (id) => {
    navigate(`/product/details/${id}`);
    console.log(id);
  };
  return (
    <>
      <div className={styles.Card} onClick={() => handleDetailClick(item.id)}>
        <div>
          <div className="img">
            <div className="imgProduct">
              <img src={item.image} />
            </div>
            <div className="discount-percent icpercent">
              <span className="percent">-23%</span>
            </div>
          </div>
          <div className="info">
            <h4 className="tp_product_name">{item.title}</h4>
            <h3 className="tp_product_name">{item.description}</h3>
            <div className="prices">
              <span style={{color:'red'}}>{item.price},000đ</span>
            </div>
          </div>
        </div>

        <CardActions className={styles.cardActions}>
          {/* <Button
            className={styles.detailButton}
            size="small"
            onClick={() => handleDetailClick(item.id)}
          >
            Detail
          </Button> */}
          {/* <Button className={styles.addToCartButton} size="small">
            Add to cart
          </Button> */}
        </CardActions>
      </div>
    </>
  );
}
