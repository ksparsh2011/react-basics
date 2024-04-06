import { useEffect, useState } from "react";
import { PRODUCTS_API } from "../utils/constants";

const useProductInfo = (id) => {
  const [productInfo, setProductInfo] = useState(null);

  useEffect(() => {
    fetchProductDetail();
  }, []);

  const fetchProductDetail = async () => {
    try {
      const response = await fetch(PRODUCTS_API + id);
      if (!response.ok) {
        throw new Error("Failed to fetch product details");
      }
      const json = await response.json();
      setProductInfo(json);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  return productInfo;
};

export default useProductInfo;
