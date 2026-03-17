'use client'

import { useRouter } from "next/navigation";
import * as S from "./style";

export default function Skin() {
    const router = useRouter();

    const handleStartAnalysis = () => {
        router.push("/lastCheck");
    };

    return (
        <S.Container>
            <S.GreenBox />
            <S.MainContent>
                <S.Header>
                    <S.StepNumber>2.</S.StepNumber>
                    <S.Title>피부 타입 진단하기</S.Title>
                </S.Header>

                <S.WheelSection>
                    <S.ArrowButton>&lt;</S.ArrowButton>
                    <S.Mask src="/assets/mask.svg" alt="mask" />
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