'use client'

import { useRouter } from "next/navigation";
import * as S from "./style";

export default function Landing() {
    const router = useRouter();

    const handleGuestLogin = () => {
        router.push("/home");
    };

    return (
        <S.Container>
            <S.GreenBox />
            <S.MainContent>
                <S.Star
                    src="/assets/star.svg"
                    top="-12rem"
                    right="-2rem"
                    size="24rem"
                    rotate="24deg"
                    delay="0s"
                />
                <S.Star
                    src="/assets/star.svg"
                    top="16.5rem"
                    right="2.5rem"
                    size="13rem"
                    delay="-1s"
                />
                <S.Star
                    src="/assets/star.svg"
                    top="32rem"
                    right="12rem"
                    size="26rem"
                    rotate="-10deg"
                    delay="-2s"
                />

                <S.Notice>마이페이지는 로그인 후 이용 가능합니다.</S.Notice>

                <S.CenterSection>
                    <S.Logo src="/assets/logo.svg" alt="OOps!" />
                    <S.SubTitle>
                        내 피부를 위한<br />
                        가장 정교한 선택
                    </S.SubTitle>
                </S.CenterSection>

                <S.ButtonSection>
                    <S.LoginButton>[ 카카오톡 로그인 ]</S.LoginButton>
                    <S.LoginButton onClick={handleGuestLogin}>[ 비회원 로그인 ]</S.LoginButton>
                </S.ButtonSection>
            </S.MainContent>
            <S.GreenBox />
        </S.Container>
    );
}