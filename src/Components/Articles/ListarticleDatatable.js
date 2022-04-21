import React from 'react'
import { useState,useEffect } from 'react';
import { ArticleService } from '../../Services/Article-Service';
//npm install mui-datatables
import MUIDataTable from "mui-datatables";
//npm i @mui/styles
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material/styles";
import { IconButton,Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle'; //mnMUI search na3mel material icon
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { pink } from '@mui/material/colors';
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';



const ListarticleDatatable = () => {
        const [articles,setArticles]=useState([]);
        useEffect(()=>{
          GetListArticles();
        },[]) //bch ye5demli juste DidMount yemchy marra wahda
        const GetListArticles=()=>{
          ArticleService.fetchArticles()
          .then((res)=>{
            setArticles(res.data)
            console.log(articles)
          });
        }




        const delArticle= async (_id) => {
            await ArticleService.deleteArticle(_id)
            var newarticles=articles.filter((item)=>{ //yjib articles l kol appart eli fasa5tou 
            console.log(item)
            return item._id!==_id
            })
            setArticles(newarticles);
            toast("Article supprimé",{
            position:"top-right",
            autoClose:5000,
            hideProgressBar:false,
            closeOnClick:true,
            pauseOnHover:true,
            draggable:true,
            progress:undefined,}

            );

            }

            
        const columns =[
            {label:"Réference",
            name:"reference",
            filter: true,
            sort: false},

            { label: "Désignation",
                name: "designation",
                filter: true,
                sort: false
                },
                


            {label:"Marque",
            name:"marque",
            filter: true,
            sort: false},

            {label:"Quantité en stock",
            name:"qtestock",
            filter: true,
            sort: false},

            {label:"Prix",
            name:"prixVente",
            filter: true,
            sort: false},

            {label:"Image",      //eli bch yetaficha
            name:"imageartpetitf", //lazem nafsou fl back
            filter: true,
            sort: false,
        options:{customBodyRender:(rowData)=>(<img style={{height:60,borderRadius:'50%'}} //cuntomBodyRender c'est parametrer l objet 
        src={`/${rowData}`} alt=""/>)}},

            {label:"Catégorie",
            name:"categorieID",
            filter: true,
            sort: false,
        options:{customBodyRender:(categ)=>( categ? categ.nomcategorie:null)}},

            {label:"Sous Catégorie",
            name:"scategorieID",
            filter: true,
            sort: false,
        options:{customBodyRender:(scateg)=>( scateg? scateg.nomscategorie:null)}},

        {
            name: "_id",
            label: "Actions",
            options: {customBodyRender: (value) => (
                <div>
                    <IconButton>
                        {<Link to={"/Articles/edit/" + value} ><EditIcon color='secondary' /></Link>}
                    </IconButton>
                    <IconButton onClick={()=>{delArticle(value)}}>
                    <DeleteIcon sx={{ color: pink[500] }} />
                    </IconButton>
                </div>)}},
                 ]

                 
  return (
    <div>
        <div style={{padding:5,margin:5}}>
        {<Link to={"/Articles/add"} style={{textDecoration:"none",color:"white"}}>
        <Button color="success"  startIcon={<AddCircleIcon />} variant="contained">
            Ajouter</Button></Link>}
        </div>
        {articles.length>0?
        <ThemeProvider theme={createTheme()}>
        <MUIDataTable title="Liste des articles" data={articles} columns={columns}/>
        </ThemeProvider>
        :null}
    </div>
  )
}
export default ListarticleDatatable
