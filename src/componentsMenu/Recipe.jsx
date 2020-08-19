import React, { useState } from "react";
import style from './recipe.module.css';

const Recipe = ({ image, title, price, id }) => {

  const [showText, setShowText] = useState(true);
  const [remove, setRemoveText] = useState(false);

  return (
    <div className={style.recipe} key={id}>
      <span className={style.title}>{title}</span>
      <img className={style.image} src={image} alt="noimg" />
      <p className={style.price}>Rs{price}</p>
      {showText && <button className={style.add} variant="success"
        onClick={() => { setShowText(!showText); setRemoveText(!remove); alert(title + ' added to cart. your total bill amount is' + price); }}
      >Add to cart</button>}

      {remove && <button className={style.remove} variant="danger"
        onClick={() => { setShowText(!showText); setRemoveText(!remove); alert(title + ' remove from cart. your total bill amount is' + 0); }}
      >Remove from cart</button>}
    </div>
  )
}

export default Recipe;