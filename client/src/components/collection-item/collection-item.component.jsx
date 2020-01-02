import React from 'react';
import './collection-item.styles.scss';
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
// import CustomButton from "../custom-button/custom-button.component";
import 
{ 
    CollectionItemContainer, 
    ImageContainer , 
    CollectionFooter, 
    PriceSpan, 
    NameSpan,
    AddButton 
} from "./collection-item.styles";

const CollectionItem = ({ item, addItem }) => {
    const { price, name, imageUrl } = item;
    return (
        <CollectionItemContainer>
            <ImageContainer
            style={
                {
                    backgroundImage : `url(${imageUrl})`
                }
            }/>
            <CollectionFooter>
                <NameSpan className="name">{name}</NameSpan>
                <PriceSpan>{price}</PriceSpan>
            </CollectionFooter>
            <AddButton onClick={() => {addItem(item)}} inverted> Add to cart</AddButton>
        </CollectionItemContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);