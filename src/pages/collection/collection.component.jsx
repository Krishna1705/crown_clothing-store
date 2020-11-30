import React from 'react';
import './collection.styles.scss';

import{connect }from 'react-redux';
import {selectCollection} from '../../redux/shop/shop.selectors';
import CollectionItem from '../../components/collection-item/collection-item.component';

const CollectionPage=({collection})=>{
   // console.log(match);
   console.log(collection);
    //console.log(match.params.collectionId);//ans will be watever collectionId is
    const {title,items}=collection;
    return(
        <div className="collection-page">
           <h2 className="title">{title}</h2>
           <div className="items">
                {
                    items.map(item=><CollectionItem key={item.id} item={item} ></CollectionItem>)
                }
           </div>
        </div>
    )
}
//here ownprops are props of this component(collection component)

const mapStateToProps=(state,ownprops)=>({
    collection:selectCollection(ownprops.match.params.collectionId)(state)//currying function call
})

export default connect(mapStateToProps)(CollectionPage);