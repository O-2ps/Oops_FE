'use client'

import styled from "@emotion/styled";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        <Container>
          <MainWrapper>
            {children}
          </MainWrapper>
        </Container>
      </body>
    </html>
  );
}

const Container = styled.div`
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

const MainWrapper = styled.main`
  width: 100%;
  max-width: 430px;
  height: 932px;
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