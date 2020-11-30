import {createSelector} from 'reselect';

/* const COLLECTION_ID_MAP={
    hats:1,
    sneakers:2,
    jackets:3,
    womens:4,
    mens:5
} */

const selectShop=state=>state.shop//notice root-reducer

 export const selectShopCollections=createSelector(
                                           [selectShop],
                                           (shop)=>shop.collections//notice shop-reduer
                                          ) 
//after normalization we have to add follow code,here we need to use Object.keys()  
//to covert SHOP_DATA from object to array

export const selectShopCollectionsForPreview=createSelector(
    [selectShopCollections],
    (collections)=>collections?Object.keys(collections).map(key=>collections[key]):[]//it will convert objects into array data
    //above line we add ? : ,bcoz changes of HOC lecture
   )


/* //currying
export const selectCollection=collectionUrlParam=>createSelector(
    [selectShopCollections],
    (collections)=>collections.find(collection=>collection.id===COLLECTION_ID_MAP[collectionUrlParam])
)
 */
//we will apply concept of normalization instead of above code,here in SHOP_DATA file we are storing our data 
//inside an array,in array it will itrate through from beginning to end of array to find particular value
//so we wil use conecpt of hashtable ,in which we use object to store our SHOP_DATA instead of array
//and this process of storing big collections of items inside an object instead of array is called normalization
//for detil go to : https://www.kirupa.com/html5/hashtables_vs_arrays.htm

export const selectCollection=collectionUrlParam=>createSelector(
    [selectShopCollections],
    (collections)=>(collections?collections[collectionUrlParam]:null)//use trenary bcoz of HOC changes
)
