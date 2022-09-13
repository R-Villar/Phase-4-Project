import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ToyPage() {

const [ toy, setToy ] = useState([])

let { id } = useParams();

useEffect(()=>{
    fetch(`/toys/${id}`)
    .then( res => res.json())
    .then( toy => {console.log(toy)})
    
}, [id])

    return (
        <div>
            {toy.name}
        </div>
    )
}

export default ToyPage;