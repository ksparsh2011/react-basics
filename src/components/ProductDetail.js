import Shimmer from "./Shimmer";
import { IMAGE_CDN } from "../../utils/constants";
import "../../ProductDetail.css"; // Import CSS file for styling
import { useParams } from "react-router-dom";
import useProductInfo from "../../utils/useProductInfo";

const ProductDetail = () => {
  const { id } = useParams();
  const productInfo = useProductInfo(id);

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

        {/* Display Highlights */}
        {productInfo.highlights && productInfo.highlights.material && (
          <div className="product-highlights">
            <h3>Highlights:</h3>
            <ul>
              {productInfo.highlights.material.map((material, index) => (
                <li key={index}>{material}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Display Related Items */}
        {productInfo.relatedItems && productInfo.relatedItems.length > 0 && (
          <div className="related-products">
            <h3>Related Products:</h3>
            <div className="related-products-list">
              {productInfo.relatedItems.map((relatedProduct) => (
                <div key={relatedProduct._id} className="related-product-card">
                  <img
                    src={IMAGE_CDN + relatedProduct.imageUrl}
                    alt={relatedProduct.name}
                    className="related-product-image"
                  />
                  <div className="related-product-info">
                    <h4>{relatedProduct.name}</h4>
                    <p>Price: &#8377; {relatedProduct.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
