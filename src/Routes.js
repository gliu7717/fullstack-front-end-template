import React from 'react';
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';

import { HomePage } from './home';
import { AddIngredientPage } from './ingredients';
import { RecipeSearchPage } from './recipes';
import { ShoppingListPage } from './shopping-list';

const routes = [
    {
        path: '/',
        Component : HomePage,
        exact : true,
    },
    {
        path: '/add-ingredient',
        Component : AddIngredientPage,
        exact : true,
    },
    {
        path: '/recipes',
        Component : RecipeSearchPage,
        exact : true,
    },
    {
        path: '/shopping-list',
        Component : ShoppingListPage,
        exact : true,
    },


 ];

 export const MyRoutes = () => (
    <Router>
        <Routes>
        {routes.map((route, index) => (
            <Route
                key={index}
                path={route.path}
                exact={route.exact}
                element={<route.Component />} 
            >
            </Route>
        ))}
        </Routes>
    </Router>
)