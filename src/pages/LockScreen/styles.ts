import styled from "styled-components";
import { Container } from "../styled-components";
import { Link } from "react-router-dom";
import Image1 from '../../assets/image1.png';

export const LockScreen = styled(Container)`
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(${Image1});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;

export const LockScreenTime = styled.div`
    span{
        font-size: 5rem;
        font-weight: 900;;
    }
`;

export const LockScreenLoginBtn = styled(Link)`
    position: absolute;
    padding: .5em 1.5em;
    border-radius: 2em;
    bottom: 3em;
    background-color: whitesmoke;
`;