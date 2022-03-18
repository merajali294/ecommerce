import React, { Component } from 'react'
import Shopdata from './Shopdata'

 class Shop extends Component {
     constructor(){
         super()
         
         this.state = {
        collections: Shopdata 
        }
    }

    render() {
        return (
            <div>
                Shop Data
            </div>
        )
    }
}

export default Shop