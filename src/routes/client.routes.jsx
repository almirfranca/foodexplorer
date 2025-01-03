import { Routes, Route, Navigate } from "react-router-dom";

import { Home } from "../pages/Home";
import { MealDetails } from "../pages/MealDetails";

export function ClientRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/meal-details/:id" element={<MealDetails />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
