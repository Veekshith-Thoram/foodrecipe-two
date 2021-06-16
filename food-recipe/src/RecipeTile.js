import React from 'react'
import style from "./recipe.module.css"

function RecipeTile({recipe}) {
    return (
        <div className="">
            {/* <h2>Title: {recipe.label}</h2>
            <p>Source: {recipe.source}</p> */}
            <img className={style.image} src={recipe.image} alt="img" />
            <p className={style.title}>{recipe.label}</p>
        </div>
    )
}

export default RecipeTile
