import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import Form from "components/Form";
import Menu from "components/Menu";

function App() {
  M.AutoInit();
  return (
    <React.Fragment key="app">
      <header>
        <Menu />
      </header>
      <main>
        <Form />
      </main>
    </React.Fragment>
  );
}

export default App;
