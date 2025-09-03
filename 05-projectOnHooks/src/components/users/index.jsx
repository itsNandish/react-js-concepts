import { useEffect, useState } from "react"


export default function Users(){

    const [usersList, setUserList] = useState([]);

    //fetch list of user using Api call
    async function fetchAllUsers(){
        try{
            const apiResponse = await fetch('https://dummyjson.com/users');
            const result = await apiResponse.json();

            if(result?.users){
                setUserList(result?.users);
              
            }else {
                setUserList([]);
            }
            
        }catch(error){
            console.log(error);
            
        }
    }

    // function handleUsersList(){
    //     fetchAllUsers();
    // }

    // useEffect(()=> {
    //     fetchAllUsers()
    // }, []);

    //console.log(usersList);


    return ( <div>
        <h1>All Users Lists</h1>
        <button onClick={fetchAllUsers}>GetUsersList</button>
        <ul>
            {
                usersList && usersList.length > 0 ? 
                usersList.map(userItem => <li key={userItem?.id}>
                <p>{userItem?.firstName} {userItem?.lastName}</p>

            </li>) : <h1>No users found! Please try after some time</h1>
            }
        </ul>
    </div>
    );
}