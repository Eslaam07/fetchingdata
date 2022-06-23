import React, { Fragment } from "react";

import Header from "./components/Header";
import Container from "./components/Container";
import AddForm from "./components/AddForm";
import BooksContainer from "./components/Book/BooksContainer";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Container>
        <BooksContainer />
        <AddForm />
      </Container>
    </Fragment>
  );
};

export default App;
