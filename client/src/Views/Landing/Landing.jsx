import React from 'react'
import style from "./Landing.module.css"
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Welcome to Pokedex</h1>
      <Link className={style.button} to={`/Home`}>
          Let's go
      </Link>
    </div>
  )
}

export default Landing