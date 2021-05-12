
import { useEffect, useState } from "react"
import {RouteComponentProps} from "react-router-dom"
import {useHistory} from 'react-router-dom'
import axios from 'axios'
type Params = {
  id: string;
};
const BookDetails = ({ match }: RouteComponentProps<Params>) => {
  const history=useHistory()
  const [book, setBook] = useState({
    id:"",
    title: "",
    author: "",
    price: "",
    rating: "",
    cover: "",
    authorurl: "",
    description: "",
  });
 
  // const [displayText, setDisplayText] = useState("");
 
  // const [textstate, setTextState] = useState("collapsed");
 
  // useEffect(() => {
  //   setDisplayText(book.description.slice(0, 200) + "...");
  // }, [book]);
 
  useEffect(() => {
    axios.get(`/book/${match.params.id}`)
    .then((res)=>setBook(res.data))
    .catch((err)=>alert('error '+err.message))
  
  }, [])
 
  const deletebook=()=>{
    axios.delete(`/book/deletebook/${match.params.id}`,{
      headers : {
         authorization:localStorage.getItem("accesstoken"),
    },})
    .then((res)=>{
      alert('Book is deleted '+ book.title)
      history.push('/')
    })
    .catch((err)=>alert('error '+err.message))
    }
  
  // const handleText = () => {
  //   if(textstate === "collapsed"){
  //       setDisplayText(book.description)
  //       setTextState("expanded")
  //   }
  //   else if(textstate === "expanded"){
  //     setDisplayText(book.description.slice(0, 200) + "...")
  //       setTextState("collapsed")
  //   }
  // };
  return(
    <div className="detail">
      <h1><u>{book.title}</u></h1>
    <h4>WRITTEN BY {book.author}</h4> <br></br>
    <img src={book.cover}></img>
    <p><strong>{book.description}</strong></p>
    <button onClick={deletebook}>delete</button>
    </div>
  )
}
export default BookDetails