
import { useNavigate, useParams } from "react-router-dom";

function AboutPage(){

    const {name} = useParams();

    const navigate = useNavigate();

    function handleClick(){
       navigate('/');
    }

    return (
        <div>
            <h2>Thanks for visiting About Page</h2>
            <button onClick={handleClick}>Login</button>
            <p>You logged as {name || "Guest"}</p>
        </div>
    )
}

export default AboutPage;