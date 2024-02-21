import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layout/MainLayout/MainLayout";
import {EpisodePage} from "./pages/EpisodePAge/EpisodePage";
import {CharactersPage} from "./pages/CharactersPage/CharactersPage";

const router = createBrowserRouter([
    {
        path:'', element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={'episode'}/>},
            {path: '/episode', element:<EpisodePage/>},
            {path:'/character/:id', element:<CharactersPage/>}
        ]}
])

export {
    router
}