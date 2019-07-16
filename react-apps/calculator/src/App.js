import React from "react";
import Calculator from "./Components/Calculator";

// app.js
// App component

class App extends React.Component {
  componentDidMount = () => {
    document.title = "Calculator";
  };

  render() {
    return (
      <div className="app-wrap">
        <Calculator />
      </div>
    );
  }
}

export default App;
