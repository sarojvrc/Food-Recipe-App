import "./App.css";
import { YOUR_APP_ID, YOUR_APP_KEY } from "./Key";
import axios from "axios";
import { useState } from "react";
import RecipeTile from "./Components/RecipeTile";
import Footer from "./Components/Footer";

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [healthLabel, sethealthLabel] = useState("vegan");

  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabel}`;

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
        <select className="app_healthlevel" >
          <option onClick={() => sethealthLabel("vegan") }>Vegan</option>
          <option onClick={() => sethealthLabel("wheat-free") }>Wheat-free</option>
          <option onClick={() => sethealthLabel("vegetarian") }>Vegetarian</option>
          <option onClick={() => sethealthLabel("tree-nut-free	") }>Tree-nut-free	</option>
          <option onClick={() => sethealthLabel("sulfite-free") }>Sulfite-free</option>
          <option onClick={() => sethealthLabel("sugar-conscious") }>Sugar-conscious</option>
          <option onClick={() => sethealthLabel("soy-free") }>Soy-free</option>
          <option onClick={() => sethealthLabel("shellfish-free") }>Shellfish-free</option>
          <option onClick={() => sethealthLabel("egg-free") }>Egg-free</option>
          <option onClick={() => sethealthLabel("fish-free") }>Fish-free</option>
          <option onClick={() => sethealthLabel("fodmap-free") }>Fodmap-free</option>
          <option onClick={() => sethealthLabel("gluten-free") }>Gluten-free</option>
          <option onClick={() => sethealthLabel("alcohol-free") }>Alcohol-free</option>
        </select>
      </form>

      <div className="app_recipes">
        {recipes.map( recipe => {
          return <RecipeTile recipe={recipe} />
        })}
      </div>

      <Footer />

    </div>
  );
}

export default App;
