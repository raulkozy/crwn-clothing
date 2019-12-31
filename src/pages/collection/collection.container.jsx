import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { compose } from "redux";
import { selectisCollectionLoaded } from "../../redux/shop/shop.selector";
import CollectionsPage from "./collection.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectisCollectionLoaded(state)
})

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsPage)

export default CollectionPageContainer;