import React from "react";
import "./preview_collection.scss";
import Collection_item from "../collection-item/collection_item";

const Preview_collection = ({title, items}) => (
    <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
        {
            items.filter((item,index) => index<4 ).
            map(  item   => (
                <Collection_item key={item.id} item={item}  />
            ) )
        
        }
    </div>
    </div>
)

export default Preview_collection