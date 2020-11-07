import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import SHOP_DATA from './shop.data';


class ShopPage extends React.Component{
    constructor(){
        super();
        this.state={
             collections:SHOP_DATA
        }
    }
    render(){
        return(
          <div className='shop-page'>
          
           
          {
              this.state.collections.map(({id,title,items})=>(
                  <CollectionPreview key={id} title={title} items={items}/>
              ))
          }
          
          </div>
          
        )
    }
}

export default ShopPage;