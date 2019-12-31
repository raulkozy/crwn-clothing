import React from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selector";
import { selectCurrentuser } from "../../redux/user/user.selector";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {
  HeaderContainer,
  LogoContainer,
  OptionLink,
  OptionsContainer
} from "./header.styles";
import { signOutStart } from "../../redux/user/user.actions";

const Header = ({ currentUser, hidden, signOutStart }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink className="option" to="/shop">
          SHOP
        </OptionLink>
        <OptionLink className="option" to="/shop">
          CONTACT
        </OptionLink>
        {currentUser ? (
          <OptionLink as={"div"} to="/signIn" onClick={signOutStart}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink className="option" to="/signIn">
            SIGN IN
          </OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentuser,
  hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
