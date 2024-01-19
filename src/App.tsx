import { Route, Routes } from "react-router-dom";
import "./globals.css";
import SignupForm from "./_auth/forms/SignupForm";
import SigninForm from "./_auth/forms/SigninForm";
import Home from "./_root/pages/Home";
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";
import { Toaster } from "./components/ui/toaster";


const App = () => {
  return (
    <main className="flex h-screen">
        <Routes>
            {/* public route */}
            <Route element={<AuthLayout></AuthLayout>}>
                <Route
                    path='/sign_up' element={<SignupForm></SignupForm>}
                >
                </Route>
                <Route
                    path='/sign_in' element={<SigninForm></SigninForm>}
                >
                </Route>
            </Route>
            

            {/* private routes */}
            <Route element={<RootLayout></RootLayout>}>
                <Route
                    index path='/home' element={<Home></Home>}
                >
                </Route>
            </Route>
            
        </Routes>
        <Toaster/>

    </main>
  
  )
}

export default App
