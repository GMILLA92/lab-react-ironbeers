
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

const apiEndpoint = "https://ih-beers-api2.herokuapp.com/beers/"

function BeerDetails() {
    const {BeerId}  = useParams()
    console.log(BeerId)
    const [beer, setBeer] = useState({})
 
    useEffect(() =>{
        const apiCall = async () => {
            try {
                const res = await axios.get((apiEndpoint + BeerId))
                console.log(res)
                setBeer(res.data)
            } catch(error){
                console.log(error)
            }
        }
  
        apiCall()
     }, [])

    return (
        <div>
            <h1>{beer.name}</h1>
            <h1>{beer.tagline}</h1>
            <h1>{beer.first_brewed}</h1>
            <h1>{beer.attenuation_level}</h1>
            <h1>{beer.description}</h1>
            <h1>{beer.contributed_by}</h1>
            <img src= {beer.image_url}/>
        </div>
    )
}

export default BeerDetails;