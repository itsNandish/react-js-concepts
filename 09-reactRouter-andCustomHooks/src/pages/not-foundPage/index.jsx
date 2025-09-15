
import { Link } from "react-router-dom";

function NotFound(){
    return <div>
        <h1>This Page Doesn't Exits</h1>
        <Link to='/RecipeList'>Go-to-RecipeList</Link>
    </div>
}

export default NotFound;