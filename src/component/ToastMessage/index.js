import { Snackbar } from "@mui/material";
import React, { useState } from "react";
import { store } from "../../store/selector";
import { hideNotification } from "../../store/action/NotificationAction";
import { useDispatch, useSelector } from "react-redux";

export default function ToastMessage() {
  const notiStore = useSelector((state) => state.notification);
  const dispatch = useDispatch();
  // const [notiStore, setNotiStore] = useState(store.getState().notification);
  // const watchStore  = () => {
  //   store.subscribe(() => setNotiStore(store.getState().notification));
  // };
  // watchStore();
  const handleClose = () => {
    dispatch(hideNotification());
  };
  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={notiStore.isOpen}
        onClose={handleClose}
        message={notiStore.content}
        autoHideDuration={2000}
      />
    </>
  );
}
