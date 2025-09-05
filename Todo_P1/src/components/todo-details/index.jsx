import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { Fragment } from "react";



function TodoDetail({todoDetails, openDialog, setOpenDailog, setTodoDetails}){

    return (
        <Fragment>
            <Dialog onClose={()=> setOpenDailog(false)} open = {openDialog}>
                <DialogTitle>
                    {todoDetails?.todo}
                </DialogTitle>
                <DialogActions>
                    <Button onClick={()=>{
                        setTodoDetails(null);
                        setOpenDailog(false);
                    }}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    )
}

export default TodoDetail;