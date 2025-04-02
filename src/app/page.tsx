import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // 현재 환율 및 예측 정보 (실제 배포 시에는 API 또는 데이터 파일에서 가져올 수 있음)
  const currentRate = 1020.20;
  const predictedRate = 1019.26;
  const changeRate = -0.09;
  const recommendation: "매수" | "매도" = "매도";

  return (
    <div className="space-y-12">
      {/* 헤더 섹션 */}
      <section className="text-center py-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">캐나다 달러 대비 원화 환율 분석</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          최신 데이터와 경제적 요인을 분석하여 CAD/KRW 환율의 현재 상황과 향후 전망을 제공합니다.
        </p>
      </section>

      {/* 현재 환율 정보 */}
      <section className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">현재 환율 정보</h2>
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-600">현재 CAD/KRW 환율:</span>
            <span className="text-3xl font-bold text-blue-600">{currentRate.toFixed(2)} KRW</span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-600">한 달 후 예상 환율:</span>
            <span className="text-2xl font-semibold text-indigo-600">{predictedRate.toFixed(2)} KRW</span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-600">예상 변화율:</span>
            <span className={`text-xl font-semibold ${changeRate >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {changeRate >= 0 ? '+' : ''}{changeRate.toFixed(2)}%
            </span>
          </div>
          <div className="mt-8 p-4 bg-gray-50 rounded-md">
            <div className="flex justify-between items-center">
              <span className="text-gray-700 font-medium">추천:</span>
              <span className={`text-xl font-bold px-4 py-1 rounded-full ${recommendation === "매수" ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {recommendation}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">주요 분석 결과</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-gray-800">경제 성장률 차이</p>
                <p className="text-gray-600">캐나다 GDP 성장률(2.4%)이 한국(0.1%)보다 높음</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-gray-800">금리 차이</p>
                <p className="text-gray-600">캐나다 금리(2.75%)가 한국보다 높은 수준</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-gray-800">기술적 지표</p>
                <p className="text-gray-600">현재 환율이 20일 이동평균선보다 높은 수준에 위치</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-blue-100 p-2 rounded-full mr-3 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-gray-800">글로벌 요인</p>
                <p className="text-gray-600">원자재 가격 변동과 글로벌 경제 불확실성이 환율에 영향</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* 차트 미리보기 섹션 */}
      <section className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">환율 예측 차트</h2>
        <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
          <Image 
            src="/charts/one_month_forecast.png" 
            alt="향후 1개월 환율 예측" 
            width={800} 
            height={450} 
            className="rounded-lg"
          />
        </div>
        <div className="text-center mt-4">
          <Link href="/charts" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            모든 차트 보기
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </section>

      {/* 페이지 링크 섹션 */}
      <section className="grid md:grid-cols-3 gap-6">
        <Link href="/analysis" className="block bg-gradient-to-br from-blue-500 to-blue-700 text-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-2">상세 분석 보기</h3>
          <p>환율 추세와 경제적 요인에 대한 심층 분석 결과를 확인하세요.</p>
        </Link>
        <Link href="/charts" className="block bg-gradient-to-br from-indigo-500 to-indigo-700 text-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-2">차트 보기</h3>
          <p>환율 추세, 경제 지표 비교, 예측 시나리오 등 다양한 차트를 확인하세요.</p>
        </Link>
        <Link href="/recommendation" className="block bg-gradient-to-br from-purple-500 to-purple-700 text-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-2">매수/매도 추천</h3>
          <p>데이터 기반의 매수/매도 추천과 그 근거를 확인하세요.</p>
        </Link>
      </section>

      {/* 데이터 출처 섹션 */}
      <section className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">데이터 출처</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-600">
          <li>Trading Economics (https://ko.tradingeconomics.com/canada/indicators)</li>
          <li>한국은행 경제통계시스템 (https://ecos.bok.or.kr/)</li>
          <li>EBC Financial Group (https://www.ebc.com/kr/forex/142076.html)</li>
          <li>KDI 경제동향 (https://www.kdi.re.kr/research/monTrends)</li>
        </ul>
        <p className="mt-4 text-sm text-gray-500">데이터 기준일: 2025년 4월 2일</p>
      </section>
    </div>
  );
}
