'use client'

import { useRouter } from "next/navigation";
import * as S from "./style";

const recentResults = [
    { date: "3월 12일", type: "퍼스널 컬러 검사 결과" },
    { date: "3월 26일", type: "퍼스널 컬러 검사 결과" },
    { date: "3월 27일", type: "스킨 타입 검사 결과" },
    { date: "3월 29일", type: "스킨 타입 검사 결과" },
];

const likedProducts = [
    {
        id: 1,
        image: "/assets/light.svg",
        badge: "ONLY\n올리브영\n단독상품",
        tag: "1+1",
        discount: "7일특가",
        period: "3/1~3/7",
        name: "[화잡멱수분선] 웰라쥬 리얼 히알루로닉 블루 선크림 50ml 1+1 기획",
        price: "29,300원",
        store: "올리브영",
    },
    {
        id: 2,
        image: "/assets/light.svg",
        badge: "ONLY\n올리브영\n단독상품",
        tag: "1+1",
        discount: "7일특가",
        period: "3/1~3/7",
        name: "[화잡멱수분선] 웰라쥬 리얼 히알루로닉 블루 선크림 50ml 1+1 기획",
        price: "29,300원",
        store: "올리브영",
    },
];

export default function MypageDetail() {
    const router = useRouter();

    return (
        <S.Container>
            <S.GreenBox />
            <S.MainContent>
                <S.TopBar>
                    <S.HomeButton onClick={() => router.push("/home")}>
                        <img src="/assets/home.svg" alt="홈" width={24} height={24} />
                    </S.HomeButton>
                </S.TopBar>

                <S.Greeting>
                    <S.GreetingText>안녕하세요</S.GreetingText>
                    <S.UserName>[ 감자를 캐자 ] 님</S.UserName>
                </S.Greeting>

                <S.Section>
                    <S.SectionTitle>최근 검사 결과 조회</S.SectionTitle>
                    <S.ResultList>
                        {recentResults.map((item, idx) => (
                            <S.ResultItem key={idx} onClick={() => router.push("/result")}>
                                <S.ResultItemText>
                                    {item.date} {item.type} &gt;
                                </S.ResultItemText>
                            </S.ResultItem>
                        ))}
                    </S.ResultList>
                </S.Section>

                <S.Section>
                    <S.SectionTitle>찜 해둔 상품</S.SectionTitle>
                    <S.ProductGrid>
                        {likedProducts.map((product) => (
                            <S.ProductCard key={product.id}>
                                <S.ProductImageWrapper>
                                    <S.ProductBadge>{product.badge}</S.ProductBadge>
                                    <S.ProductTag>{product.tag}</S.ProductTag>
                                    <S.ProductPeriod>{product.period}</S.ProductPeriod>
                                    <S.ProductDiscount>{product.discount}</S.ProductDiscount>
                                    <S.ProductImg src={product.image} alt={product.name} />
                                    <S.ProductHydration>수분착물</S.ProductHydration>
                                </S.ProductImageWrapper>
                                <S.ProductInfo>
                                    <S.ProductName>{product.name}</S.ProductName>
                                    <S.ProductMeta>
                                        <S.ProductPrice>{product.price}</S.ProductPrice>
                                        <S.ProductStore>{product.store}</S.ProductStore>
                                    </S.ProductMeta>
                                </S.ProductInfo>
                            </S.ProductCard>
                        ))}
                    </S.ProductGrid>
                </S.Section>
            </S.MainContent>
            <S.GreenBox />
        </S.Container>
    );
}
