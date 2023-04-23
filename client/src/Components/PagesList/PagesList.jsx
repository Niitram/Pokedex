import React, { useEffect, useState } from 'react'
import { getAllPokemons } from '../../Redux/actions'
import { useDispatch, useSelector } from 'react-redux';
import divideArray from './divideArray';
import styles from './PagesList.module.css'
import ShowPokemons from '../ShowPokemons/ShowPokemons';

function PagesList() {
    const copyAllPokemons = useSelector(state=>state.copyAllPokemons)
    const [currentPage, setCurrentPage] = useState(1);
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllPokemons())
    },[dispatch])

    //cantidad de paginas (cantidad de pokemons / 12) para que no se me vaya el next
    const totalPages = Math.ceil((copyAllPokemons.length - 1) / 12);
    const arrayWithPages = divideArray(copyAllPokemons)

    const nextPage = () => {
        setCurrentPage((prev) => prev + 1);
    };
    const prevPage = () => {
        setCurrentPage((prev) => prev - 1);
    };

    return (
        <div className={styles.container}>
            <div className={styles.containerButtons}>
                <button className={styles.buttonNext} disabled={currentPage === 1} onClick={prevPage}>
                    Previous Page
                </button>
                {
                    arrayWithPages.map((page,index) => {
                        if (arrayWithPages.length-1) {
                            return (
                                <button
                                    disabled={currentPage === index+1}
                                    className={styles.buttonNext}
                                    key={index}
                                    onClick={()=>{
                                        <ShowPokemons currentPage={setCurrentPage(index+1)} />
                                        /* showPokemons(copyAllPokemons,setCurrentPage(index+1) ) */
                                    }}>
                                        {index+1}
                                </button>
                            );
                        }
                    })
                }
                <button className={styles.buttonNext} disabled={currentPage === totalPages} onClick={nextPage}>
                    Next Page
                </button>
            </div>
            <div className={styles.containerCards}>
                <ShowPokemons currentPage={currentPage} />
            </div>
        </div>
    )
}

export default PagesList