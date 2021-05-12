import { useEffect, useState } from "react"
import BookDetails from "./bookDetails"
import axios from 'axios'
import Book from "./book"
import Header from "./bookHeader"
// let books:any = localStorage.getItem("books");
// if(!books){
//    books = []
// }
// else{
//   books = JSON.parse(books)
// }


let AddBook=()=> {    
    const [title,settitle]=useState("")
    const [author,setauthor]=useState("")
    const [price,setprice]=useState("")
    const [rating,setrating]=useState("")
    const [cover,setCover]=useState("")
    const [authorurl,setauthorurl]=useState("")
    const [description,setdescription]=useState("")
            
                  const handleSubmit = (e: any) => {
                    e.preventDefault()
                    let newBook = {
                      title: title,
                      author: author,
                      price: price,
                      rating: rating,
                      cover: cover,
                      authorurl: authorurl,
                      description: description,
                    };
                 
                   axios.post('/book/book',newBook, {
                     headers : {
                        authorization:localStorage.getItem("accesstoken"),
                   },})
                   .then(()=>alert ('Book added  of title as : ' +newBook.title))
                   
                   .catch((err)=>alert('error'+err.message))
                  };
 
    return (
      <div className="form">
      <form>
          <div className="form-outline mb-4">
            {/* <label className="form-label" htmlFor="form4Example1">Name</label> */}
            <input
              type="text"
              id="booktitle"
              name="title"
              className="form-control"
              placeholder="Book Title"
              onChange={(e) => settitle(e.target.value)}
            />
          </div>

          <div className="form-outline mb-4">
            <input
              type="text"
              id="bookauthor"
              name="author"
              className="form-control"
              placeholder="Author Name"
              onChange={(e) => setauthor(e.target.value)}
            />
            {/* <label className="form-label" htmlFor="form4Example2">Email address</label> */}
          </div>
          <div className="row mb-4">
            <div className="col">
              <div className="form-outline">
                <input
                  type="text"
                  id="bookprice"
                  name="price"
                  className="form-control"
                  placeholder="Price"
                  onChange={(e) => setprice(e.target.value)}
                />
              </div>
            </div>
            <div className="col">
              <div className="form-outline">
                <input
                  type="text"
                  id="bookrating"
                  name="rating"
                  className="form-control"
                  placeholder="Rating"
                  onChange={(e) => setrating(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="form-outline mb-4">
            <input
              type="url"
              id="bookcover"
              name="bookurl"
              className="form-control"
              placeholder="book cover pic url"
              onChange={(e) => setCover(e.target.value)}
            />
            
          </div>
          <div className="form-outline mb-4">
            <input
              type="url"
              id="authorurl"
              name="authorurl"
              className="form-control"
              placeholder="author pic url"
              onChange={(e) => setauthorurl(e.target.value)}
            />
            
          </div>

          <div className="form-outline mb-4">
            <textarea
              className="form-control"
              name="description"
              id="form4Example3"
              rows={3}
              placeholder="Description of book"
              onChange={(e) => setdescription(e.target.value)}
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-block mb-4 submit-btn"
            onClick={
              handleSubmit}
          >
            Add
          </button>
        </form>
      </div>
    );
  }



         export default AddBook
