import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function storeLayout({children}:Readonly<{children:React.ReactNode}>) {
  return (
    <>
        <Header/>
            {children}
        <Footer/>
        <ToastContainer />

    </>
  )
}
