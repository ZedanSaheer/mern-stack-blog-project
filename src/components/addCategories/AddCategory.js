import "./addCat.css"
import React, { useEffect, useState } from 'react'

const AddCategory = () => {

    const [selected , setSelected] = useState("");

    const handleSelect = (e) => {
        setSelected(e.target.innerText);
        console.log(e.target.classList.toggle("active"));
    }

    return (
        <div className="addCat">
            <div className="optionCat">
                <span onClick={handleSelect} className="test">technology</span>
                <span onClick={handleSelect}>travel</span>
                <span onClick={handleSelect}>life</span>
                <span onClick={handleSelect}>programming</span>
            </div>
        </div>
    )
}

export default AddCategory
