import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"

const Home = () => {
    const [bookmarks, setBookmarks] = useState([])
    const API = import.meta.env

    useEffect(() => {
        fetch('http://localhost:3003/bookmarks') //Initiates a GET request to localhost:5173
        .then(res => res.json()) //Converts the response to JSON format
        .then(res => {
            console.log(res) //returns the response
            setBookmarks(res)
        })
        .catch(err => console.error(err)) //Catched any error that occurs during the fetch
    }, [])
  return (
    <div className='bookmark-container'>
       { bookmarks.map((bookmark, i) => {
        return(
            <div key={i} className='bookmark-link' ><Link to={`/bookmarks/${i}`}>{bookmark.name} </Link>
            </div>
         )
        })
       } 
    </div>
  );
};


export default Home;
