import "./index.css";
import React from 'react';
import Product from "../../types/Product";
import { 
    Grid,
    Paper, 
    Typography, 
    InputLabel, 
    Select, 
    MenuItem, 
    Button,
    List,
    ListItem,
    ListItemText,
    Divider
} from "@material-ui/core";

interface ProductInfoProps {
    product: Product;
}

/**
 * Contains the HTML markup for the product info.
 * @returns {string} - HTML markup for the product info.
 */
const ProductInfo : React.FC<ProductInfoProps> =( props )=>{
    var listPrice = 0.00;
    if (props.product !== undefined && 
        props.product.childSkus !== undefined && 
        props.product.childSkus[0] !== undefined) {
        listPrice = props.product.childSkus[0].listPrice;
    }
    
    var salePrice = 0.00;
    if (props.product !== undefined && 
        props.product.childSkus !== undefined && 
        props.product.childSkus[0] !== undefined) {
        salePrice = props.product.childSkus[0].salePrice;
    }

    var largeImage = "";
    if (props.product !== undefined && 
        props.product.childSkus !== undefined && 
        props.product.childSkus[0] !== undefined) {
        largeImage = props.product.childSkus[0].largeImageUrl;
    }
    
    var colors: any[] = [];
    var sizes : any[] = [];

    var selectedColor="";
    var selectedSize ="";
    if (props.product !== undefined && props.product.childSkus !== undefined && props.product.childSkus[0] !== undefined) {
        selectedColor = props.product.childSkus[0].color;
        props.product.childSkus.forEach( (sku: any) => {
            colors.push(<MenuItem value={sku.color}>{sku.color}</MenuItem>);
        });
        
        selectedSize = props.product.childSkus[0].size;
        props.product.childSkus.forEach( (sku: any) => {
            sizes.push(<MenuItem value={sku.size}>{sku.size}</MenuItem>);
        });
    }

    var comments: any[] = [];
    if (props.product !== undefined && props.product.comments !== undefined) {
        props.product.comments.forEach( (comment) => {
            comments.push(
                <React.Fragment>
                    <ListItem alignItems="flex-start">
                        <ListItemText 
                        primary={comment.author}
                        secondary={
                            <React.Fragment>
                                <Typography>
                                    {comment.body}
                                </Typography>
                                {comment.created}
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </React.Fragment>
            );
        });
    }

    return(
        <div className="productInfo">
            <Grid container className="productGrid" spacing={2}>
                <Grid item lg={4}>
                    <Paper className="largeImage">
                        <img src={largeImage} alt={props.product.name}/>
                    </Paper>
                </Grid>
            
                <Grid item lg={8} container>
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
                        <Typography className="dollars crossedout">
                        {listPrice}
                        </Typography>
                    </Grid>
                    <Grid item lg={2}>
                        <Typography className="dollars">
                        {salePrice}
                        </Typography>
                    </Grid>
                    <Grid item lg={8}/>
                    <Grid item lg={2}>
                        <InputLabel id="color-selection" className="bold"> Color</InputLabel>
                        <Select
                            labelId="color-selection"
                            id="color-select"
                            label="Color"
                            value={selectedColor}
                        >
                        {colors}
                        </Select>
                    </Grid>
                    <Grid item lg={2}>
                        <InputLabel id="size-selection" className="bold"> Size</InputLabel>
                        <Select
                            labelId="size-selection"
                            id="size-select"
                            label="size"
                            value={selectedSize}
                        >
                        {sizes}
                        </Select>
                    </Grid>
                    <Grid item lg={8}/>

                    <Grid item lg={2}>
                        <InputLabel id="quantity-selection" className="bold">Qty.</InputLabel>
                        <Select
                            labelId="quantity-selection"
                            id="quantity-select"
                            label="Qty."
                            value={1}
                        >
                        <MenuItem value="1">1</MenuItem>
                        <MenuItem value="2">2</MenuItem>
                        <MenuItem value="3">3</MenuItem>
                        <MenuItem value="4">4</MenuItem>
                        <MenuItem value="5">5</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item lg={10}/>

                    <Grid item lg={4}>
                        <Button variant="contained" className="cartButton">Add to cart</Button>
                    </Grid>
                    <Grid item lg={8}/>
                    
                    <Grid item lg={12}/>
                </Grid>
            </Grid>
         
            <Grid container className="commentGrid" spacing={2}>
                <Grid item lg={4}>
                    <Typography variant="h2" className="commentTitle">
                    Comments
                    </Typography> 
                </Grid>
                <Grid item lg={8}/>

                <Grid item lg={12}>
                    <List>
                        {comments}
                    </List>
                </Grid>
            </Grid>
        </div>
    )
}

export default ProductInfo;