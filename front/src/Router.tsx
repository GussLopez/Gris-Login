import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import AuthLayout from "./layouts/AuthLayout";
import Home from "./views/Home";

export default function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/auth" element={<AuthLayout />}>
                    <Route path="login" element={<LoginView />} />
                    <Route path="register" element={<RegisterView />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
