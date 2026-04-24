'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import * as S from "./style";
import MypageHeader from "./components/MypageHeader";
import MypageWheel from "./components/MypageWheel";
import MypageStatus from "./components/MypageStatus";

export default function Home() {
    const router = useRouter();
    const [showUnauthorized, setShowUnauthorized] = useState(false);

    const handleEnter = () => {
        router.push("/mypageDetail");
    };

    const handleLoginRedirect = () => {
        router.push("/");
    };

    const handlePrev = () => {
        router.push("/skin");
    };

    const handleNext = () => {
        router.push("/home");
    };

    return (
        <S.Container>
            <S.GreenBox />
            <S.MainContent>
                <MypageHeader />
                
                <MypageWheel 
                    onPrev={handlePrev} 
                    onNext={handleNext} 
                />

                <MypageStatus 
                    showUnauthorized={showUnauthorized}
                    onLoginRedirect={handleLoginRedirect}
                    onEnter={handleEnter}
                />
            </S.MainContent>
            <S.GreenBox />
        </S.Container>
    );
}