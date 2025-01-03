import { BrowserRouter } from "react-router-dom";
import { AuthRoutes } from "./auth.routes";
import { AdminRoutes } from "./admin.routes";
import { ClientRoutes } from "./client.routes";
import { useAuth } from "../hooks/auth";
import { USER_ROLE } from "../utils/roles";

export function Routes() {
  const { user } = useAuth();

  function AccessRoute() {
    switch (user.role) {
      case USER_ROLE.ADMIN:
        return <AdminRoutes />;
      case USER_ROLE.CLIENT:
        return <ClientRoutes />;
      default:
        return <ClientRoutes />;
    }
  }

  return (
    <BrowserRouter>{user ? <AccessRoute /> : <AuthRoutes />}</BrowserRouter>
  );
}
