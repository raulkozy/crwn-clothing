import { createStructuredSelector } from 'reselect'
import { connect } from "react-redux";
import { compose } from "redux";
import WithSpinner from "../with-spinner/with-spinner.component";
import CollectionsOverview from "../collections-overview/collections-overview.component";
import { selectIsCollectionFetching } from "../../redux/shop/shop.selector";

const mapStateToProps = createStructuredSelector({
    isloading: selectIsCollectionFetching
})

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner 
)(CollectionsOverview)

export default CollectionsOverviewContainer;