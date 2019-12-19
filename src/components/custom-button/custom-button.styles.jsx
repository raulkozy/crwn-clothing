import styled, { css } from "styled-components";

export const buttonStyles = css`
    background-color: black;
    color: white;
    border: none;
    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
        }
`

export const invertedButtonStyles = css`
    background-color: white;
    color: black;
        &:hover{
        background-color: black;
        color: white;
        border: 1px solid black;
        }
`

const getButtonStyles = props => {
    console.log(props)
    if(props.isGoogleSignIn){
        return googleSignInStyles;
    }
    console.log(props.inverted ? invertedButtonStyles : buttonStyles);
    
    return props.inverted ? invertedButtonStyles : buttonStyles;
}

export const googleSignInStyles = css`
    background-color: #428ff4;
    color: white;

    &:hover{
    background-color: #357ae8;
    border: none;
    }
`

export const CustomButtonContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 11px;
    
    text-transform: uppercase;
    font-weight: bolder;
    
    cursor: pointer;
    display: flex;
    justify-content: center;
    ${getButtonStyles}
`