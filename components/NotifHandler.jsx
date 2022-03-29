import { Alert, Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { closeNotif } from "../store/reducers/notifSlice";

const NotifHandler = (props) => {
  const notifData = useSelector((state) => state.notif)

  const dispatch = useDispatch()

  return (
    <Snackbar
      open={notifData.open}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      autoHideDuration={3000}
      onClose={() => dispatch(closeNotif())}
    >
      <Alert severity={notifData.severity} sx={{ width: "100%" }}>
        {notifData.message}
      </Alert>
    </Snackbar>
  );
};

export default NotifHandler;
