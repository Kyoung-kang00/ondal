'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Logo } from '@/components/logo'

const navItems = [
  { label: '회사소개', href: '#about' },
  { label: '사업분야', href: '#business' },
  { label: '일하는 방식', href: '#approach' },
  { label: '연혁', href: '#history' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="#top" aria-label="시큐러스 홈" className="flex items-center gap-2">
          <Logo />
        </Link>

        <nav aria-label="주요 메뉴" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden h-9 items-center rounded-full bg-foreground px-4 text-sm font-medium text-background transition-colors hover:bg-primary md:inline-flex"
          >
            도입 문의
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
            className="inline-flex size-9 items-center justify-center rounded-full border border-border md:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="모바일 메뉴" className="border-t border-border md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-6 py-4">
            {[...navItems, { label: '도입 문의', href: '#contact' }].map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-medium text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
