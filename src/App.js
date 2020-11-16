import React, { Component } from "react";
import "./App.css";
import { withAuthenticator } from "aws-amplify-react";
import Amplify from "aws-amplify";
import aws_exports from "./aws-exports";
import List from "./List";
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="anHeader">
          <h1>List app</h1>
        </header>
        <List />
      </div>
    );
  }
}

export default withAuthenticator(App, true);
