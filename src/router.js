import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layout/MainLayout";
import {UserPage} from "./pages/UserPage";
import {UserDetailsPage} from "./pages/UserDetailsPage";
import {PostPage} from "./pages/PosrPage";
import {PostDetailsPage} from "./pages/PostDetailsPage";
import {userService} from "./service/userService";
import {postService} from "./service/postService";


const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {index: true, element: <Navigate to={'users'}/>},
            {path: 'users', element: <UserPage/>, loader: () => userService.getAll()},
            {
                path: 'users/:userId', element: <UserDetailsPage/>, children: [
                    {path: 'posts', element: <PostPage/>}
                ]
            },
            {
                path: 'users/:userId/posts/:postId',
                element: <PostDetailsPage/>,
                loader: ({params: {postId}}) => postService.getById(postId),
            }
        ]
    }
]);

export {
    router
};
