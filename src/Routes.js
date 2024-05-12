import React from 'react';
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';
import { NavBar } from './navigation';
import { SignInPage, LoadingPage } from './auth';
import {
    ConversationsListPage,
    ConversationPage,
    NewConversationPage,
} from './conversations';

const routes = [{
    path: '/sign-in',
    Component: SignInPage,
}, {
    path: '/conversations/:id',
    private: true,
    Component: ConversationPage,
}, {
    path: '/',
    private: true,
    exact: true,
    Component: ConversationsListPage,
}, {
    path: '/new-conversation',
    private: true,
    Component: NewConversationPage,
}];



export const MyRoutes = ({ isLoading, user }) => (
    <Router>
        <NavBar user={user}/>
        <Routes>
        {routes.map((route, index) => {

                if (isLoading) {
                    return(
                    <Route
                        path='/loadingPage'
                        element={<LoadingPage/>}
                    >
                    </Route>
                    )
                }
                var isAuth = !!user
                if(route.private && !isAuth){
                    return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        isLoading={isLoading}
                        isAuthed={!!user}
                        element={<SignInPage></SignInPage>}
                    >
                    </Route>
                    )
                }
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        isLoading={isLoading}
                        isAuthed={!!user}
                        element={<route.Component />}
                    >
                    </Route>
                );
            })}
        </Routes>
    </Router>
)