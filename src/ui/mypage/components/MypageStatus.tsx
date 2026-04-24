import * as S from "../style";

interface MypageStatusProps {
    showUnauthorized: boolean;
    onLoginRedirect: () => void;
    onEnter: () => void;
}

export default function MypageStatus({ 
    showUnauthorized, 
    onLoginRedirect, 
    onEnter 
}: MypageStatusProps) {
    return (
        <>
            {showUnauthorized && (
                <S.LoginLink onClick={onLoginRedirect}>
                    * 로그인 페이지로 이동하기
                </S.LoginLink>
            )}

            {showUnauthorized ? (
                <S.StatusText>
                    [ 로그인을 하지 않았습니다. ]
                </S.StatusText>
            ) : (
                <S.FooterAction onClick={onEnter}>
                    [ 들어가기 ]
                </S.FooterAction>
            )}
        </>
    );
}
