import React from 'react';
import style from './recipe.module.css'

const Recipe = ({image, title, price}) => {
  return(
    <div className={style.recipe}>
      <span className={style.title}>{title}</span>
      <img className={style.image} src={image} alt="no image"/>
      <p className={style.price}>Rs{price}</p>
      <button className={style.add}>Add to Cart</button>
      {/* <button className={style.remove}>Remove from Cart</button> */}
    </div>
  )
}

export default Recipe;