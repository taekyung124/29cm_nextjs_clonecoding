import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
      <div style={{display: "flex", flexDirection: "column"}}>
        <Link href={'/main'}>메인 페이지</Link>
        <Link href={'/search'}>검색 페이지</Link>
        <Link href={'/auth/join'}>회원가입 페이지</Link>
        <Link href={'/auth/login'}>로그인 페이지</Link>
        <Link href={'/cart'}>장바구니 페이지</Link>
        <Link href={'/content/event'}>이벤트 페이지</Link>
        <Link href={'/content/look-book'}>룩북 페이지</Link>
        <Link href={'/cs'}>고객센터 페이지</Link>
        <Link href={'/my'}>마이페이지 페이지</Link>
        <Link href={'/my/liked'}>좋아한 상품 페이지</Link>
        <Link href={'/order'}>주문결제 페이지</Link>
        <Link href={'/product'}>상품 메인 페이지</Link>
        <Link href={'/product/list'}>상품 목록 페이지</Link>
        <Link href={'/product/detail'}>상품 상세 페이지</Link>
        <Link href={'/shop/magazine'}>매거진 페이지</Link>
        <Link href={'/shop/pt'}>pt 페이지</Link>
        <Link href={'/shop/show-case'}>showCase 페이지</Link>
        <Link href={'/shop/special-order'}>specialOrder 페이지</Link>
        <Link href={'/shop/week'}>week 페이지</Link>
      </div>
  );
}
