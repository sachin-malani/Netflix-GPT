import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GET_ISP } from "../utils/constant";
import { updateISP } from "../utils/configSlice";

const useGetISP = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getISP();
  }, []);

  const getISP = async () => {
    const data = await fetch(GET_ISP);
    console.log(data);
    
    const isp = await data.json();
    dispatch(updateISP(isp.org));
  };
};

export default useGetISP;
