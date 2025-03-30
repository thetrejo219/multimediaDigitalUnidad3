"use server"

import { ErrorResponseSchema, SuccessSchema } from "@/types"

type ActionStateType={
    errors:string[],
    success:string
}

export async function createAccount(prevState:ActionStateType,formData:FormData) {

    const url = `${process.env.API_URL}/auth/create-account`

    const registerData={
        name:formData.get('name'),
        email:formData.get('email'),
        password:formData.get('password'),
        password_confirmation:formData.get('repeat-password')
    }

    const req = await fetch(url,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            name:registerData.name,
            email:registerData.email,
            password:registerData.password,
            password_confirmation:registerData.password_confirmation
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


    const success = SuccessSchema.parse(json)
    
    console.log(success)

    return{
        errors:[],
        success
    }
}