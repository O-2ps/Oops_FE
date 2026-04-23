import styled from "@emotion/styled";
import { float } from "../common";

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

export const Mask = styled.img`
    width: 16rem;
    height: 16rem;
    object-fit: contain;
    display: block;
    animation: ${float} 3s ease-in-out infinite;
`;