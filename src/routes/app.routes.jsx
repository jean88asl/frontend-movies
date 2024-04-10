import { Routes, Route } from "react-router-dom"

import { Home } from "../pages/Home"
import { CreateMovie } from "../pages/CreateMovie"
import { Perfil } from "../pages/Perfil"
import { MoviePreview } from "../pages/MoviePreview"
 
export function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateMovie />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/preview/:id" element={MoviePreview} />
        </Routes>
    )
}