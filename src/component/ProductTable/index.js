import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ProductTableRow from "../ProductTableRow";
import styles from "./ProductTable.module.css";
import { TablePagination } from "@mui/material";
export default function ProductTable({ data, refetch }) {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow >
              <TableCell style={{fontWeight:'700'}}>Image</TableCell>
              <TableCell style={{fontWeight:'700'}}>Title</TableCell>
              <TableCell style={{fontWeight:'700'}}>Description</TableCell>
              <TableCell style={{fontWeight:'700'}}>Price</TableCell>
              <TableCell align="right" style={{fontWeight:'700'}}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <ProductTableRow row={row} key={row.id} refetch={refetch} />
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5]}
          component="div"
          count={data.length}
          rowsPerPage={5}
          page={0}
          onPageChange={() => {}}
          onRowsPerPageChange={() => {}}
        />
      </TableContainer>
    </>
  );
}
