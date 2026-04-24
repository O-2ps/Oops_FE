import * as S from "../style";

interface MypageWheelProps {
    onPrev: () => void;
    onNext: () => void;
}

export default function MypageWheel({ onPrev, onNext }: MypageWheelProps) {
    return (
        <S.WheelSection>
            <S.ArrowButton onClick={onPrev}>&lt;</S.ArrowButton>
            <S.ColorWheel
                src={"/assets/mypage.svg"}
                alt={"My Page Iridescent Objects"}
            />
            <S.ArrowButton onClick={onNext}>&gt;</S.ArrowButton>
        </S.WheelSection>
    );
}
