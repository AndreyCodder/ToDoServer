import About from "../components/Pages/About";
import Login from "../components/Pages/Login";
import My404page from "../components/Pages/My404page";
import Posts from "../components/Pages/Posts";
import PostPage from "../components/PostPage";

export const privateRoutes = [
  { path: "/about", element: <About /> },
  { path: "/", element: <Posts /> },
  { path: "*", element: <Posts /> },
  { path: "/posts/:id", element: <PostPage /> },
  { path: "/posts", element: <Posts /> },
];

export const publicRoutes = [
  { path: "/login", element: <Login /> },
  { path: "*", element: <Login /> },
];
