import styled from "styled-components";


export const FlexContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;

    @media screen and (min-width: 760px){
        flex-direction: row;
    }
`;

export const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 1em;
    display: flex;
`;

export const FormTitle = styled.h1`
    font-size: 3rem;
    line-height: 1;
    /* text-align: center; */
`;

export const FormTitleAccent = styled.span`
    color: purple
`;

export const Form = styled.form`
    /* margin-top: auto;
    margin-bottom: auto; */
    width: 100%;
    display: flex;
    flex-direction: column;
`;

// Pass prop to this button
export const Button = styled.button`
    display: inline-block;
    background-color: whitesmoke;
    color: black;
    padding: .5em;
    font-size: 1.1rem;
    font-weight: bold;
    outline: none;
    border: none;
    border-radius: .5em;
`;

export const SocialContainer = styled.div`
    display: flex;
    gap: 1em;
    position: absolute;
    bottom: 1em;

`;

export const Anchor = styled.a`
    display: inline-block;
    text-decoration: none;
    color: inherit;
`;