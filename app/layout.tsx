import type { Metadata } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import './globals.css'

const notoSans = Noto_Sans_KR({ subsets: ['latin'], variable: '--font-noto-sans-kr', display: 'swap' })

export const metadata: Metadata = {
  title: '온발 | 매일 걷는 사람을 위한 편안함',
  description: '발에 꼭 맞는 편안함을 만드는 기능성 깔창 브랜드 온발',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body className={notoSans.variable}>{children}</body></html>
}
