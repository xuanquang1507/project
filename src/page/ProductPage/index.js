import { useEffect, useRef, useState } from "react";
import ProductTable from "../../component/ProductTable";
import ProductApi from "../../apis/ProductApi";
import { Button, IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import ProductModalContext from "../../contexts/ProductModalContext";
import ProductModal from "../../component/ProductModal";
import ProductPagingContext from "../../contexts/ProductPagingContext";

const ProductPage = (props) => {
  const [listProduct, setListProduct] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [initDataModal, setInitDataModal] = useState({});
  const [pagingData, setPagingData] = useState({
    currentPage: 0,
    total: 0,
    limit: 5,
    search: "",
  });
  const ref = useRef(null);
  const handleSearch = async () => {
    if(ref.current.value?.trim()&&pagingData.currentPage !== 0){
      setPagingData({
        ...pagingData,
        currentPage: 0,
      })
    }else{
     await getPagingProduct();
    }
  };
  const fetchListProduct = async (config = {}) => {
    const response = await ProductApi.getAll(config);
    setListProduct(response.data);
  };

  const getPagingProduct = async () => {
    const response = await ProductApi.getPaging(
      pagingData.limit,
      pagingData.currentPage + 1, 
      ref.current.value?.trim() && {title: ref.current.value?.trim()},
      
      );
      const {data, headers} = response;
      setPagingData({
        ...pagingData,
        total: Number(headers["X-Total-Count"] ?? headers["x-total-count"]),
      })

      setListProduct(data)
    };
  useEffect(() => {
    getPagingProduct();
  }, [pagingData.currentPage]);

  const handleAddButton = () => {
    setInitDataModal({});
    setIsOpenModal(true);
  };

  return (
    <>
      <ProductPagingContext.Provider value={{ pagingData, setPagingData, refetch: getPagingProduct }}>
        <ProductModalContext.Provider
          value={{
            isOpenModal,
            setIsOpenModal,
            initDataModal,
            setInitDataModal,
            handleSearch,
          }}
        >
          <ProductModal />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "20px",
            }}
          >
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 400, // Adding margin to the Paper component
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
      </ProductPagingContext.Provider>
    </>
  );
};

export default ProductPage;
