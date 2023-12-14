import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./page/Home";
import Drinks from "./page/Drinks";
import Categories from "./page/Categories";
import Ingredients from "./page/Ingredients";
import DrinkDetails from "./page/DrinkDetails";
import CategoryDrinkList from "./page/CategoryDrinkList";
import IngredientDrinkList from "./page/IngredientDrinkList";
import Glasses from "./page/Glasses";
import GlassDrinkList from "./page/GlassDrinkList";
import Search from "./page/Search";
import PageNotFound from "./page/PageNotFound";

function App() {
    return (<BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/drinks" element={<Drinks/>}/>
            <Route path="/drink/:id" element={<DrinkDetails/>}/>
            <Route path="/categories" element={<Categories/>}/>
            <Route path="/category/:categoryName" element={<CategoryDrinkList/>}/>
            <Route path="/ingredients" element={<Ingredients/>}/>
            <Route path="/ingredient/:ingredientName" element={<IngredientDrinkList/>}/>
            <Route path="/glasses" element={<Glasses/>}/>
            <Route path="/glass/:glassName" element={<GlassDrinkList/>}/>
            <Route path="/search/:searchQuery" element={<Search/>}/>
            <Route path="*" element={<PageNotFound/>}/>
        </Routes>
    </BrowserRouter>);
}

export default App;
