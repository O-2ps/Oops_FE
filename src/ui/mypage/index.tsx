'use client'

import { useRouter } from "next/navigation";
import * as S from "./style";

export default function Home() {
    const router = useRouter();

    const handleStartAnalysis = () => {
        router.push("/lastCheck");
    };

    return (
        <S.Container>
            <S.GreenBox />
            <S.MainContent>
                <S.Header>
                    <S.StepNumber>1.</S.StepNumber>
                    <S.Title>마이페이지</S.Title>
                </S.Header>

                <S.WheelSection>
                    <S.ArrowButton>&lt;</S.ArrowButton>
                    <S.ColorWheel src="/assets/mypage.svg" alt="Color Wheel" />
                    <S.ArrowButton>&gt;</S.ArrowButton>
                </S.WheelSection>
                <S.FooterAction onClick={handleStartAnalysis}>
                    [ 들어가기 ]
                </S.FooterAction>
            </S.MainContent>
            <S.GreenBox />
        </S.Container>
    );
}