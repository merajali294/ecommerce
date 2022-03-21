import React, { Component } from 'react'
import Shopdata from './Shopdata'
import Preview_collection from '../preview-collection/preview_collection'

 class Shop extends Component {
     constructor(){
         super()         
         this.state = {
        collections: Shopdata 
        }
    }

    render() {
        const {collections} = this.state
        return (
            <div className='shop-page'>
            { collections.map( ({ id, ...restItems }) => (
                <Preview_collection key={id} { ...restItems } />
                ) )
             }
            </div>
        )
    }
}

export default Shop