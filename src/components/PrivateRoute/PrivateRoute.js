import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { userContext } from '../../App';


const PrivateRoute = ({children , ...rest}) => {
    const [loggedInUser,setLoggedInUser] = useContext(userContext);
    let data = localStorage.getItem('usernumber');
    return (
        <div>
             <Route
        {...rest}
        render={({ location }) =>
            loggedInUser.email || loggedInUser.name || data? (
            children
            ) : (
            <Redirect
                to={{
                pathname: "/login",
                state: { from: location }
                }}
            />
            )
        }
        />
    
        </div>
    );
};

export default PrivateRoute;