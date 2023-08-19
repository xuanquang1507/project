import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "./ProductItem.module.css"; // Import CSS module
import { useNavigate } from "react-router-dom";

export default function ListCard({ item, refetch }) {
  const navigate = useNavigate();
  const handleDetailClick = (id) => {
    navigate(`/admin/product/details/${id}`)
    console.log(id);
  };  
  return (
    <>
      <Card sx={{ maxWidth: 345 }} className={styles.Card}>
      <div>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={item.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
          <Typography variant="body2" color="text.primary" className={styles.redColor}>
            Price: ${item.price}
          </Typography>
        </CardContent>
        </div>
        <CardActions className={styles.cardActions}>
          <Button className={styles.detailButton} size="small"  onClick={()=>handleDetailClick(item.id)}>
            Detail
          </Button>
          <Button className={styles.addToCartButton} size="small">
            Add to cart
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
