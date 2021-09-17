import React from "react";
import ProductInfo from "../../components/ProductInfo";

/**
 * Product Detail Container
 * @extends {Component<Props>}
 */
class ProductDetail extends React.Component {
    /**
     * Renders the container.
     * @return {string} - HTML markup for the container
     */
    render() {
        return(
            <ProductInfo/>
        )
    }
}

export default ProductDetail;