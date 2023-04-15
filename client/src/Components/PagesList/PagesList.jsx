import React, { useEffect, useState } from 'react'
import showPokemons from "./showPokemons";
import { getAllPokemons } from '../../Redux/actions'
import { useDispatch, useSelector } from 'react-redux';
import divideArray from './divideArray';

function PagesList() {
    const copyAllPokemons = useSelector(state=>state.copyAllPokemons)
    const [currentPage, setCurrentPage] = useState(1);
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllPokemons())
    },[dispatch])

    //cantidad de paginas (cantidad de pokemons / 12)
    const totalPages = Math.ceil((copyAllPokemons.length - 1) / 12);
    const arrayWithPages = divideArray(copyAllPokemons)
    
    const renderedPokemons = showPokemons(copyAllPokemons, currentPage);

    const nextPage = () => {
        setCurrentPage((prev) => prev + 1);
    };
    const prevPage = () => {
        setCurrentPage((prev) => prev - 1);
    };

    return (
        <div>
            <button disabled={currentPage === 1} onClick={prevPage}>
                Previous Page
            </button>
            {
                arrayWithPages.map((page,index) => {
                    if (arrayWithPages.length-1) {
                        return (
                            <button 
                                onClick={()=>{
                                    showPokemons(copyAllPokemons,setCurrentPage(index+1) )
                                }}>
                                    {index+1}
                            </button>
                        );
                    }
                })
            }
            <button disabled={currentPage === totalPages} onClick={nextPage}>
                Next Page
            </button>
            {renderedPokemons}
        </div>
    )
}

export default PagesList