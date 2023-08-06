import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useEffect } from 'react'

export default function MediaCard() {
    const [productsList, setProductsList] = React.useState([])

    const fetchAllProducts = async( ) => {
        const res = await fetch('http://localhost:8080/products')
        const data = await res.json()
        setProductsList(data.productsList)
      }
      useEffect(() => {
        fetchAllProducts()
      }, [])

  return (
<div>
    {
        productsList.length> 0 ? (
          <div className='Products'>
            {productsList.map((item) => (
                <Card sx={{ maxWidth: 300 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image="/brake-disk.jpg" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                  {item.productName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  {item.productDescription}
                  </Typography>
                  <Typography>
                  Rs. {item.productPrice}
                  </Typography>
                </CardContent>
          
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <ShoppingCartIcon onClick={() => alert(item._id)}/>
                </CardActions>
          
              </Card>
            ))}
          </div>
        ) : "loading"
       }    
    </div>
  );
}





