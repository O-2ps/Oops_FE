import styled from "@emotion/styled";

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
    justify-content: center;
    padding: 0 2rem;
    width: 100%;
    z-index: 1;
    margin-top: -8rem;
`;

export const QuestionSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 3.5rem;
`;

export const QuestionNumber = styled.h2`
    font-size: 1.6rem;
    color: #333;
    margin-bottom: 1.5rem;
    text-shadow: 
        -1.5px -1.5px 0 #FFF,  
         1.5px -1.5px 0 #FFF,
        -1.5px  1.5px 0 #FFF,
         1.5px  1.5px 0 #FFF,
         0px 1.5px 0 #FFF,
         1.5px 0px 0 #FFF,
         -1.5px 0px 0 #FFF,
         0px -1.5px 0 #FFF;
`;

export const QuestionText = styled.p`
    font-size: 1.35rem;
    line-height: 1.7;
    color: #333;
    word-break: keep-all;
    text-shadow: 
        -1.5px -1.5px 0 #FFF,  
         1.5px -1.5px 0 #FFF,
        -1.5px  1.5px 0 #FFF,
         1.5px  1.5px 0 #FFF,
         0px 1.5px 0 #FFF,
         1.5px 0px 0 #FFF,
         -1.5px 0px 0 #FFF,
         0px -1.5px 0 #FFF;
`;

export const OptionsContainer = styled.div`
    display: flex;
    gap: 1.2rem;
    width: 100%;
    justify-content: center;
`;

export const OptionButton = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 9.5rem;
    height: 9.5rem;
    background-color: rgba(245, 235, 240, 0.4);
    border: none;
    cursor: pointer;
    transition: transform 0.1s;

    &:active {
        transform: scale(0.95);
    }
`;

export const OptionIcon = styled.img`
    width: 4.8rem;
    height: 4.8rem;
    margin-bottom: 1.2rem;
    object-fit: contain;
`;

export const OptionLabel = styled.span`
    font-size: 1.25rem;
    color: #333;
    text-shadow: 
        -1.5px -1.5px 0 #FFF,  
         1.5px -1.5px 0 #FFF,
        -1.5px  1.5px 0 #FFF,
         1.5px  1.5px 0 #FFF,
         0px 1.5px 0 #FFF,
         1.5px 0px 0 #FFF,
         -1.5px 0px 0 #FFF,
         0px -1.5px 0 #FFF;
`;
