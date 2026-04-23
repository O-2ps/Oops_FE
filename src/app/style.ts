import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100dvh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  overflow: hidden;
`;

export const MainWrapper = styled.main`
  width: 100%;
  max-width: 430px;
  height: 874px;
  background-image: url("/assets/BG.svg");
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  
  &::-webkit-scrollbar {
    display: none;
  }
  
  -ms-overflow-style: none;
  scrollbar-width: none;
`;
