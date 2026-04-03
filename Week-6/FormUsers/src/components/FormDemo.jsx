import { useForm } from "react-hook-form";

function FormDemo() {
    const {register ,  //to register form fields
        handleSubmit ,  // to handle form submission
        formState: {errors} //to handle validation
    } = useForm();

    //form submit function
    const onFormSubmit = (obj) => {
        console.log(obj);
    };

    return(
        <div>
            <h1 className="text-center text-5xl">Form Demo</h1>
            {/* form */}
            <form className="max-w-md mx-auto mt-10"
                onSubmit = {handleSubmit(onFormSubmit)} >
                    {/* username */}
                <div className="mb-3">
                    <label htmlFor="username">Username</label>
                    <input type="text" {...register("username", 
                        {
                            required: "Username required",
                            validate: (v) => v.trim().length != 0 || "white space is not valid",
                            //minLength:4
                        })}id="username" className="border w-full p-3" />
                        {/* username validation error */}
                        {
                            errors.username?.type === "required" && <p className="text-red-500">{errors.username.message}</p>
                        }
                </div>
                {/* email */}
                <div className="mb-3">
                    <label htmlFor="email">Email</label>
                    <input type="text" {...register("email") }id="email" className="border w-full p-3" />
                </div>
                <button type="submit" className="block mx-auto bg-green-500">Submit</button>
            </form>
        </div>
    );
}


export default FormDemo;