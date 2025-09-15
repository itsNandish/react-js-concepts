import useFetch from "../../Hooks/use-fetch";
import useWindowReSize from "../../Hooks/use-window-resize";


function RecipeList(){

    const {data,loading} = useFetch('https://dummyjson.com/recipes');
    const windowSize = useWindowReSize();
    
    if(loading){
       return <h1>Please wait Food is loading</h1>
    }

    return (
        <div>
            <h1>Recipe Lists</h1>
            <p> window width : {windowSize.width} || window height : {windowSize.height}</p>
            {data && 
            data?.recipes.map((item) => 
                <div>
                    <img src={item?.image} />
                    <label>{item?.name}</label>
                </div>
            )}
        </div>
    )
}

export default RecipeList;