import React, { useEffect, useState } from 'react'
import showPokemons from "./showPokemons";
import { getAllPokemons } from '../../Redux/actions'
import { useDispatch, useSelector } from 'react-redux';
import divideArray from './divideArray';
import styles from './PagesList.module.css'

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
        <div className={styles.container}>
            <div>
                <button disabled={currentPage === 1} onClick={prevPage}>
                    Previous Page
                </button>
                {
                    arrayWithPages.map((page,index) => {
                        if (arrayWithPages.length-1) {
                            return (
                                <button
                                    key={arrayWithPages.length*index}
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
            </div>
            <div className={styles.containerCards}>
                {renderedPokemons}
            </div>
        </div>
    )
}

export default PagesList