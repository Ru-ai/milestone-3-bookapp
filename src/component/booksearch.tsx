
import React, { useState } from 'react'
interface Props {
  search: (text: string,searchby :string) => void,
 
}


let Search: React.FC<Props> = ({ search }) => {
  const [text, settext] = useState("")
  const[searchby,setsearch]=useState("title")
  
  return (<div>
  <select onChange={e=>setsearch(e.target.value) }> 
    <option value="title">Title</option>
    <option value="author">Author</option>
    <option value="price">Price</option>
    <option value="rating">Rating</option>
  </select>
  <input type="text" onChange={e => settext(e.target.value)}></input>
  <button onClick={() => search(text,searchby)}>Search</button>
 
  </div>)

}

export default Search


