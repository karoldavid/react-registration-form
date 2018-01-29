import React, { Component } from "react";
import RegistrationForm from "./components/RegistrationForm";
import { registerAccountFields } from "./utils/fields";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <RegistrationForm fields={registerAccountFields} />
      </div>
    );
  }
}

export default App;
