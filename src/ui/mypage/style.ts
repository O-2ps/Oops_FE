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

export const LoginLink = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    font-size: 0.9rem;
    color: #FF8CB6;
    position: absolute;
    top: 3.5rem;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    text-shadow: 
        -1px -1px 0 #F6FFF7,  
         1px -1px 0 #F6FFF7,
        -1px  1px 0 #F6FFF7,
         1px  1px 0 #F6FFF7;

    &:hover {
        text-decoration: underline;
    }
`;

export const ColorWheel = styled.img`
    width: 18rem;
    height: 18rem;
    object-fit: contain;
    display: block;
    animation: ${float} 3s ease-in-out infinite;
`;

export const StatusText = styled.div`
    font-size: 1.3rem;
    color: #FF8CB6;
    margin-bottom: 2rem;
    text-shadow: 
        -2px -2px 0 #F6FFF7,  
         2px -2px 0 #F6FFF7,
        -2px  2px 0 #F6FFF7,
         2px  2px 0 #F6FFF7,
         0px 2px 0px #F6FFF7;
    text-align: center;
`;