import React from 'react';

import './collections-overview.styles.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectShopCollectionsForPreview} from '../../redux/shop/shop.selectors';
import CollectionPreview from '../collection-preview/collection-preview.component';

const CollectionsOverview=({collections})=>{
    return(
        <div className="collections-overview">
     
           {
              collections.map(({id,title,items})=>(
                  <CollectionPreview key={id} title={title} items={items}/>
              ))
           }
          
        </div>
    )
}
const mapStateToProps=createStructuredSelector({
   // collections:selectShopCollections
   collections:selectShopCollectionsForPreview
})
export default connect(mapStateToProps,null)(CollectionsOverview);