import { useParams } from "react-router-dom";


function RecipeDetailsPage(){

    const params = useParams();
    const {id} = params;
    return <>
    <h1>Recipe details Page : {id}</h1>
    </>
}

export default RecipeDetailsPage;   