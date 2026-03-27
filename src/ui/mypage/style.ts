import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    position: relative;
`;

export const GreenBox = styled.div`
    height: 2.2rem;
    width: 100%;
    background-color: #C6EB8D;
    z-index: 2;
    flex-shrink: 0;
`;

export const MainContent = styled.main`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 3.5rem 0 6.5rem;
    width: 100%;
    z-index: 1;
`;

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

export const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
`;

export const StepNumber = styled.h2`
    font-size: 1.2rem;
    line-height: 1.2;
    color: #FF8CB6;
    margin-bottom: 0.25rem;
    text-shadow: 
        -2px -2px 0 #F6FFF7,  
         2px -2px 0 #F6FFF7,
        -2px  2px 0 #F6FFF7,
         2px  2px 0 #F6FFF7,
         0px 4px 0px #F6FFF7;
`;

export const Title = styled.h1`
    font-size: 1.5rem;
    line-height: 1.1;
    color: #FF8CB6;
    text-align: center;
    text-shadow: 
        -2px -2px 0 #F6FFF7,  
         2px -2px 0 #F6FFF7,
        -2px  2px 0 #F6FFF7,
         2px  2px 0 #F6FFF7,
         0px 4px 0px #F6FFF7;
    white-space: nowrap;
`;

export const WheelSection = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 0 1.5rem;
`;

export const ArrowButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.6rem;
    color: #FF8CB6;
    padding: 0.5rem;
    z-index: 10;
    text-shadow: 
        -2px -2px 0 #F6FFF7,  
         2px -2px 0 #F6FFF7,
        -2px  2px 0 #F6FFF7,
         2px  2px 0 #F6FFF7;

    &:active {
        transform: scale(0.90);
    }
`;

const float = keyframes`
    0% { transform: translateY(0); }
    50% { transform: translateY(-0.8rem); }
    100% { transform: translateY(0); }
`;

const rotate = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
`;

export const ColorWheel = styled.img`
    width: 18rem;
    height: 18rem;
    object-fit: contain;
    display: block;
    animation: ${float} 3s ease-in-out infinite;
`;


export const FooterAction = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.4rem;
    color: #FF8CB6;
    margin-bottom: 2rem;
    text-shadow: 
        -2px -2px 0 #F6FFF7,  
         2px -2px 0 #F6FFF7,
        -2px  2px 0 #F6FFF7,
         2px  2px 0 #F6FFF7,
         0px 2px 0px #F6FFF7;

    &:active {
        transform: scale(0.98);
    }
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