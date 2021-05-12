import { useEffect, useState } from "react"
import Search from "./booksearch"
import {Link} from "react-router-dom"
import Rating from "./bookrating"
import axios from "axios"
const List =()=> {
  const [book,setbook]=useState([])
  const [booksearch,setbooksearch]=useState("")
  const [searchbybook,setbybook]=useState("")
useEffect(()=>{
 axios.get('/book/AllBooks')
 .then((res)=>(setbook(res.data)))
},[])

useEffect(()=>{
  let url=""
  if(searchbybook==="price"){
    let mid=booksearch.indexOf('-')
    let min=booksearch.slice(0,mid)
    let max=booksearch.slice(mid+1,booksearch.length)
    url=`/book/price/${min}/${max}`
  }
  else{
    url=`/book/${searchbybook}/${booksearch}/`
  }
  axios.get(url)
  .then((res)=>(setbook(res.data)))
},[searchbybook,booksearch])


console.log(book)
  return (
    <div className="books-list">
      {console.log(searchbybook,booksearch)}
      <Search search={(text:string,searchby:string)=>{setbooksearch(text);setbybook(searchby)}}/>
      {  book.map(function (book: any) {
        return(

        <div className="book-display">
        {/* {  console.log(book.cover)} */}
          <img src={book.cover} />
          <h6><Link to={`/details/${book._id}`}>{book.title.slice(0,20)}</Link></h6>
          <p><strong>{book.author}</strong></p>
          <p><strong>{book.price}</strong></p>
          <Rating rating= {book.rating}> </Rating>
        </div>

        )
      })
      }
    </div>
  )
}


export default List


