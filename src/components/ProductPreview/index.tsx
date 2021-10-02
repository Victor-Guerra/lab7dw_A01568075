import "./index.css";
import Product from "../../types/Product";
import { 
    Grid,
    Paper, 
    Typography
} from "@material-ui/core";
import {Link} from "react-router-dom";

interface ProductPreviewProps {
    product: Product;
}

/**
 * Contains the HTML markup for the product list.
 * @returns {string} - HTML markup for the product preview list.
 */
const ProductPreview : React.FC<ProductPreviewProps> = ( props ) => {

    var listPrice = 0.00;
    if (props.product !== undefined && props.product.childSkus !== undefined && props.product.childSkus[0] !== undefined) {
        listPrice = props.product.childSkus[0].listPrice;
    }
    
    var salePrice = 0.00;
    if (props.product !== undefined && props.product.childSkus !== undefined && props.product.childSkus[0] !== undefined) {
        salePrice = props.product.childSkus[0].salePrice;
    }
    
    var imageurl = "";
    if (props.product !== undefined && props.product.childSkus !== undefined && props.product.childSkus[0] !== undefined) {
        imageurl = props.product.childSkus[0].mediumImageUrl;
    } else {
        imageurl = "https://dummyimage.com/200x200/000/0011ff";
    }

    return(
        <div className="productPreview">
            <Grid container className="productGrid" spacing={2}>
                <Grid item lg={2}>
                    <Paper className="mediumImage">
                        <Link to={`/pdp?productId=${props.product.id}`}>
                        <img src={imageurl} alt={props.product.name}/>
                        </Link>
                    </Paper>
                </Grid>
            
                <Grid item lg={10} container>
                    <Grid item lg={12}>
                        <Typography className="productName" variant="h1">
                        <Link to={`/pdp?productId=${props.product.id}`} className="unstylizedLink">{props.product.name}
                        </Link>
                        </Typography>
                    </Grid>
                    <Grid item lg={12}>
                        <Typography className="description">
                        <Link to={`/pdp?productId=${props.product.id}`} className="unstylizedLink">{props.product.description}
                        </Link>
                        </Typography>
                    </Grid> 

                    <Grid item lg={2}>
                        <Typography className="listPrice dollars crossedout">
                        {listPrice}
                        </Typography>
                    </Grid>

                    <Grid item lg={2}>
                        <Typography className="salePrice dollars">
                        {salePrice}
                        </Typography>
                    </Grid>
                    <Grid item lg={8}/>

                    <Grid item lg={12}/>
                </Grid>
            </Grid>
        </div>
        
    );
}
export default ProductPreview;