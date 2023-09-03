import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ProductModalContext from "../../contexts/ProductModalContext";
import { useFormik } from "formik";
import * as yup from "yup";
import ProductApi from "../../apis/ProductApi";
import ProductPagingContext from "../../contexts/ProductPagingContext";

const validationSchema = yup.object({
  image: yup
    .string("Enter image name")
    .required("Image is required"),
  title: yup
    .string("Enter product name")
    .required("Name is required"),
  description: yup
    .string("Enter product description")
    .min(10, "Description should be of minimum 10 characters length")
    .required("Description is required"),
  price: yup
    .string("Enter product price")
    .required("Price is required"),

});

export default function ProductModal() {
  const {
    isOpenModal,
    setIsOpenModal,
    initDataModal,
    setInitDataModal,
    handleSearch,
  } = React.useContext(ProductModalContext);
  const {pagingData, setPagingData} = React.useContext(ProductPagingContext);
console.log("AVC", initDataModal);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: initDataModal.id ?? "",
      image: initDataModal.image ?? "",
      title: initDataModal.title ?? "",
      description: initDataModal.description ?? "",
      price: initDataModal.price ?? "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      if (values.id) {
        await handleEditProduct({
          id: values.id,
          image: values.image,
          description: values.description,
          title: values.title,
          price: values.price,
        });
      } else {
        await handleCreateProduct({
          image: values.image,
          description: values.description,
          title: values.title,
          price: values.price,
        });
      }
      formik.resetForm();
      setPagingData({
        ...pagingData,
        currentPage: 0,
      });
    },
  });

  const handleClose = () => {
    setIsOpenModal(false);
  };

  const handleCreateProduct = async ({ image, description, title,price }) => {
    await ProductApi.create({
      image,
      description,
      title,
      price
    });
  };
  const handleEditProduct = async ({ id, image, description, title,price }) => {
    await ProductApi.updateByID(id, {
      image,
      description,
      title,
      price
    });
  };
  return (
    <Dialog open={isOpenModal} onClose={handleClose}>
      <form onSubmit={formik.handleSubmit}>
        <DialogTitle>Product Create/Update</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Image"
            fullWidth
            variant="standard"
            name="image"
            value={formik.values.image}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.image && Boolean(formik.errors.image)}
            helperText={formik.touched.image && formik.errors.image}
          />
          <TextField
            margin="dense"
            label="Title"
            fullWidth
            variant="standard"
            name="title"
            value={formik.values.title}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
          />
          <TextField
            margin="dense"
            label="Description"
            fullWidth
            variant="standard"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.description && Boolean(formik.errors.description)
            }
            helperText={formik.touched.description && formik.errors.description}
          />
          <TextField
            margin="dense"
            type="number"
            label="Price"
            fullWidth
            variant="standard"
            name="price"
            value={formik.values.price}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.price && Boolean(formik.errors.price)
            }
            helperText={formik.touched.price && formik.errors.price}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose} type="submit" variant="contained">
            Save
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
