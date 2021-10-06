import "./addCat.css"
import React, { useEffect, useState } from 'react'

const AddCategory = ({setCategory}) => {

    const [selected , setSelected] = useState("");
    const [cats , setCats] = useState([]);

    useEffect(() => {
        setCategory([...cats])
    }, [cats,setCategory])
   
    const handleSelect = (e) => {
        const cat = e.target.innerText;
        setSelected(cat); //force re-render
        e.target.classList.toggle("active");
        if(e.target.classList.contains("active")){
            setCats([...cats,cat]);
        }else{
            cats.splice(cats.indexOf(cat),1)
        }
        
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
