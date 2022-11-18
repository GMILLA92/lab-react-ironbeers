import axios from "axios"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const apiEndpoint = "https://ih-beers-api2.herokuapp.com/beers"

function ListBeers(){
    const [beers, setBeers] = useState([])

    useEffect(() => {
       const apiCall = async () => {
          const res = await axios.get(apiEndpoint)
          setBeers(res.data)
       }
 
       apiCall()
    }, [])



    return(
        <div>
            <h1>Beers</h1>
            <ul>
                {beers.map((beer) => {
                return (
                    <li key={beer._id}>
                        <h1>{beer._name}</h1>
                        <img src= {beer.image_url}/>
                        <h1>{beer.tagline}</h1>
                        <h1>{beer.contributed_by}</h1>
                        <Link to={`/listBeers/${beer._id}`}> See more</Link>
                       
                    </li>
                )
                })}

            </ul>


        </div>
    )
}

export default ListBeers;