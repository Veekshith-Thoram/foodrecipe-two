import logo from './logo.svg';
import './App.css';
import axios from "axios";
import RecipeTile from './RecipeTile';
import {useState} from "react";
function App() {
  const [search, setSearch] = useState("");
  const[recipes, setRecipe] = useState([]);
  const[healthLabel, setHealthLabel] = useState("vegan");
  const APP_ID = "cf638cbf";
  const APP_KEY = "5932ae0958e6690a6180316067077db6";
  const url = `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}&health=${healthLabel}`


  const fetchApi  = async() => {
    const result = await axios.get(url);
    const data = result.data;
    console.log(data);
    setRecipe(data.hits)
  }
  const updateSearch = e => {
    setSearch(e.target.value)
  }
  const onSubmit = e => {
    e.preventDefault();
    fetchApi();
  }
  return (
    <div className="App">
      <h1>Food Recipe🍔🍟</h1>
      <form className="searchForm" onSubmit={onSubmit}>
        <input autoComplete="off" className="formInput" type="text" placeholder="enter ingredient" value={search} onChange={updateSearch} />
        <input className="formSubmit" type="submit" value="Search" />
        <select className="healthLabel">
          <option onClick={()=> setHealthLabel("vegan")}>Vegan</option>
          <option onClick={()=> setHealthLabel("paleo")}>Paleo</option>
          <option onClick={()=> setHealthLabel("dairy-free")}>Dairy-Free</option>
          <option onClick={()=> setHealthLabel("gluten-free")}>Gluten-Free</option>
          <option onClick={()=> setHealthLabel("wheat-free")}>Wheat-Free</option>
          <option onClick={()=> setHealthLabel("fat-free")}>Fat-Free</option>
          <option onClick={()=> setHealthLabel("low-sugar")}>Low-sugar</option>
          <option onClick={()=> setHealthLabel("egg-free")}>Egg-free</option>
          <option onClick={()=> setHealthLabel("peanut-free")}>Peanut-free</option>
          <option onClick={()=> setHealthLabel("tree-nut-free")}>Tree-nut-free</option>
          <option onClick={()=> setHealthLabel("soy-free")}>Soy-free</option>
        </select>
      </form>
      <div className="recipeTitleGrid">
      {
        recipes.map(item => (
          <RecipeTile recipe={item.recipe}/>
        ))
      }
      </div>
    </div>
  );
}

export default App;
