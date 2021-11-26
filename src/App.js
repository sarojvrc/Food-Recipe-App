import "./App.css";
import { YOUR_APP_ID, YOUR_APP_KEY } from "./Key";
import axios from "axios";
import { useState } from "react";
import RecipeTile from "./Components/RecipeTile";

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=alcohol-free`;

  async function getRecipes() {
    const result = await axios.get(url);
    setRecipes(result.data.hits);
    console.log(result.data);
  }

  const submit = (e) => {
    e.preventDefault();
    getRecipes();
  }

  return (
    <div className="app">
      <h1>Food Recipe App</h1>

      <form className="app_searchFood" onSubmit={submit}>
        <input
          type="text"
          className="app_input"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          placeholder="Enter Ingridint"
        />
        <input className="app_submit" type="submit" value="Search" />
      </form>

      <div className="app_recipes">
        {recipes.map( recipe => {
          return <RecipeTile recipe={recipe} />
        })}
      </div>

    </div>
  );
}

export default App;
