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
    justify-content: space-between;
    padding: 5.5rem 0 6.82rem;
    width: 100%;
    z-index: 1;
`;

export const TopSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    width: 100%;
`;

export const LightIcon = styled.img`
    width: 4rem;
    height: auto;
    margin-bottom: 0.4rem;
`;

export const Title = styled.h1`
    font-size: 1.25rem;
    color: #212121;
    text-align: center;
    text-shadow: 
        -2px -2px 0 #F6FFF7,  
         2px -2px 0 #F6FFF7,
        -2px  2px 0 #F6FFF7,
         2px  2px 0 #F6FFF7,
         0px 3px 0px #F6FFF7;
    margin-bottom: 1.5rem;
`;

export const NoticeList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
`;

export const NoticeItem = styled.p`
    font-size: 1.1rem;
    color: #A0A0A0;
    text-align: center;
    text-shadow: 
        -1px -1px 0 #F6FFF7,  
         1px -1px 0 #F6FFF7,
        -1px  1px 0 #F6FFF7,
         1px  1px 0 #F6FFF7;
`;

export const BottomSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.6rem;
`;

export const StartButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.4rem;
    color: #FF8CB6;
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

export const BackButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    color: #F6FFF7;
    text-shadow: 
        -1px -1px 0 #EAAFB8,  
         1px -1px 0 #EAAFB8,
        -1px  1px 0 #EAAFB8,
         1px  1px 0 #EAAFB8;

    &:active {
        transform: scale(0.95);
    }
`;
