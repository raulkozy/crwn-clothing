import React from 'react';
// import './preview-collection.styles.scss';
import CollectionItem from "../collection-item/collection-item.component";
import { CollectionPreviewContainer, Title, Preview } from "./preview-collection.styles";

const CollectionPreview = ({ title , items }) => {
    return(
        <CollectionPreviewContainer>
            <Title>{title.toUpperCase()}</Title>
                <Preview>
                    {items
                    .filter((item,idx)=> idx<4)
                    .map((item) => (
                        <CollectionItem key={item.id} item={item} />
                    ))}
                </Preview>
        </CollectionPreviewContainer>
    )
}

export default CollectionPreview;