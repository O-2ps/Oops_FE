'use client'

import GlobalStyle from "@/style/globalStyle";
import { Container, MainWrapper } from "./style";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        <Container>
          <GlobalStyle />
          <MainWrapper>
            {children}
          </MainWrapper>
        </Container>
      </body>
    </html>
  );
}