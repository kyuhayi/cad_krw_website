import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CAD/KRW 환율 분석 및 전망",
  description: "캐나다 달러 대비 원화 환율 분석 및 전망 정보를 제공합니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <header className="bg-blue-800 text-white p-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">CAD/KRW 환율 분석</h1>
            <nav>
              <ul className="flex space-x-6">
                <li><a href="/" className="hover:text-blue-200">홈</a></li>
                <li><a href="/analysis" className="hover:text-blue-200">상세 분석</a></li>
                <li><a href="/charts" className="hover:text-blue-200">차트</a></li>
                <li><a href="/recommendation" className="hover:text-blue-200">추천</a></li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="container mx-auto py-8 px-4">{children}</main>
        <footer className="bg-gray-100 p-6 mt-12">
          <div className="container mx-auto text-center text-gray-600">
            <p>© 2025 CAD/KRW 환율 분석 | 데이터 기준일: 2025년 4월 2일</p>
            <p className="mt-2 text-sm">본 웹사이트의 정보는 참고용으로만 제공되며, 투자 결정 시 추가적인 정보와 전문가의 조언을 참고하시기 바랍니다.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
