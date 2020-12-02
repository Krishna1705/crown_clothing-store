
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {compose} from 'redux';


import WithSpinner from  '../with-spinner/with-spinner.component';
import CollectionsOverview from './collection-overview.component';
import {selectIsCollectionFetching} from '../../redux/shop/shop.selectors';

const mapStateToProps=createStructuredSelector({
    isLoading:selectIsCollectionFetching//isLoading name must be mathed with props of WithSpinner...
})
const CollectionsOverviewContainer=compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview)

export default CollectionsOverviewContainer;