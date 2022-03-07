import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import BookListPage from "./BookListPage";
import BookDetailsPage from "./BookDetailsPage";


const AppContainer = () => {

    return <div>
        <Header />
        {/* /**
        *   Switch and Route are basically similar to switch-case statements.
        *   Based on uri i.e. path Switch helps to determine which component has to serve the request.
        */}
        <Switch>
            <Route exact path={'/'} component={BookListPage} ></Route>

            // adding : as prefix to id makes it dynamically changable path
            // Based on the id of any book we must return the details.
            <Route exact path={'/bookdetails/:id'} component={BookDetailsPage} ></Route>
        </Switch>
    </div>

};

export default AppContainer;