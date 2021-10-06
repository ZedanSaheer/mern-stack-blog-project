import "./addCat.css"
import React, { useEffect, useState } from 'react'

const AddCategory = ({ setCategory }) => {

    const [selected, setSelected] = useState("");
    const [cats, setCats] = useState([]);

    useEffect(() => {
        setCategory([...cats])
    }, [cats, setCategory])

    const handleSelect = (e) => {
        const cat = e.target.innerText;
        setSelected(cat); //force re-render
        e.target.classList.toggle("active");
        if (e.target.classList.contains("active")) {
            setCats([...cats, cat]);
        } else {
            cats.splice(cats.indexOf(cat), 1)
        }

    }


    return (
        <div className="addCat">
            {selected ? <p>Good choice!</p> : <p>Select categories</p>}
            <div className="optionCat">
                <span onClick={handleSelect}>technology</span>
                <span onClick={handleSelect}>travel</span>
                <span onClick={handleSelect}>life</span>
                <span onClick={handleSelect}>programming</span>
            </div>
        </div>
    )
}

export default AddCategory
