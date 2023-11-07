import React, {useState} from "react";
import NewBoxForm from "./NewBoxForm";
import Box from "./Box";

const BoxList = () => {

    const [boxes, setBox] = useState([]);
    const [nextId, setNextId] = useState(1);

    const addBox = (background, height, width) => {
        setBox(boxes => [...boxes, {id: nextId, background, height, width}]);
        setNextId(nextId + 1);

    }

    const removeBox = (id) => {
        setBox((boxes) => boxes.filter((box) => box.id !== id));
      };
    return (
        <div>
            <h2>Make a Box</h2>
        <NewBoxForm addBox={addBox}/>
        <div>
            {boxes.map(({id, background, height, width})=> 
            <Box 
            id={id}
            background={background} 
            height={height} 
            width={width} 
            removeBox={removeBox}
            />)}
        </div>
        </div>
    );
}

export default BoxList;