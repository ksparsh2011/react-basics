import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { IMAGE_CDN } from "../../utils/constants";
import "../../ProductDetail.css"; // Import CSS file for styling
import { useParams } from "react-router-dom";
import { PRODUCTS_API } from "../../utils/constants";

const ProductDetail = () => {
  const [productInfo, setProductInfo] = useState(null);

  const { id } = useParams();

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

  return productInfo === null ? (
    <Shimmer />
  ) : (
    <div className="product-detail-container">
      <div className="product-detail-image-wrapper">
        <img
          className="product-image"
          src={IMAGE_CDN + productInfo.thumbnailId}
          alt={productInfo.name}
        />
      </div>

      <div className="product-info">
        <h1>{productInfo.name}</h1>
        <h2 className="product-description">{productInfo.description}</h2>
        <div className="product-price">
          Price: <span>&#8377;</span> {productInfo.price}
        </div>
        <button className="buy-now-button">Buy Now</button>
      </div>
    </div>
  );
};

export default ProductDetail;
