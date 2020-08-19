import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./Recipe.css";

const SearchMenu = () => {
  const API_KEY = "02b6202151ae40a08f1a59440fdbac36";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("-");

  useEffect(() => {
    const getRecipes = async () => {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${query}`
      );
      const data = await response.json();
      setRecipes(data.results);
    };
    getRecipes();
  }, [query]);



  const updateSearch = (e) => {
    setSearch(e.target.value);

  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="SearchMenu">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
          placeholder="Search any food dish here"
        />
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
