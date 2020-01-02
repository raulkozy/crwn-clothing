import  React  from "react";
import './cart-dropdown.styles.scss';
import { connect } from 'react-redux'
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import CustomButton from "../custom-button/custom-button.component";

const CartDropdown = ({ cartItems , history, dispatch}) => (
        <div className="cart-dropdown">
            <div className="cart-items" >
                {cartItems.length ? 
                (
                    cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} item={cartItem}/>
                    ))
                ):
                (<span className="empty-message">your cart is empty</span>)
                }
            </div>
            <CustomButton onClick={
                () => {history.push('/checkout');
                 dispatch(toggleCartHidden())
            }}> GO TO CHECKOUT </CustomButton>
        </div>
    )

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})
export default withRouter(connect(mapStateToProps)(CartDropdown));
