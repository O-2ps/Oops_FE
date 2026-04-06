'use client'

import React from "react";
import * as S from "./style";
import { useRouter } from "next/navigation";

export default function Analysis() {
    const router = useRouter();

    const handleAnswer = (answer: boolean) => {
        console.log("Answered:", answer);
    };

    return (
        <S.Container>
            <S.GreenBox />
            <S.MainContent>
                <S.QuestionSection>
                    <S.QuestionNumber>Q1.</S.QuestionNumber>
                    <S.QuestionText>
                        세안을 하고 아무것도<br />
                        바르지 않으면 건조하다.
                    </S.QuestionText>
                </S.QuestionSection>

                <S.OptionsContainer>
                    <S.OptionButton onClick={() => handleAnswer(false)}>
                        <S.OptionIcon src="/assets/no.svg" alt="No" />
                        <S.OptionLabel>아니요</S.OptionLabel>
                    </S.OptionButton>
                    <S.OptionButton onClick={() => handleAnswer(true)}>
                        <S.OptionIcon src="/assets/yes.svg" alt="Yes" />
                        <S.OptionLabel>네</S.OptionLabel>
                    </S.OptionButton>
                </S.OptionsContainer>
            </S.MainContent>
            <S.GreenBox />
        </S.Container>
    );
}
