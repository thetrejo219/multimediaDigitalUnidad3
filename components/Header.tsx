import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className='flex gap-10 justify-between'>
      <div className='flex'>
    <h1 className="text-2xl font-bold text-center">
      Game-Stack
    </h1>
    <nav>
      <Link 
      href={'#'}
      >Facturacion</Link>
      <Link 
        href={'#'}
      >
        Ofertas
      </Link>
    </nav>
        </div>
        <div>
          <Link
          href={'#'}
          >Iniciar Sesion</Link>
          <Link
            href={'#'}
          >Crear una cuenta</Link>
        </div>
      </div>
  </header>
  )
}
