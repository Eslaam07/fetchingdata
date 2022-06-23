import React, { Fragment, useEffect, useState } from "react";
import BookInfo from "./BookInfo";
import BooksList from "./BooksList";
import { useSelector, useDispatch } from "react-redux";
import { getBooks } from "../../store/booksSlice";

import "./book.css";

const BooksContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const { books, isLoading, error } = useSelector(
    (state) => state.booksReducer
  );

  const [choosenBook, setChoosenBook] = useState("");
  function readHandler(recievedBook) {
    setChoosenBook(recievedBook);
  }

  return (
    <Fragment>
      <div className="row my-1">
        <div className="col">
          <BooksList
            isLoading={isLoading}
            books={books}
            error={error}
            onRead={readHandler}
          />
        </div>
        <div className="col side-line">
          <BookInfo choosenBook={choosenBook} />
        </div>
      </div>
      <hr className="my-1" />
    </Fragment>
  );
};

export default BooksContainer;
