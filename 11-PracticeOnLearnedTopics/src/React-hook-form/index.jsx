import { useForm } from "react-hook-form";

function RegisterForm(){

    const {register, handleSubmit, formState: {errors}, reset } = useForm();


    const onSubmit = (data) => {
        console.log(data);
        reset();
    }
    return (
        <div>
            <h2>Register Form</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Email</label> <br />
                <input {...register('email', {required : true})}   type="email" name="email" />
                {errors.email && <p> Email is Required</p>}
                <br />
                <label>Password</label> <br />
                <input  {...register('password', {required : true})} type="password" name="password" />
                {errors.password && <p> Password is Required</p>}
                <br /><br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default RegisterForm;