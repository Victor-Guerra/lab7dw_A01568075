import "./index.css";
import { Grid, Paper, Typography, InputLabel, Select, MenuItem, Button} from "@material-ui/core";

/**
 * Contains the HTML markup for the product info.
 * @returns {string} - HTML markup for the product info.
 */
const ProductInfo=()=>{
    return(
        <div className="productInfo">
            <Grid container className="productGrid" spacing={2}>
                <Grid item lg={4}>
                    <Paper className="largeImage">
                        <img src="https://dummyimage.com/500x500/000/0011ff" alt="Product"/>
                    </Paper>
                </Grid>
            
                <Grid item lg={8} container>
                    <Grid item lg={12}>
                        <Typography className="productName" variant="h1">
                            Levi's 501 Original Fit Jeans Jeans para Hombre
                        </Typography>
                    </Grid>
                    <Grid item lg={12}>
                        <Typography>
                            100% algodon, Cierre de Cremallera, Lavar a maquina, Jeans corte ajustado,
                            Pierna ajustada, Stretch especial que te brinda mayor movilidad.     
                        </Typography>
                    </Grid> 
                    <Grid item lg={2}>
                        <Typography className="dollars crossedout">
                            1027.24
                        </Typography>
                    </Grid>
                    <Grid item lg={2}>
                        <Typography className="dollars">
                            706.93
                        </Typography>
                    </Grid>
                    <Grid item lg={8}/>
                    <Grid item lg={2}>
                        <InputLabel id="color-selection" className="bold"> Color</InputLabel>
                        <Select
                            labelId="color-selection"
                            id="color-select"
                            label="Color"
                        >
                        <MenuItem value="BLK">Black</MenuItem>
                        <MenuItem value="BLU">Blue</MenuItem>
                        <MenuItem value="BWN">Brown</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item lg={2}>
                        <InputLabel id="size-selection" className="bold"> Size</InputLabel>
                        <Select
                            labelId="size-selection"
                            id="size-select"
                            label="size"
                        >
                        <MenuItem value="28x32">28x32</MenuItem>
                        <MenuItem value="30x32">30x32</MenuItem>
                        <MenuItem value="32x32">32x32</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item lg={8}/>

                    <Grid item lg={2}>
                        <InputLabel id="quantity-selection" className="bold">Qty.</InputLabel>
                        <Select
                            labelId="quantity-selection"
                            id="quantity-select"
                            label="Qty."
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
        </div>
    )
}

export default ProductInfo;