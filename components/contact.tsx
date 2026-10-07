'use client'

import { useState } from 'react'
import { ArrowRight, Check, Mail, MapPin, Phone } from 'lucide-react'

const inputClass =
  'h-12 w-full rounded-xl border border-input bg-background px-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contact" className="scroll-mt-16 px-6 pb-24 md:pb-32">
      <div className="mx-auto grid max-w-6xl gap-12 rounded-3xl bg-accent p-8 md:p-14 lg:grid-cols-2">
        <div className="flex flex-col justify-between gap-10">
          <div className="flex flex-col gap-5">
            <p className="font-mono text-xs font-medium tracking-widest text-primary">CONTACT</p>
            <h2 className="text-3xl font-bold leading-snug tracking-tight text-balance md:text-4xl">
              우리 회사에 맞는 AI,
              <br />
              함께 찾아보세요.
            </h2>
            <p className="max-w-md leading-relaxed text-muted-foreground text-pretty">
              문의를 남겨주시면 영업일 기준 1일 이내에 담당 컨설턴트가 연락드립니다. 첫 상담은 무료입니다.
            </p>
          </div>

          <ul className="flex flex-col gap-3 text-sm">
            <li className="flex items-center gap-3">
              <Mail className="size-4 text-primary" aria-hidden="true" />
              contact@securus.ai
            </li>
            <li className="flex items-center gap-3">
              <Phone className="size-4 text-primary" aria-hidden="true" />
              02-1234-5678
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="size-4 text-primary" aria-hidden="true" />
              서울특별시 강남구 테헤란로 427, 12층
            </li>
          </ul>
        </div>

        <div className="rounded-2xl bg-card p-6 md:p-8">
          {submitted ? (
            <div role="status" className="flex h-full min-h-80 flex-col items-center justify-center gap-4 text-center">
              <span className="flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Check className="size-6" aria-hidden="true" />
              </span>
              <p className="text-lg font-bold">문의가 접수되었습니다</p>
              <p className="text-sm text-muted-foreground">빠르게 확인 후 연락드리겠습니다.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setSubmitted(true)
              }}
              className="flex flex-col gap-4"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm font-medium">
                  이름
                  <input required name="name" autoComplete="name" placeholder="홍길동" className={inputClass} />
                </label>
                <label className="flex flex-col gap-2 text-sm font-medium">
                  회사명
                  <input required name="company" autoComplete="organization" placeholder="시큐러스" className={inputClass} />
                </label>
              </div>
              <label className="flex flex-col gap-2 text-sm font-medium">
                이메일
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="name@company.com"
                  className={inputClass}
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium">
                관심 분야
                <select name="interest" defaultValue="Securus Guard" className={inputClass}>
                  <option>Securus Guard</option>
                  <option>Securus Agent</option>
                  <option>Securus Vision</option>
                  <option>AI 전환 컨설팅</option>
                </select>
              </label>
              <label className="flex flex-col gap-2 text-sm font-medium">
                문의 내용
                <textarea
                  name="message"
                  rows={4}
                  placeholder="현재 고민하고 계신 내용을 자유롭게 적어주세요."
                  className="w-full resize-none rounded-xl border border-input bg-background p-4 text-sm leading-relaxed outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </label>
              <button
                type="submit"
                className="mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                문의 보내기
                <ArrowRight className="size-4" aria-hidden="true" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
