import React from 'react';
import CollectionsOverviewContainer from '../../components/collection-overview/collections-overview.container';
import {Route} from 'react-router-dom';
import CollectionPageContainer from '../collection/collection.container';


//import {firestore,convertCollectionSnapshotToMap} from '../../components/firebase/firebase.utils';
import {connect} from 'react-redux';
//import {updateCollections} from './../../redux/shop/shop.actions';

//use of redux-thunk
import {fetchCollectionsStartAsync} from './../../redux/shop/shop.actions';
//import {createStructuredSelector} from 'reselect';

//use of HOC
//import WithSpinner from  '../../components/with-spinner/with-spinner.component';
//const CollectionsOverviewWithSpinner=WithSpinner(CollectionsOverview);
//const CollectionPageWithSpinner=WithSpinner(CollectionPage);

//import {selectIsCollectionFetching,selectIsCollectionLoaded} from '../../redux/shop/shop.selectors';

class ShopPage extends React.Component{
  //code for spinner use of HOC-with-sinner
 /*  state={
    loading:true
  } */
//here we fetch all SHOP_DATA from firestore
//unsubscribeFromSnapshot=null;
 /*  componentDidMount(){
    const {updateCollections}=this.props;
   const collectionRef= firestore.collection('collections');
   //3 ways to fetch data from the firestore library
/*    
//1)obesravable+observer pattern is as follows
    this.unsubscribeFromSnapshot=collectionRef.onSnapshot(async snapshot=>{
                                      //  console.log(snapshot.docs);
                                          //snapshot.docs.map(doc=>
                                                                      //console.log(doc.id);
                                                                     // console.log(doc.data())
                                                             //   ) 
                              /////////////////////////////////-----------///////////////////////////////////
                                             const collectionsMap= convertCollectionSnapshotToMap(snapshot)                                
                                             console.log(collectionsMap);
                                             updateCollections(collectionsMap);
                                             this.setState({loading:false})
                                    }); */

                                    //3)fetch pattern
// go to https://firebase.google.com/docs/firestore/use-rest-api#making_rest_calls
/* fetch('https://firestore.googleapis.com/v1/projects/crown-db-fa6d7/databases/(default)/documents/collections')
.then(response=>response.json())
.then(collections=>console.log(collections));
 */

//2)promise pattern                    
//we moved followinng code to shop.actions.js files using asynchronous redux-redux-thunk                
/*     collectionRef.get().then(snapshot=>{
                                          const collectionsMap= convertCollectionSnapshotToMap(snapshot)                                
                                          console.log(collectionsMap);
                                          updateCollections(collectionsMap);
                                          this.setState({loading:false})
                                        });

                      
}  */
                       
//after redux-yhunk

componentDidMount(){
 const {fetchCollectionsStartAsync} =this.props;
 fetchCollectionsStartAsync();
}

  render(){
    const {match}=this.props
    //const {match,isCollectionFetching,isCollectionLoaded}=this.props;
   // const {loading}=this.state;
    //console.log(match);
  
        //look app.js shopage component is nested inside Route
        //and Route automatically gives access to 3 props:match,location,history
        //so here in this file we have access to match prop.
 
   return(
        /*<div className='shop-page'>
          <Route exact path={`${match.path}`} component={CollectionsOverview}/>
          <Route exact path={`${match.path}/:collectionId`} component={CollectionPage}/>
          </div>     */ 

          //after use of hoc-with-spinner
         /*  <div className='shop-page'>
          <Route exact path={`${match.path}`} render={(props)=><CollectionsOverviewWithSpinner isLoading={loading} {...props}/>}/>
          <Route exact path={`${match.path}/:collectionId`} render={(props)=><CollectionPageWithSpinner isLoading={loading}{...props}/>}/>
          </div>       */   

          //after use of redux-thunk
       /*   <div className='shop-page'>
          <Route exact path={`${match.path}`} render={(props)=><CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props}/>}/>
          <Route exact path={`${match.path}/:collectionId`} render={(props)=><CollectionPageWithSpinner isLoading={!isCollectionLoaded}{...props}/>}/>
          </div> */
          //after use of container
          <div className='shop-page'>

          <Route exact path={`${match.path}`}
           component={CollectionsOverviewContainer}/>

          <Route exact path={`${match.path}/:collectionId`}
           component={CollectionPageContainer}/>
          </div>
        )
  }
  
}

/* const mapDispatchToProps=dispatch=>({
  updateCollections:collectionsMap=>dispatch(updateCollections(collectionsMap))
}) */

/* const mapStateToProps=createStructuredSelector({
 // isCollectionFetching:selectIsCollectionFetching,
  isCollectionLoaded:selectIsCollectionLoaded
}) */

//after redux-thunk
const mapDispatchToProps=dispatch=>({
  fetchCollectionsStartAsync:()=>dispatch(fetchCollectionsStartAsync())
})
export default connect(null,mapDispatchToProps)(ShopPage);