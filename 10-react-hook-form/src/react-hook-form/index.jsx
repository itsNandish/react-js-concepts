import { useForm } from "react-hook-form";


function ReactHookForm(){

    const {register, handleSubmit, formState : {errors}, reset} = useForm();

    const onSubmit = (data)=>{ console.log(data); reset();}

    return (
        <div>
            <h1>React Hook Form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Email : </label>
                    <input {...register("email", {
                        required : true,
                    })} type="email" name="email" id="email" />
                </div>
                <br />
                <div>
                    <label>Password : </label>
                    <input {...register("password", {
                        required : true, minLength : 8,
                    })} type="password" name="password" id="password" />
                </div>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ReactHookForm;