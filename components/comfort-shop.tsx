'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, ShoppingBag, UserRound, Heart, Star, ArrowRight, Check, Menu, X, ShieldCheck, Truck, RotateCcw } from 'lucide-react'

const products = [
  { name: '데일리 컴포트 인솔', desc: '하루 종일 편안한 기본 쿠션', price: '39,800원', sale: '29,800원', discount: '25%', rating: '4.9', reviews: 328, tag: '일상용' },
  { name: '아치 밸런스 인솔', desc: '발 아치를 안정적으로 받쳐주는 설계', price: '49,800원', sale: '39,800원', discount: '20%', rating: '4.8', reviews: 214, tag: '아치 서포트' },
  { name: '액티브 워크 인솔', desc: '걷고 움직일수록 가벼워지는 발걸음', price: '59,800원', sale: '44,800원', discount: '25%', rating: '4.9', reviews: 186, tag: '운동용' },
  { name: '스탠딩 케어 인솔', desc: '오래 서 있는 분을 위한 탄탄한 지지력', price: '54,800원', sale: '42,800원', discount: '22%', rating: '4.7', reviews: 152, tag: '오래 서 있는 분' },
]

const categories = ['전체', '일상용', '운동용', '쿠션형', '아치 서포트형', '오래 서 있는 분']

export function ComfortShop() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState('전체')
  const [liked, setLiked] = useState<number[]>([])

  const toggleLike = (index: number) => setLiked((current) => current.includes(index) ? current.filter((item) => item !== index) : [...current, index])

  return (
    <div className="min-h-screen bg-[#fafbf9] text-[#25352f]">
      <div className="bg-[#203c32] px-5 py-2 text-center text-sm font-medium text-white">신규 가입 시 첫 구매 3,000원 할인</div>
      <header className="sticky top-0 z-20 border-b border-[#e8ece8] bg-[#fafbf9]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-5 lg:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="온발 홈">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-[#c9dfc9] text-lg font-bold text-[#203c32]">온</span>
            <span><strong className="block text-xl tracking-tight">온발</strong><small className="text-xs text-[#75827b]">매일 걷는 사람을 위한 편안함</small></span>
          </a>
          <nav className="hidden items-center gap-8 text-[15px] font-semibold lg:flex" aria-label="주요 메뉴">
            <Link href="/products" className="relative py-2 transition-colors duration-200 hover:text-[#7b9f7b] after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-[#7b9f7b] after:transition-transform after:duration-200 hover:after:scale-x-100">전체 상품</Link><a href="#features" className="relative py-2 transition-colors duration-200 hover:text-[#7b9f7b] after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-[#7b9f7b] after:transition-transform after:duration-200 hover:after:scale-x-100">왜 온발인가요</a><Link href="/mypage" className="relative py-2 transition-colors duration-200 hover:text-[#7b9f7b] after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-[#7b9f7b] after:transition-transform after:duration-200 hover:after:scale-x-100">마이페이지</Link><a href="#reviews" className="relative py-2 transition-colors duration-200 hover:text-[#7b9f7b] after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-[#7b9f7b] after:transition-transform after:duration-200 hover:after:scale-x-100">고객 후기</a><a href="#brand" className="relative py-2 transition-colors duration-200 hover:text-[#7b9f7b] after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-[#7b9f7b] after:transition-transform after:duration-200 hover:after:scale-x-100">브랜드 이야기</a>
          </nav>
          <div className="flex items-center gap-2">
            <button className="hidden rounded-full p-3 transition-colors duration-200 hover:bg-[#eef3ed] hover:text-[#557d5c] sm:block" aria-label="검색"><Search className="h-5 w-5" /></button>
            <Link href="/login" className="hidden rounded-full p-3 transition-colors duration-200 hover:bg-[#eef3ed] hover:text-[#557d5c] sm:block" aria-label="로그인"><UserRound className="h-5 w-5" /></Link>
            <Link href="/cart" className="relative rounded-full p-3 hover:bg-[#eef3ed]" aria-label="장바구니"><ShoppingBag className="h-5 w-5" /><span className="absolute right-1 top-1 grid h-4 w-4 place-items-center rounded-full bg-[#e49a62] text-[10px] text-white">0</span></Link>
            <button className="rounded-full p-3 lg:hidden" aria-label="메뉴 열기" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
          </div>
        </div>
        {menuOpen && <nav className="flex flex-col gap-5 border-t border-[#e8ece8] px-5 py-6 font-semibold lg:hidden"><a href="#products" onClick={() => setMenuOpen(false)}>전체 상품</a><a href="#features" onClick={() => setMenuOpen(false)}>왜 온발인가요</a><a href="#reviews" onClick={() => setMenuOpen(false)}>고객 후기</a><a href="#brand" onClick={() => setMenuOpen(false)}>브랜드 이야기</a></nav>}
      </header>

      <main id="top">
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1fr_0.9fr] lg:px-8 lg:py-24">
          <div><p className="mb-5 text-sm font-bold tracking-[0.18em] text-[#7b9f7b]">COMFORT FOR EVERY STEP</p><h1 className="max-w-xl text-4xl font-bold leading-[1.22] tracking-tight sm:text-5xl lg:text-[4.2rem]">걸음이 편안하면,<br /><span className="text-[#7b9f7b]">하루가 달라집니다.</span></h1><p className="mt-7 max-w-lg text-lg leading-8 text-[#69766f]">매일 걷는 사람의 발을 연구해 만든 기능성 깔창.<br className="hidden sm:block" /> 발에 꼭 맞는 편안함을 온발에서 만나보세요.</p><div className="mt-9 flex flex-wrap gap-3"><a href="#products" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#203c32] px-7 font-bold text-white transition hover:bg-[#315648]">상품 보러가기 <ArrowRight className="h-4 w-4" /></a><a href="#features" className="inline-flex min-h-14 items-center justify-center rounded-full border border-[#d7e0d6] px-7 font-bold text-[#203c32] hover:bg-white">온발의 기준</a></div><div className="mt-12 flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold text-[#64736a]"><span className="flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-[#7b9f7b]" /> 30일 무료 체험</span><span className="flex items-center gap-2"><Truck className="h-5 w-5 text-[#7b9f7b]" /> 3만원 이상 무료배송</span></div></div>
          <div className="relative overflow-hidden rounded-[2rem] bg-[#e8f0e6] p-7 sm:p-12"><div className="absolute right-7 top-7 rounded-full bg-white px-4 py-2 text-sm font-bold text-[#557d5c]">BEST ITEM</div><img src="/images/insole-product.png" alt="온발 기능성 인솔 제품" className="relative z-10 w-full mix-blend-multiply" /><div className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-[#c9dfc9]" /><p className="relative z-10 mt-3 text-center text-sm font-medium text-[#607267]">발바닥 전체를 감싸는 편안한 쿠션감</p></div>
        </section>

        <section id="features" className="border-y border-[#e8ece8] bg-white"><div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 px-5 py-9 sm:grid-cols-4 lg:px-8"><Feature icon="01" title="발 아치 지지" text="발의 균형을 편안하게" /><Feature icon="02" title="충격 흡수" text="걸음마다 부드럽게" /><Feature icon="03" title="통기성 소재" text="쾌적함이 오래도록" /><Feature icon="04" title="사이즈 맞춤" text="가위로 간편하게 조절" /></div></section>

        <section id="products" className="mx-auto max-w-7xl px-5 py-20 lg:px-8"><div className="flex flex-wrap items-end justify-between gap-5"><div><p className="mb-3 text-sm font-bold tracking-[0.15em] text-[#7b9f7b]">OUR PRODUCTS</p><h2 className="text-3xl font-bold tracking-tight sm:text-4xl">나에게 맞는 편안함</h2></div><a href="#products" className="font-bold text-[#557d5c]">전체 상품 보기 <ArrowRight className="ml-1 inline h-4 w-4" /></a></div><div className="mt-9 flex gap-2 overflow-x-auto pb-2">{categories.map((category) => <button key={category} onClick={() => setActiveCategory(category)} className={`min-h-11 shrink-0 rounded-full px-5 text-sm font-semibold transition ${activeCategory === category ? 'bg-[#203c32] text-white' : 'bg-white text-[#69766f] ring-1 ring-[#e2e9e0] hover:ring-[#7b9f7b]'}`}>{category}</button>)}</div><div className="mt-8 grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">{products.map((product, index) => <article key={product.name} className="group"><div className="relative aspect-square overflow-hidden rounded-2xl bg-[#eef3ed]"><img src="/images/insole-product.png" alt={product.name} className="h-full w-full object-contain p-8 mix-blend-multiply transition duration-500 group-hover:scale-105" /><span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-[#557d5c]">{product.tag}</span><button onClick={() => toggleLike(index)} className="absolute right-4 top-4 rounded-full bg-white p-2.5" aria-label={`${product.name} 찜하기`}><Heart className={`h-5 w-5 ${liked.includes(index) ? 'fill-[#d47c62] text-[#d47c62]' : 'text-[#718077]'}`} /></button></div><div className="pt-5"><h3 className="text-lg font-bold">{product.name}</h3><p className="mt-1 text-sm text-[#75827b]">{product.desc}</p><div className="mt-3 flex items-center gap-1 text-sm"><Star className="h-4 w-4 fill-[#e49a62] text-[#e49a62]" /><b>{product.rating}</b><span className="text-[#8a958e]">({product.reviews})</span></div><div className="mt-3 flex items-baseline gap-2"><span className="text-sm text-[#9aa39d] line-through">{product.price}</span><b className="text-xl">{product.sale}</b><span className="text-sm font-bold text-[#d47c62]">{product.discount}</span></div></div></article>)}</div></section>

        <section className="bg-[#edf4eb] px-5 py-20"><div className="mx-auto max-w-4xl text-center"><p className="mb-4 text-sm font-bold tracking-[0.15em] text-[#7b9f7b]">WHO IS IT FOR</p><h2 className="text-3xl font-bold tracking-tight sm:text-4xl">이런 분께 추천합니다</h2><div className="mt-10 grid gap-3 text-left sm:grid-cols-2">{['하루 종일 서서 일하는 분', '매일 많이 걷고 움직이는 분', '운동을 즐겨 하시는 분', '신발 착화감이 늘 아쉬운 분'].map((item) => <div key={item} className="flex items-center gap-4 rounded-2xl bg-white p-5 text-lg font-semibold"><span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#c9dfc9] text-[#557d5c]"><Check className="h-5 w-5" /></span>{item}</div>)}</div></div></section>

        <section id="reviews" className="mx-auto max-w-7xl px-5 py-20 lg:px-8"><div className="text-center"><p className="mb-3 text-sm font-bold tracking-[0.15em] text-[#7b9f7b]">REAL REVIEWS</p><h2 className="text-3xl font-bold tracking-tight sm:text-4xl">먼저 사용해 본 분들의 이야기</h2></div><div className="mt-10 grid gap-5 md:grid-cols-3">{[['김○○', '50대 / 사무직', '하루 종일 앉았다 일어날 때 발바닥이 늘 뻐근했는데, 한결 편안해졌어요.'], ['이○○', '40대 / 자영업', '매장에서 오래 서 있는 날에도 발이 덜 피곤합니다. 가족에게도 추천했어요.'], ['박○○', '30대 / 운동을 좋아해요', '운동화 안에 넣었는데 쿠션감이 확실히 다르네요. 착화감이 좋아요.']].map(([name, info, review]) => <article key={name} className="rounded-2xl border border-[#e5ebe4] bg-white p-7"><div className="flex items-center justify-between"><div><b>{name}</b><p className="mt-1 text-sm text-[#87928b]">{info}</p></div><div className="flex gap-0.5 text-[#e49a62]" aria-label="별점 5점">{[1,2,3,4,5].map((star) => <Star key={star} className="h-4 w-4 fill-current" />)}</div></div><p className="mt-6 leading-7 text-[#526159]">“{review}”</p></article>)}</div></section>

        <section id="brand" className="bg-[#203c32] px-5 py-20 text-white"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center lg:px-8"><div><p className="mb-4 text-sm font-bold tracking-[0.15em] text-[#c9dfc9]">OUR PHILOSOPHY</p><h2 className="text-3xl font-bold leading-tight sm:text-4xl">잘 만든 깔창 하나가<br />매일의 걸음을 바꿉니다.</h2></div><div><p className="text-lg leading-8 text-[#d4e0d6]">온발은 특별한 날보다 매일의 평범한 걸음에 집중합니다. 신발 속 작은 변화가 몸 전체의 편안함으로 이어질 수 있도록, 좋은 소재와 오래 신어도 편안한 설계를 고민합니다.</p><a href="#top" className="mt-7 inline-flex items-center gap-2 font-bold text-[#c9dfc9]">온발 이야기 더보기 <ArrowRight className="h-4 w-4" /></a></div></div></section>
      </main>
      <footer className="bg-[#172c24] px-5 py-10 text-sm text-[#aabbb0]"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 lg:flex-row lg:px-8"><div><b className="text-lg text-white">온발</b><p className="mt-3">매일 걷는 사람을 위한 편안함</p></div><div className="flex flex-wrap gap-x-7 gap-y-3"><a href="#top">이용약관</a><a href="#top">개인정보처리방침</a><a href="#top">배송/교환/반품</a><Link href="/support">고객센터 02-1234-5678</Link></div></div><div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-6 lg:px-8">상호명: 온발컴퍼니 · 대표: 홍길동 · 서울특별시 마포구 · 사업자등록번호 123-45-67890</div></footer>
    </div>
  )
}

function Feature({ icon, title, text }: { icon: string; title: string; text: string }) { return <div className="flex gap-3"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#edf4eb] text-sm font-bold text-[#557d5c]">{icon}</span><div><b className="block text-sm sm:text-base">{title}</b><span className="mt-1 block text-xs text-[#87928b] sm:text-sm">{text}</span></div></div> }

export { products }

