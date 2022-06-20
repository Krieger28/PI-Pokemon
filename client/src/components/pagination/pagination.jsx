import React from "react";
import "./pagination.css"
export default function Pagination({pokemonsPerPage,allPokemons,pagination}){
 const pageNumber=[]
 for (let i = 1; i <= Math.ceil(allPokemons/pokemonsPerPage); i++) {
     pageNumber.push(i);
     
 }
 return(
        <nav>
         <ul className="pagination">
             {
                 pageNumber && pageNumber.map(number=>{
                  return(
                     <li className="liPagination" key={number} >
                     <button className="pagButton" onClick={()=>pagination(number)}>{number}</button>
                     </li>
                 )})
             }
         </ul>
         </nav>
    
 )
}