import React from "react";
import "./preview_collection.scss";
import Collection_item from "../collection-item/collection_item";

const Preview_collection = ({title, items}) => (
    <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
        {
            items.filter((item,index) => index<4 ).map( ({id, ...restOfItems}) => (
                <Collection_item key={id} {...restOfItems} />
            ) )
        
        }
    </div>
    </div>
)

export default Preview_collection