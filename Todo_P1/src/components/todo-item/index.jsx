import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";

function TodoItem({todo, fetchDetailsCurrTodo}){
    return (
        <Card sx={{
            maxWidth : 350,
            display : 'flex',
            flexDirection : 'column',
            justifyContent : 'space-between'
        }}>
            <CardContent>
                <Typography variant="h5" color="{'text.secondary'}">
                    {todo?.todo}
                </Typography>
            </CardContent>

            <CardActions>
                <Button sx={{
                    backgroundColor : 'Blue',
                    color : 'wheat',
                    opacity : '0,9',
                    "&:hover" : {
                        backgroundColor : 'green',
                    color : 'wheat',
                    opacity : '1'
                    },
                }} onClick={()=> fetchDetailsCurrTodo(todo?.id)}>Details</Button>
            </CardActions>
        </Card>
    )
}

export default TodoItem;