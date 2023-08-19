import { TableCell, TableRow } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';
import React from "react";
import ProductApi from "../../apis/ProductApi";
import EditIcon from '@mui/icons-material/Edit';
import ProductModalContext from "../../contexts/ProductModalContext";


export default function ProductTableRow({row,refetch}) {
    const {
      isOpenModal,
      setIsOpenModal,
      initDataModal,
      setInitDataModal,
      handleSearch,
    } = React.useContext(ProductModalContext);

    const handleDeleteProduct = async () => {
        // call api delete
        await ProductApi.deleteByID(row.id);
        refetch();
    };

    const handleEditProduct = () => {
      setInitDataModal(row)
      setIsOpenModal(true);
    }
  return (
    <TableRow
      key={row.image}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell>
        {row.image}
      </TableCell>
      <TableCell >{row.title}</TableCell>
      <TableCell >{row.description}</TableCell>
      <TableCell >{row.price}</TableCell>
      <TableCell align="right">
        <IconButton onClick={handleEditProduct}>
            <EditIcon/>
        </IconButton>
        <IconButton onClick={()=>handleDeleteProduct()}>
            <AutoDeleteIcon/>
        </IconButton>
      </TableCell>
    </TableRow>
  );
}
