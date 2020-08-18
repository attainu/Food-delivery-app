import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./Recipe.css";

const SearchMenu = () => {
  const API_KEY ="f32f4f4709a04f3babec34ab23e557ce" ;
  // "c5c39410ecdb43fc91ad2d6d549d095c"

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("-");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${query}`
    );
    const data = await response.json();
    setRecipes(data.results);
    console.log(data.results);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="SearchMenu">
      <h4>Hotel Name</h4>
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.id}
            title={recipe.title}
            price={recipe.id / 1000}
            image={recipe.image}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchMenu;
