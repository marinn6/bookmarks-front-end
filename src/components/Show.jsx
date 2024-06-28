import React, { useState, useEffect }from 'react';
import {useNavigate, useParams} from 'react-router-dom';//react-router-dom is a package
import { Link } from "react-router-dom";

function Show() {
    const [bookmark, setBookmark] = useState(null)
    const {index} = useParams()
    const API = import.meta.env.VITE_BASE_URL
    const navigate = useNavigate()

    const handleDelete = () => {
        fetch(`${API}/${index}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(res => {
                navigate('/bookmarks')
            })
            .catch(err => console.error(err))
    }
    
    useEffect(() => {
        fetch(`${API}/${index}`)
        .then(res => res.json())
        .then(res => {
            //console.log(res)
            setBookmark(res)
        })
        .catch(err => console.error(err))
    })
  return (
    <div>
        {bookmark &&
        <div className='bookmark'>
            <h2>{bookmark.name}</h2>
            <h4>Category: {bookmark.category}</h4>
            <a className='external-link' href={bookmark.url} target="_blank" >Take me there</a>
            <br />
            <Link to={`/bookmarks/${index}/edit`}>
                <button>Edit</button>
            </Link>
            <button onClick={handleDelete} >Delete</button>
        </div>
        }  
    </div>
  );
};

export default Show