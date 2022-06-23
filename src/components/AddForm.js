import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { insertBooks } from "../store/booksSlice";

const Addform = () => {
  const dispatch = useDispatch();
  // const {books}=useSelector(state=>(state.booksReducer));

  const title = useRef("");
  const price = useRef("");
  const description = useRef("");

  function submitHandler(event) {
    event.preventDefault();
    const book = {
      title: title.current.value,
      price: price.current.value,
      description: description.current.value,
    };
    dispatch(insertBooks(book));
    title.current.value = "";
    price.current.value = "";
    description.current.value = "";
  }
  return (
    <div className="row">
      <div className="col-6 offset-3 mt-3">
        <h4>Insert a new book</h4>
        <form onSubmit={submitHandler}>
          <div className="form-group my-2">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              ref={title}
            />
          </div>
          <div className="form-group my-2">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              className="form-control"
              id="price"
              required
              ref={price}
            />
          </div>
          <div className="form-group my-2">
            <label htmlFor="Description">Description</label>
            <textarea
              className="form-control"
              id="Description"
              rows="3"
              required
              ref={description}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addform;
