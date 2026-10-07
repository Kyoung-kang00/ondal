import { AuthPage, CartPage, NoticeDetail, NotFoundStore, ProductDetail, ProductsPage, SimplePage, SupportPage } from '@/components/store-pages'

export default async function StoreRoute({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params
  const path = slug.join('/')

  if (path === 'login') return <AuthPage mode="login" />
  if (path === 'signup') return <AuthPage mode="signup" />
  if (path === 'find-id') return <AuthPage mode="find-id" />
  if (path === 'find-password') return <AuthPage mode="find-password" />
  if (path === 'products') return <ProductsPage />
  if (slug[0] === 'products' && slug[1]) return <ProductDetail id={slug[1]} />
  if (path === 'cart') return <CartPage />
  if (path === 'order') return <SimplePage kind="order" />
  if (path === 'order-complete') return <SimplePage kind="order-complete" />
  if (path === 'mypage') return <SimplePage kind="mypage" />
  if (path === 'mypage/orders') return <SimplePage kind="orders" />
  if (path === 'mypage/wishlist') return <SimplePage kind="wishlist" />
  if (path === 'mypage/recent') return <SimplePage kind="recent" />
  if (path === 'mypage/reviews') return <SimplePage kind="reviews" />
  if (path === 'mypage/profile') return <SimplePage kind="profile" />
  if (path === 'mypage/addresses') return <SimplePage kind="addresses" />
  if (path === 'support') return <SupportPage />
  if (path === 'support/faq') return <SupportPage sub="faq" />
  if (path === 'support/notice') return <SupportPage sub="notice" />
  if (slug[0] === 'support' && slug[1] === 'notice' && slug[2]) return <NoticeDetail />
  return <NotFoundStore />
}
