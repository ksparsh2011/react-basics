import { useEffect, useState } from "react";
import { PRODUCTS_API } from "../utils/constants";

const useProductInfo = (id) => {
  const [productInfo, setProductInfo] = useState(null);

  useEffect(() => {
    fetchProductDetail();
  }, [id]); // Include id as a dependency to refetch when id changes

  const fetchProductDetail = async () => {
    try {
      const response = await fetch(PRODUCTS_API + id);
      if (!response.ok) {
        throw new Error("Failed to fetch product details");
      }
      const json = await response.json();
      setProductInfo(json.data); // Assuming json.data contains the product details
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  return productInfo;
};

export default useProductInfo;
