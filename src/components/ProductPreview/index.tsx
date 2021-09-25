import "./index.css";
import Product from "../../types/Product";
import { 
    Grid,
    Paper, 
    Typography
} from "@material-ui/core";

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
    }

    return(
        <div className="productPreview">
            <Grid container className="productGrid" spacing={10}>
                <Grid item lg={2}>
                    <Paper className="mediumImage">
                        <img src={imageurl} alt={props.product.name}/>
                    </Paper>
                </Grid>
            
                <Grid item lg={10} container>
                    <Grid item lg={12}>
                        <Typography className="productName" variant="h1">
                        {props.product.name}
                        </Typography>
                    </Grid>
                    <Grid item lg={12}>
                        <Typography>
                        {props.product.description}
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