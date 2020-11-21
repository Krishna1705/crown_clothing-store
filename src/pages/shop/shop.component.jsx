import React from 'react';
import CollectionsOverview from '../../components/collection-overview/collection-overview.component';
import {Route} from 'react-router-dom';
import CollectionPage from '../collection/collection.component';

const ShopPage=({match})=>{
  //console.log(match);
  
        //look app.js shopage component is nested inside Route
        //and Route automatically gives access to 3 props:match,location,history
        //so here in this file we have access to match prop.
  
   return(
          <div className='shop-page'>
          <Route exact path={`${match.path}`} component={CollectionsOverview}/>
          <Route exact path={`${match.path}/:collectionId`} component={CollectionPage}/>
          </div>
          
        )
}


export default ShopPage;