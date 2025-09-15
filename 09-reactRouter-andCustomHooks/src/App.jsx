import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import RecipeList from "./pages/recipes";
import CommentList from "./pages/comments";
import RecipeDetailsPage from "./pages/recipe-details";
import NotFound from "./pages/not-foundPage";
import Layout from "./components/layout";

function App() {
  return (
    <>
      <h2>React Router and Custom Hooks</h2>
      <h2>Inside Recipe Page</h2>
      <nav>
        <Link to="/Home/RecipeList">RecipeList</Link>
        <br />
        <Link to="/Home/CommentList">CommentList</Link>
      </nav>

      <Routes>
        <Route path="/Home" element={<Layout/>}>
          <Route path="RecipeList" element={<RecipeList />} />
          <Route path="CommentList" element={<CommentList />} />
          <Route path="RecipeList/:id" element={<RecipeDetailsPage />} />
        </Route>
        {/* <Route path='/RecipeList' element = {<RecipeList/>}/>
        <Route path='/CommentList' element={<CommentList />} />
        <Route path='/RecipeList/:id' element={<RecipeDetailsPage />}/> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
