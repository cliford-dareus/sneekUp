import { motion } from "framer-motion";
import styled from "styled-components";

export const Navigation = styled(motion.ul)`
    position: absolute;
    top: 2em;
    width: 300px;
    padding: 1em;
`;

export const NavigationItem = styled(motion.li)`
    list-style-type: none;
    color: whitesmoke;
    
`;