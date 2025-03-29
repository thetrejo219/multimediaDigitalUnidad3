import { FaFacebook, FaTwitter, FaTiktok } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-gray-200 text-center p-4">
      <div className="flex justify-center gap-6 mb-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-600">
          <FaFacebook />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-400">
          <FaTwitter />
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-black">
          <FaTiktok />
        </a>
      </div>
      <p>
        &copy; {new Date().getFullYear()} Game-Stack. Todos los derechos reservados.
      </p>
    </footer>
  )
}
