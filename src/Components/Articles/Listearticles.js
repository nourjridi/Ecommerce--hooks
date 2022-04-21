import React from 'react'
import { useState,useEffect } from 'react';
import { ArticleService } from '../../Services/Article-Service';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


const Listearticles = () => {
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
    <div>
      <h1>Liste des articles</h1>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Réference </StyledTableCell>
            <StyledTableCell align="right">Désignation</StyledTableCell>
            <StyledTableCell align="right">Marque</StyledTableCell>
            <StyledTableCell align="right">Quantité en stock</StyledTableCell>
            <StyledTableCell align="right">Prix</StyledTableCell>
            <StyledTableCell align="right">Image</StyledTableCell>
            <StyledTableCell align="right">Catégorie </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {articles.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">{row.reference}</StyledTableCell>
              <StyledTableCell align="right">{row.designation}</StyledTableCell>
              <StyledTableCell align="right">{row.marque}</StyledTableCell>
              <StyledTableCell align="right">{row.qtestock}</StyledTableCell>
              <StyledTableCell align="right">{row.prixVente}</StyledTableCell>
              <StyledTableCell align="right"><img src={`${row.imageartpetitf}`} alt="" width="100"/></StyledTableCell>
              <StyledTableCell align="right">  {row?.categorieID?.nomcategorie}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
    </div>
  )
}

export default Listearticles
