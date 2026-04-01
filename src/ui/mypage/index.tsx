'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import * as S from "./style";

export default function Home() {
    const router = useRouter();
    const [showUnauthorized, setShowUnauthorized] = useState(false);

    const handleEnter = () => {
        setShowUnauthorized(true);
    };

    const handleLoginRedirect = () => {
        console.log("Redirecting to login...");
    };

    return (
        <S.Container>
            <S.GreenBox />
            <S.MainContent>
                {showUnauthorized && (
                    <S.LoginLink onClick={handleLoginRedirect}>
                        * 로그인 페이지로 이동하기
                    </S.LoginLink>
                )}

                <S.Header>
                    <S.StepNumber>3.</S.StepNumber>
                    <S.Title>마이페이지</S.Title>
                </S.Header>

                <S.WheelSection>
                    <S.ArrowButton onClick={() => router.push("/skin")}>&lt;</S.ArrowButton>
                    <S.ColorWheel
                        src={"/assets/mypage.svg"}
                        alt={"My Page Iridescent Objects"}
                    />
                    <S.ArrowButton onClick={() => router.push("/home")}>&gt;</S.ArrowButton>
                </S.WheelSection>

                {showUnauthorized ? (
                    <S.StatusText>
                        [ 로그인을 하지 않았습니다. ]
                    </S.StatusText>
                ) : (
                    <S.FooterAction onClick={handleEnter}>
                        [ 들어가기 ]
                    </S.FooterAction>
                )}
            </S.MainContent>
            <S.GreenBox />
        </S.Container>
    );
}