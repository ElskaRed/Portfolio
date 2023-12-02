import {createBrowserRouter} from "react-router-dom";
import Home from './Pages/Home'
import Profil from './Pages/Profil';
import Error from './Pages/Error';
import FicheProjet from './Pages/FicheProjet';
import App from './App';


const Router = createBrowserRouter(
    [
        {
            path: '/',
            element: <App />,
            children: [
                {element: <Home />, index: true},
                {path: '/about', element: <Profil />},
                {path: '/project/:id', element: <FicheProjet />},
                {path: '/error', element: <Error />},
                {path: '/*', element: <Error />},
            ]
        }
    ]
)

export default Router;