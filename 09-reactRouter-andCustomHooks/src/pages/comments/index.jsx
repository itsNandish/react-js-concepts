import useFetch from "../../Hooks/use-fetch";


function CommentList(){
    const {data,loading, error} = useFetch('https://dummyjson.com/comments'); 
    console.log(data);

    return (
        <div>
            <h1>Comments Lists</h1>
            {data && 
            data?.comments.map((item) => 
                <div>
                    <p>{item?.body}</p>
                    <p>{item?.likes}</p>
                </div>
            )}
        </div>
    )
}

export default CommentList;