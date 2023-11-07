import React, { useState } from "react";


const NewBoxForm = ({addBox})=> {
     const initialState = {
        background : "",
        height : "",
        width : ""
     };

    const [data, setData] = useState(initialState);
    const handleChange = (e)=>{
    
        setData(data => ({
            ...data,
            [e.target.name]: [e.target.value]
        }));
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        addBox(data.background, data.height, data.width);
        setData(initialState);
    }


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="background">Background Color</label>
            <input id="background"
             type="text" 
             placeholder="Background Color" 
             value={data.background} 
             onChange={handleChange}
             name="background"
              />
            <label htmlFor="height">Height</label>
            <input id="height" 
            type="text" 
            placeholder="Height"
             value={data.height}
              onChange={handleChange}
              name="height"
               />
            <label htmlFor="width">Width</label>
            <input id="width" 
            type="text" 
            placeholder="Width"  
            value={data.width} 
            onChange={handleChange}
            name="width" 
            />

            <button>Build</button>

        </form>
    );
}


export default NewBoxForm;