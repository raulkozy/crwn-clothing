import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selector";
import './collections-overview.styles.scss';
import CollectionPreview from "../preview-collection/preview-collection.component";


const CollectionsOverview = ({ collections }) => {
    return(
        <div className='collection-overview'>
             {
                collections.map( ({id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps}/>
                        )
                )
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);