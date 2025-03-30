"use client"
import { login } from '@/actions/login-user-action'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { useFormState } from 'react-dom'
import { toast } from 'react-toastify'

export default function LoginPage() {
  const[state,dispatch]=useFormState(login,{
    errors:[],
  })

  useEffect(()=>{
      if(state.errors && state.errors.length>0){
        state.errors.forEach(error=>{
          toast.error(error)
        })
      }
    },[state.errors])
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <div className="flex justify-center mb-6">
          <Image
            src="/Login.png"
            alt="Login"
            width={120}
            height={120}
          />
        </div>

        <form
        action={dispatch}
        className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name='email'
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name='password'
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition duration-200"
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  )
}
