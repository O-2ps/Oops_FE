import styled from "@emotion/styled";

export { Container, GreenBox } from "../common";

export const MainContent = styled.main`
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    z-index: 1;
    overflow-y: auto;

    &::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
`;

export const TopBar = styled.div`
    display: flex;
    align-items: center;
    padding: rem 1.8rem 0.5rem;
`;

export const HomeButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 2rem;
    padding-top: 1.2rem;
    padding-bottom: 1.2rem;

    &:active {
        transform: scale(0.92);
    }
`;

export const Greeting = styled.div`
    padding-left: 2rem;
    padding-bottom: 2rem;
`;

export const GreetingText = styled.p`
    font-size: 1.15rem;
    color: #444;
    margin: 0 0 0.5rem;
    font-weight: 400;
`;

export const UserName = styled.p`
    font-size: 1.55rem;
    font-weight: 700;
    color: #FF8CB6;
    margin: 0;
    text-shadow:
        -1px -1px 0 #F6FFF7,
         1px -1px 0 #F6FFF7,
        -1px  1px 0 #F6FFF7,
         1px  1px 0 #F6FFF7;
`;

export const Section = styled.section`
    margin-bottom: 2rem;
`;

export const SectionTitle = styled.h2`
    font-size: 1.2rem;
    font-weight: 700;
    color: #333;
    margin: 0 0 1rem;
    padding: 0 1.8rem;
`;

export const ResultList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0 1.8rem;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
`;

export const ResultItem = styled.li`
    background: rgba(255, 255, 255, 0.72);
    border-radius: 1rem;
    padding: 1.2rem 1.5rem;
    cursor: pointer;
    transition: background 0.15s, transform 0.1s;

    &:hover {
        background: rgba(255, 200, 220, 0.25);
    }
    &:active {
        transform: scale(0.98);
    }
`;

export const ResultItemText = styled.span`
    font-size: 0.95rem;
    color: #555;
`;

export const ProductGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.2rem;
    padding: 0 1.8rem;
`;

export const ProductCard = styled.div`
    background: #fff;
    border-radius: 0.9rem;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
`;

export const ProductImageWrapper = styled.div`
    position: relative;
    width: 100%;
    aspect-ratio: 1;
    background: linear-gradient(135deg, #deeeff 0%, #c8e6ff 100%);
    overflow: hidden;
`;

export const ProductImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
`;

export const ProductBadge = styled.div`
    position: absolute;
    top: 0.4rem;
    right: 0.4rem;
    background: #1da462;
    color: #fff;
    font-size: 0.52rem;
    font-weight: 700;
    line-height: 1.3;
    white-space: pre-line;
    text-align: center;
    padding: 0.3rem 0.35rem;
    border-radius: 50%;
    width: 2.8rem;
    height: 2.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
`;

export const ProductTag = styled.div`
    position: absolute;
    top: 0.4rem;
    right: 3.5rem;
    background: #2a5cdf;
    color: #fff;
    font-size: 0.65rem;
    font-weight: 700;
    padding: 0.25rem 0.4rem;
    border-radius: 50%;
    width: 2.2rem;
    height: 2.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
`;

export const ProductHydration = styled.div`
    position: absolute;
    bottom: 2.8rem;
    right: 0.6rem;
    background: #2a5cdf;
    color: #fff;
    font-size: 0.58rem;
    font-weight: 700;
    padding: 0.25rem 0.4rem;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    z-index: 2;
`;

export const ProductPeriod = styled.div`
    position: absolute;
    bottom: 2rem;
    left: 0;
    background: rgba(0, 0, 0, 0.55);
    color: #fff;
    font-size: 0.6rem;
    padding: 0.15rem 0.5rem;
    z-index: 2;
`;

export const ProductDiscount = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: #1c1c8a;
    color: #FFD700;
    font-size: 1.05rem;
    font-weight: 900;
    padding: 0.3rem 0.5rem;
    z-index: 2;
`;

export const ProductInfo = styled.div`
    padding: 1rem 0.9rem 1.2rem;
`;

export const ProductName = styled.p`
    font-size: 0.72rem;
    color: #333;
    margin: 0 0 0.5rem;
    line-height: 1.4;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
`;

export const ProductMeta = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
`;

export const ProductPrice = styled.span`
    font-size: 0.78rem;
    font-weight: 600;
    color: #222;
`;

export const ProductStore = styled.span`
    font-size: 0.72rem;
    color: #888;
`;
