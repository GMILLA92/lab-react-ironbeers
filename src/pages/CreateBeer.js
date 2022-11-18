import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const apiEndpoint = "https://ih-beers-api2.herokuapp.com/beers/new"


function CreateBeer() {
    const [name, setName] = useState("")
    const [tagline, setTagline] = useState("")
    const [description, setDescription] = useState("")
    const [first_brewed, setFirstBrewed] = useState("")
    const [brewers_tips, setBrewersTips] = useState("")
    const [attenuation_level, setAttenuationLevel] = useState(0)
    const [contributed_by, setContributedBy] = useState("")

    const [created, setCreated] = useState(false)
    const [count, setCount] = useState(0)

    const navigate = useNavigate()

    const nameHandler = (event) => {
        setName(event.target.value)
    }
    const TagLineHandler = (event) => {
        setTagline(event.target.value)
    }
    const DescriptionHandler = (event) => {
        setDescription(event.target.value)
    }
    const FirstBrewedHandler = (event) => {
        setFirstBrewed(event.target.value)
    }
    const BrewerTipsHandler = (event) => {
        setBrewersTips(event.target.value)
    }
    const AttenuationLevelHandler = (event) => {
        setAttenuationLevel(event.target.value)
    }
    const ContributedByHandler = (event) => {
        setContributedBy(event.target.value)
    }

    useEffect(()=>{
        setCreated(true)
        setTimeout(() => {
            setCreated(false)
        }, 10000)

    },[count])

    const submitHandler = (event) => {
        event.preventDefault()

        const newBeer = {
            name: name,
            tagline: tagline,
            description: description,
            first_brewed: first_brewed,
            brewers_tips: brewers_tips,
            attenuation_level: attenuation_level,
            contributed_by: contributed_by,
        }

        const postApi = async () => {
            try {
                const res = await axios.post(apiEndpoint, newBeer)
                // navigate("/")
                setCount(count += 1)
            } catch (error) {
                console.log(error)
            }
        }

        postApi()

        setName("")
        setTagline("")
        setDescription("")
        setFirstBrewed("")
        setBrewersTips("")
        setAttenuationLevel("")
        setContributedBy("")

    }


    return (
        <div>
            <h1>New beer</h1>
            <form onSubmit={submitHandler}>
                <label>Name </label>
                <input type="text" name="name" value={name} onChange={nameHandler} />
                <br></br>
                <br></br>
                <label>Tagline </label>
                <input type="text" name="tagline" value={tagline} onChange={TagLineHandler} />
                <br></br>
                <br></br>
                <label>Description </label>
                <input type="text" name="description" value={description} onChange={DescriptionHandler} />
                <br></br>
                <br></br>
                <label>First Brewed </label>
                <input type="text" name="first_brewed" value={first_brewed} onChange={FirstBrewedHandler} />
                <br></br>
                <br></br>
                <label>Brewer tips </label>
                <input type="text" name="brewers_tips" value={brewers_tips} onChange={BrewerTipsHandler} />
                <br></br>
                <br></br>
                <label>Attenuation Level </label>
                <input type="number" name="attenuation_level" value={attenuation_level} onChange={AttenuationLevelHandler} />
                <br></br>
                <br></br>
                <label>Contributed by </label>
                <input type="text" name="contributed_by" value={contributed_by} onChange={ContributedByHandler} />
                <br></br>
                <br></br>
                

                <button type="submit">Create</button>
            </form>
            {created && <h1>beer created</h1>}
        </div>
    )
}

export default CreateBeer;