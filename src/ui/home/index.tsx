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
                    <S.Title>퍼스널 컬러 분석하기</S.Title>
                </S.Header>

                <S.WheelSection>
                    <S.ArrowButton>&lt;</S.ArrowButton>
                    <S.ColorWheel src="/assets/colors.svg" alt="Color Wheel" />
                    <S.ArrowButton>&gt;</S.ArrowButton>
                </S.WheelSection>
                <S.FooterAction onClick={handleStartAnalysis}>
                    [ 분석 시작하기 ]
                </S.FooterAction>
            </S.MainContent>
            <S.GreenBox />
        </S.Container>
    );
}