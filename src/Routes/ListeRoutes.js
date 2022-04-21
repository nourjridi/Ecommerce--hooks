import React from 'react'
import { Route,Routes } from 'react-router-dom'

import  Insertarticle from "../Components/Articles/Insertarticle";
import  Editarticle from "../Components/Articles/Editarticle";
import Listearticles from '../Components/Articles/Listearticles';
import ListArticleCard from '../Components/Articles/ListArticleCard';
import ListarticleDatatable from '../Components/Articles/ListarticleDatatable';
import CartArticle from '../Components/Articles/CartArticle';

import  Insertcategorie from "../Components/Categorie/Insertcategorie";
import  Editcategorie from "../Components/Categorie/Editcategorie";
import  Listecategorie from "../Components/Categorie/Listecategorie";


import  Editsouscategorie from "../Components/SousCategories/Editsouscategorie";
import  Insertsouscategorie from "../Components/SousCategories/Insertsouscategorie";
import  Listesouscategorie from "../Components/SousCategories/Listesouscategorie";






const ListeRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/Articles"  element={<Listearticles/>}/>
             <Route path="/Articles/edit/:id"  element={<Editarticle/>}/>
             <Route path="/Articles/add" element={<Insertarticle/>}/>
             <Route path="/Articles/card"  element={<ListArticleCard/>}/>
             <Route path="/Articles/datatable"  element={<ListarticleDatatable/>}/>
             <Route path="/Articles/Cart"  element={<CartArticle/>}/>



             <Route path="/Categories" element={<Listecategorie/>}/>
             <Route path="/Categories/edit/:id" element={<Editcategorie/>}/>
             <Route path="/Categories/add" element={<Insertcategorie/>}/>

             <Route path="/Scategories"  element={<Listesouscategorie/>}/>
             <Route path="/Scategories/edit/:id" element={<Editsouscategorie/>}/>
             <Route path="/Scategories/add"  element={<Insertsouscategorie/>}/>
            
        </Routes>
      
    </div>
  )
}

export default ListeRoutes
