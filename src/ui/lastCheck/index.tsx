'use client'

import { useRouter } from "next/navigation";
import * as S from "./style";

export default function LastCheck() {
    const router = useRouter();

    const handleStart = () => {
    };

    return (
        <S.Container>
            <S.GreenBox />
            <S.MainContent>
                <S.TopSection>
                    <S.LightIcon src="/assets/light.svg" alt="Light Bulb" />
                    <S.Title>검사 전 확인해주세요.</S.Title>
                    <S.NoticeList>
                        <S.NoticeItem>조명이 너무 어둡거나 밝으면 안됩니다.</S.NoticeItem>
                        <S.NoticeItem>메이크업을 하지 않아야합니다.</S.NoticeItem>
                        <S.NoticeItem>필터가 없는 기본 카메라여야 합니다.</S.NoticeItem>
                    </S.NoticeList>
                </S.TopSection>
                <S.BottomSection>
                    <S.StartButton onClick={handleStart}>[ 분석 시작하기 ]</S.StartButton>
                    <S.BackButton onClick={() => router.back()}>뒤로가기</S.BackButton>
                </S.BottomSection>
            </S.MainContent>
            <S.GreenBox />
        </S.Container>
    );
}
