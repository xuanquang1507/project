import { useEffect, useRef, useState } from "react";
import ProductTable from "../../component/ProductTable";
import ProductApi from "../../apis/ProductApi";
import { Button, IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import ProductModalContext from "../../contexts/ProductModalContext";
import ProductModal from "../../component/ProductModal";

const ProductPage = (props) => {
  const [listProduct, setListProduct] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [initDataModal, setInitDataModal] = useState({});
  const ref = useRef(null);
  const handleSearch = async () => {
    console.log(ref.current.value);
    await fetchListProduct(
      ...(ref.current.value?.trim() && [
        {
          params: {
            title: ref.current.value?.trim(),
          },
        },
      ])
    );
  };
  const fetchListProduct = async (config = {}) => {
    const response = await ProductApi.getAll(config);
    setListProduct(response.data);
  };
  useEffect(() => {
    fetchListProduct();
  }, []);

  const handleAddButton = () => {
    setInitDataModal({});
    setIsOpenModal(true);
  }


  return (
    <>
      <ProductModalContext.Provider value={{isOpenModal, setIsOpenModal, initDataModal, setInitDataModal, handleSearch}}>
        <ProductModal />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom:"20px"
          }}
        >
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 400,// Adding margin to the Paper component
            }}
          >
            <InputBase
              inputRef={ref}
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search"
              inputProps={{ "aria-label": "Search" }}
            />
            <IconButton
              type="button"
              sx={{ p: "10px" }}
              aria-label="search"
              onClick={handleSearch}
            >
              <SearchIcon />
            </IconButton>
          </Paper>
          <Button variant="contained" onClick={handleAddButton}>
            <AddIcon />
          </Button>
        </div>
        <ProductTable data={listProduct} refetch={fetchListProduct} />
      </ProductModalContext.Provider>
    </>
  );
};

export default ProductPage;
