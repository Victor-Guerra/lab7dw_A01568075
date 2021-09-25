import React from "react";
import ProductPreview from "../../components/ProductPreview";
import ProductService from "../../services/ProductService";
import Product from "../../types/Product";

interface ListState {
    products: Product[];
}

/**
 * Product List Container
 * @extends {Component<Props>}
 */
class ProductList extends React.Component<{}, ListState> {
    state = {
        products: [] as Product[]
    }

    /**
     * Renders the container.
     * @return {string} - HTML markup for the container.
     */
    render() {
        var productlist: any[] = [];
        this.state.products.forEach((product) => {
            productlist.push(<ProductPreview product={product} />);
        });

        return(
            productlist
        )
    }

    componentDidMount() {
        ProductService.getAll()
            .then(response => {
                const products = response.data;
                console.log(products);
                this.setState({ products });
            })
            .catch(error => {
                console.log(error);
            });
    }
}

export default ProductList;