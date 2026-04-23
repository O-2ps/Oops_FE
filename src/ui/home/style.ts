import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export {
    Container,
    GreenBox,
    MainContent,
    Header,
    StepNumber,
    Title,
    WheelSection,
    ArrowButton,
    FooterAction,
} from "../common";

const rotate = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
`;

const float = keyframes`
    0% { transform: translateY(0); }
    50% { transform: translateY(-3rem); }
    100% { transform: translateY(0); }
`;

export const ColorWheel = styled.img`
    width: 18rem;
    height: 18rem;
    object-fit: contain;
    display: block;
    animation: ${float} 20s ease-in-out infinite,
               ${rotate} 40s linear infinite;
`;