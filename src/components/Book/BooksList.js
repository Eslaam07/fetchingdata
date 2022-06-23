import React from "react";
import { useDispatch } from "react-redux";
import { deleteBooks } from "../../store/booksSlice";

const BooksList = (props) => {
  const dispatch = useDispatch();

  const booksData = props.books.map((book) => (
    <li
      className="list-group-item d-flex  justify-content-between align-items-center"
      key={book.id}
    >
      <div>{book.title}</div>
      <div className="btn-group" role="group">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => props.onRead(book)}
        >
          details
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => dispatch(deleteBooks(book))}
        >
          Delete
        </button>
      </div>
    </li>
  ));

  return (
    <div>
      <h3>Books List</h3>
      <ul className="list-group">
        {props.isLoading ? (
          <p>Fetching data from the server... Please Wait</p>
        ) : props.error ? (
          <p className="alert alert-danger" role="alert">
            {`${props.error} books data.`}
          </p>
        ) : booksData.length > 0 ? (
          booksData
        ) : (
          "No books available."
        )}
      </ul>
    </div>
  );
};

export default BooksList;
