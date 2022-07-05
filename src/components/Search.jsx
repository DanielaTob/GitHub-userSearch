import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import Card from './Card';



const Search = () => {

    const [data, setData] = useState({});
    const [username, setUsername] = useState("");


    const onSearchHandler = e => {
        setUsername(e.target.value)
    }

    const submitHnadler = async e => {
        e.preventDefault();
    
    const perfil= await fetch(`https://api.github.com/users/${username}`);
    const perfiluser = await perfil.json();

    console.log(perfiluser);

    if (perfiluser) {
        setData(perfiluser);
    }

    };

    /*     const submitHnadler = async e =>{
        e.preventDefault();
        fetch(`https://api.github.com/users/${username}`)
        .then((response) =>{
            return response.json()
        }).then((username)=>{
            setUsername(username)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    useEffect(() =>{
        data();
    },[setData]) */


  return (
    
    <div>
    <div className="flex justify-center items-center">
        <div className="relative "> 
            <div className="absolute text-blue text-2xl top-4 left-3">
                 <AiOutlineSearch/>
            </div>
          <input type="text" onChange={onSearchHandler}  value={username} className="bg-bluelight h-14 w-[600px] pl-14 text-white pr-30 rounded-lg z-0 focus:shadow focus:outline-none" placeholder="Search GitHub username..."/>
            <div className="absolute top-2 right-2">
                <button onClick={submitHnadler} className="h-10 w-20 text-sm text-white rounded-lg bg-blue">Search</button>
            </div>
        </div>
        
    </div>
        <div>
        <Card data={data}/> 
        </div>
    </div>
  )
}

export default Search