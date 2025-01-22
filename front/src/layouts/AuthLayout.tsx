import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";

export default function AuthLayout() {

    return (
        <>
            <Outlet />
            <Toaster position="bottom-right" />
            <div className="custom-shape-divider-bottom-1736709796 -z-10">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" ><path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill" fill="#9ca3af" fillOpacity="1"></path></svg>
            </div>
        </>
    )
}
