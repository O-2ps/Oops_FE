import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const float = keyframes`
    0% { transform: rotate(var(--rotate)) translateY(0); }
    50% { transform: rotate(var(--rotate)) translateY(-0.625rem); }
    100% { transform: rotate(var(--rotate)) translateY(0); }
`;

const blink = keyframes`
    0% { opacity: 1; }
    50% { opacity: 0.3; }
    100% { opacity: 1; }
`;

const logoFloat = keyframes`
    0% { transform: translateY(0); }
    50% { transform: translateY(-0.1rem); }
    100% { transform: translateY(0); }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    position: relative;
`;

export const MainContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 3.5rem 0 6.5rem;
    width: 100%;
`;

export const GreenBox = styled.div`
    height: 2.2rem;
    width: 100%;
    background-color: #C6EB8D;
    z-index: 10;
`;

export const Star = styled.img<{
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
    size: string;
    rotate?: string;
    opacity?: number;
    delay?: string;
}>`
    position: absolute;
    top: ${(props) => props.top};
    bottom: ${(props) => props.bottom};
    left: ${(props) => props.left};
    right: ${(props) => props.right};
    width: ${(props) => props.size};
    height: ${(props) => props.size};
    --rotate: ${(props) => props.rotate || "0deg"};
    transform: rotate(var(--rotate));
    opacity: ${(props) => props.opacity || 0.6};
    z-index: 0;
    pointer-events: none;
    animation: ${float} 3s ease-in-out infinite;
    animation-delay: ${(props) => props.delay || "0s"};
`;

export const Notice = styled.p`
    font-size: 0.85rem;
    color: #FF8CB6;
    text-align: center;
    z-index: 1;
    margin: 0 0 2.5rem 0;
    text-shadow: 
        -0.1rem -0.1rem 0 #F6FFF7,  
         0.1rem -0.1rem 0 #F6FFF7,
        -0.1rem  0.1rem 0 #F6FFF7,
         0.1rem  0.1rem 0 #F6FFF7,
         0px -0.1rem 0 #F6FFF7,
         0px  0.1rem 0 #F6FFF7,
        -0.15rem  0px 0 #F6FFF7,
         0.15rem  0px 0 #F6FFF7;
    animation: ${blink} 2s infinite ease-in-out;
`;

export const CenterSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
    z-index: 1;
`;

export const Logo = styled.img`
    width: 15rem;
    height: auto;
    animation: ${logoFloat} 3s ease-in-out infinite;
`;

export const SubTitle = styled.h2`
    font-size: 1rem;
    font-weight: normal;
    text-align: center;
    line-height: 160%;
    color: #FF8CB6;
    text-shadow: 
        -0.1rem -0.1rem 0 #F6FFF7,  
         0.1rem -0.1rem 0 #F6FFF7,
        -0.1rem  0.1rem 0 #F6FFF7,
         0.1rem  0.1rem 0 #F6FFF7,
         0px -0.1rem 0 #F6FFF7,
         0px  0.1rem 0 #F6FFF7,
        -0.15rem  0px 0 #F6FFF7,
         0.15rem  0px 0 #F6FFF7,
         0.25rem 0.25rem 0 #EAAFB8;
`;

export const ButtonSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    z-index: 1;
`;

export const LoginButton = styled.button`
    background: none;
    border: none;
    font-size: 1.25rem;
    color: #F5F5F5;
    cursor: pointer;
    padding: 0.25rem 0.5rem;
    text-shadow: 0.15rem 0.15rem 0 #EAAFB8;

    &:active {
        transform: scale(0.98);
    }
`;