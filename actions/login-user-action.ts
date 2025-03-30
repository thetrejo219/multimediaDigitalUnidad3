"use server"
import { ErrorResponseSchema, SuccessSchema } from "@/types";
import {redirect} from 'next/navigation'
import { cookies } from "next/headers";

export type LoginStateType={
    errors:string[]
}

const url ='/api/auth/user'

export async function login(prevState:LoginStateType,formData:FormData) {

    const url = `${process.env.API_URL}/auth/login`

    const registerData={
        email:formData.get('email'),
        password:formData.get('password')
    }

    const req = await fetch(url,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                email:registerData.email,
                password:registerData.password
            })
        })
    
        const json = await req.json()
    
    
        if(req.status===409){
            const {error} = ErrorResponseSchema.parse(json)
            return{
                errors:[error],
                success:''
            }
        }
    
    
   
        
    cookies().set({
        name:'Game-Stack_Token',
        value:json,
        httpOnly:true,
        path:'/'
    })
    

    redirect('/')

    return{
        errors:[]
    }
}