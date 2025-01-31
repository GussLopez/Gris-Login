import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import AuthLayout from "./layouts/AuthLayout";
import Home from "./views/Home";
import EquiposView from "./views/EquiposView";
import RecursosView from "./views/RecursosView";
import ConfirmAccountView from "./views/ConfirmAccountView";
import ConfigView from "./views/ConfigView";

export default function Router() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/auth" element={<AuthLayout />}>
                    <Route path="login" element={<LoginView />} />
                    <Route path="register" element={<RegisterView />} />
                    <Route path="confirm-account" element={<ConfirmAccountView />} />
                </Route>
                <Route path="/equipos" element={<EquiposView />} />
                <Route path="/recursos" element={<RecursosView />} />
                <Route path="/config" element={<ConfigView />} />
            </Routes>
        </BrowserRouter>
    )
}
