import { Logo } from '@/components/logo'

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-14">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
          <div className="flex flex-col gap-4">
            <Logo inverted />
            <p className="max-w-xs text-sm leading-relaxed text-ink-foreground/60">신뢰할 수 있는 AI를 설계합니다.</p>
          </div>
          <nav aria-label="푸터 메뉴">
            <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-ink-foreground/70">
              <li><a href="#about" className="hover:text-ink-foreground">회사소개</a></li>
              <li><a href="#business" className="hover:text-ink-foreground">사업분야</a></li>
              <li><a href="#history" className="hover:text-ink-foreground">연혁</a></li>
              <li><a href="#contact" className="hover:text-ink-foreground">도입 문의</a></li>
              <li><a href="#top" className="hover:text-ink-foreground">개인정보처리방침</a></li>
            </ul>
          </nav>
        </div>

        <div className="flex flex-col gap-2 border-t border-ink-foreground/10 pt-8 text-xs leading-relaxed text-ink-foreground/50">
          <p>(주)시큐러스 | 대표이사 김지훈 | 사업자등록번호 123-45-67890</p>
          <p>서울특별시 강남구 테헤란로 427, 12층 | contact@securus.ai | 02-1234-5678</p>
          <p className="pt-2">{'© 2026 Securus Inc. All rights reserved.'}</p>
        </div>
      </div>
    </footer>
  )
}
