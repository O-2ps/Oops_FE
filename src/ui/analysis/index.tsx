'use client'

import React, { useState } from "react";
import * as S from "./style";
import { useRouter } from "next/navigation";
import { QUESTIONS } from "./data";

export default function Analysis() {
    const router = useRouter();
    const [currentStep, setCurrentStep] = useState(0);

    const handleAnswer = (answer: boolean) => {
        console.log(`Question ${currentStep + 1} answered:`, answer);

        if (currentStep < QUESTIONS.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            router.push("/skin");
        }
    };

    const currentQuestion = QUESTIONS[currentStep];

    return (
        <S.Container>
            <S.GreenBox />
            <S.MainContent>
                <S.QuestionSection>
                    <S.QuestionNumber>{currentQuestion.number}</S.QuestionNumber>
                    <S.QuestionText>
                        {currentQuestion.text}
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
