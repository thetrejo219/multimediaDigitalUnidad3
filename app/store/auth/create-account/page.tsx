"use client"
import { createAccount } from "@/actions/authenticate-user-action"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useFormState } from "react-dom"
import { toast } from "react-toastify"

export default function Page() {
  const router = useRouter()
  const[state,dispatch]=useFormState(createAccount,{
    errors:[],
    success:''
  })

  useEffect(()=>{
    if(state.success){
      toast.success(state.success)
      setTimeout(()=>{
        router.push("/store/auth/login")
      },2000)
    }
  },[state.success])
  useEffect(()=>{
    if(state.errors && state.errors.length>0){
      state.errors.forEach(error=>{
        toast.error(error)
      })
    }
  },[state.errors])
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <div className="flex justify-center mb-6">
          <Image
            src="/CreateAccountImage.png"
            width={200}
            height={200}
            alt="Create account"
          />
        </div>
        <form
        action={dispatch}
        className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-gray-700 mb-1">Nombre</label>
            <input
              id="name"
              name="name"
              type="text"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 mb-1">Contraseña</label>
            <input
              id="password"
              name="password"
              type="password"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="repeat-password" className="block text-gray-700 mb-1">Repetir Contraseña</label>
            <input
              id="repeat-password"
              name="repeat-password"
              type="password"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white rounded py-2 hover:bg-blue-600 transition-colors"
          >
            Crear cuenta
          </button>
        </form>
      </div>
    </div>
  )
}
