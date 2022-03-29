import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { axiosNoAuth, axiosAuth } from "../helpers/custom-axios";
import { showNotif } from "../store/reducers/notifSlice";

export default function Home() {
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      const response = await axiosNoAuth.get("products");
      console.log(response);
    } catch (error) {
      dispatch(showNotif({ severity: "error", message: error.message }));
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <h1 onClick={() => dispatch(showNotif({ severity: "error", message: "error" }))}>Index Page</h1>;
}
