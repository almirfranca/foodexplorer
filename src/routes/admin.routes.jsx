import { Routes, Route, Navigate } from "react-router-dom";

import { Home } from "../pages/Home";
import { MealDetails } from "../pages/MealDetails";
import { NewMeal } from "../pages/NewMeal";

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/meal-details/:id" element={<MealDetails />} />
      <Route path="/new-meal/:id?" element={<NewMeal />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
