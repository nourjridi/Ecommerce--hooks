import React from 'react'
import { useState,useEffect } from 'react';
import { ArticleService } from '../../Services/Article-Service';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useCart } from 'react-use-cart';
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const ListArticleCard = () => {

  const {addItem,totalItems}=useCart();
  const [articles,setArticles]=useState([]);
        useEffect(()=>{
          GetListArticles();
        }) //bch ye5demli juste DidMount yemchy marra wahda
        const GetListArticles=()=>{
          ArticleService.fetchArticles()
          .then((res)=>{
            setArticles(res.data)
            console.log(articles)
          });
        }
        
  return (
      <div className='container'>
       <AppBar position="static" color='primary'>
      <Toolbar>
      <Button color="inherit"><Link to="/Articles/Cart" style={{"color":"yellow","textDecoration":"none" , borderRadius:'50%',fontSize:26}}>
  {totalItems}<ShoppingCartIcon sx={{ fontSize: 40 }}/></Link></Button>
</Toolbar>
</AppBar>
    <div style={{"display":"flex","flexWrap":"Wrap","justifyContent":"left"}}>
     
      {articles.map((art,ind)=>{
          return (<Card sx={{ maxWidth:'auto',margin:1 }}>
      <CardMedia
        component="img"
        height="140"
        image={`/${art.imageartpetitf}`}
        alt=""
       
      />
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {art.reference}
        </Typography>
        <Typography  variant="body2" color="text.secondary">
          Prix:{art.prixVente} DT
        </Typography>
      </CardContent>
      <CardActions>
      <Button  disabled={art.qtestock<=1} variant="contained" color="secondary" size="large" onClick={()=>{
        const target={price:art.prixVente,id:art._id};
        const returnedTarget=Object.assign(target,art); //assign tfusionni les attr des 2 objets dans un seul objet 
        addItem(returnedTarget)}}> ADD TO CART</Button>

      </CardActions>
    </Card>
      )})}
    </div>
    </div>
  )
}

export default ListArticleCard
