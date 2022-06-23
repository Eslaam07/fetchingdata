import React, { Fragment } from "react";

const BookInfo = (props) => {
  return (
    <Fragment>
      <h3>Book Details</h3>

      {!props.choosenBook && (
        <div className="alert alert-secondary" role="alert">
          There is no book has selected yet. Please select one by pressing
          details button!
        </div>
      )}

      {props.choosenBook && (
        <div>
          <p className="fw-bold">
            <strong>Title:</strong> {props.choosenBook.title}
          </p>
          <p className="fw-light">
            <strong>Description:</strong> {props.choosenBook.description}
          </p>
          <p className="fst-italic">
            <strong>Price:</strong> {props.choosenBook.price}
          </p>
        </div>
      )}
    </Fragment>
  );
};

export default BookInfo;
