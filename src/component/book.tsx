import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./bookHeader";
import List from "./BookList";
import AddBook from "./addbook";
import Register from "./register";
import Login from "./login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BookDetails from "./bookDetails";
interface Props {}
interface State {}

const Book = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <List />
        </Route>
        <Route exact path="/addbook">
          <AddBook />
        </Route>
        <Route exact path="/details/:id" component={BookDetails} />
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
};

export default Book;
