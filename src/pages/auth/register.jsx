import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { useForm } from "react-hook-form"
import axios from "axios"

const Register = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = async(data) => {
        console.log(data)
        const response = await axios.post("http://localhost:8000/auth/register", data)
        console.log(response)
    }

    return (
        <div className="min-h-screen  my-20">
            <div className='max-w-xl mx-auto bg-white p-6 shadow-md rounded-xl flex flex-col gap-5'>
                <h1 className="text-3xl font-bold md:text-2xl mb-5">Register User</h1>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <Label>Firstname</Label>
                        <Input {...register("firstname", { required: true })} placeholder="Firstname" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label>Lastname</Label>
                        <Input {...register("lastname", { required: true })} placeholder="Lastname" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label>E-mail</Label>
                        <Input {...register("email", { required: true })} placeholder="email" />
                    </div>

                    <div className="flex gap-5 md:flex-row flex-col">
                        <div className='flex-1 flex flex-col gap-2'>
                            <Label>Enter Password</Label>
                            <Input {...register("password", { required: true })} type="password" placeholder="Password" />
                        </div>
                        <div className='flex-1 flex flex-col gap-2'>
                            <Label>Confirm Password</Label>
                            <Input {...register("confirmPassword", { required: true })} type="password" placeholder="Password" />
                        </div>
                    </div>
                    
                    <Button className="mt-2 w-full" type="submit">Register</Button>
                </form>
            </div>

        </div>
    )
}

export default Register;