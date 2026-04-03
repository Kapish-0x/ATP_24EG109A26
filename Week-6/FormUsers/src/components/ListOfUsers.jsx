import { useForm } from "react-hook-form";
import { useState } from "react";

function ListOfUsers() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const [users, setUsers] = useState([]);

    const onFormSubmit = (data) => {
        setUsers([...users, data]);
    };

    return (
        <div className="bg-gray-400">
            <div className="bg-amber-400">
            <h1 className="text-center text-4xl">Create User Form</h1>
            <form className="max-w-md mx-auto mt-10" onSubmit={handleSubmit(onFormSubmit)}>
                {/* First Name */}
                <div className="mb-3">
                    <label htmlFor="firstname">First Name</label>
                    <input
                        type="text"
                        {...register("firstname", {
                            required: "First Name is required",
                            validate: (v) => v.trim().length !== 0 || "White space is not valid",
                        })}
                        id="firstname"
                        className="border w-full p-3"
                    />
                    {errors.firstname && <p className="text-red-500">{errors.firstname.message}</p>}
                </div>

                {/* Email */}
                <div className="mb-3">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        {...register("email", {
                            required: "Email is required",
                            validate: (v) => v.trim().length !== 0 || "White space is not valid",
                        })}
                        id="email"
                        className="border w-full p-3"
                    />
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                </div>

                {/* DOB */}
                <div className="mb-3">
                    <label htmlFor="dob">DOB</label>
                    <input
                        type="date"
                        {...register("dob", {
                            required: "DOB is required",
                            validate: (v) => v.trim().length !== 0 || "White space is not valid",
                        })}
                        id="dob"
                        className="border w-full p-3"
                    />
                    {errors.dob && <p className="text-red-500">{errors.dob.message}</p>}
                </div>

                <button type="submit" className="block mx-auto bg-green-500 p-2 text-white">
                    Submit
                </button>
            </form>
            </div>
            <div className="bg-blue-400">
            <h2 className="text-center text-3xl mt-10">List Of Users</h2>
            <table className="table-auto border-collapse border border-black mx-auto mt-5">
                <thead>
                    <tr>
                        <th className="border border-black px-4 py-2">First Name</th>
                        <th className="border border-black px-4 py-2">Email</th>
                        <th className="border border-black px-4 py-2">DOB</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td className="border border-black px-4 py-2">{user.firstname}</td>
                            <td className="border border-black px-4 py-2">{user.email}</td>
                            <td className="border border-black px-4 py-2">{user.dob}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
          </div>
        </div>
    );
}

export default ListOfUsers;