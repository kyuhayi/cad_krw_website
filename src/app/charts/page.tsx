import React from 'react';
import Image from 'next/image';

export default function Charts() {
  return (
    <div className="space-y-10">
      {/* 헤더 섹션 */}
      <section className="text-center py-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
        <h1 className="text-3xl font-bold text-blue-800 mb-3">CAD/KRW 환율 차트</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          캐나다 달러 대비 원화 환율의 추세, 예측, 경제 지표 비교 등 다양한 시각화 자료를 제공합니다.
        </p>
      </section>

      {/* 차트 섹션 */}
      <section className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">향후 1개월 환율 예측</h2>
        <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
          <Image 
            src="/charts/one_month_forecast.png" 
            alt="향후 1개월 환율 예측" 
            width={800} 
            height={450} 
            className="rounded-lg"
          />
        </div>
        <div className="bg-gray-50 p-4 rounded-md">
          <h3 className="font-medium text-gray-800 mb-2">차트 설명</h3>
          <p className="text-gray-600">
            이 차트는 최근 3개월 CAD/KRW 환율 데이터를 기반으로 향후 1개월 환율을 예측한 결과입니다.
            파란색 선은 실제 환율을, 빨간색 점선은 예측 환율을 나타냅니다.
            현재 환율 1020.20 KRW에서 한 달 후 1019.26 KRW로 소폭 하락할 것으로 예상됩니다.
          </p>
        </div>
      </section>

      <section className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">환율 시나리오 분석</h2>
        <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
          <Image 
            src="/charts/scenario_analysis.png" 
            alt="환율 시나리오 분석" 
            width={800} 
            height={450} 
            className="rounded-lg"
          />
        </div>
        <div className="bg-gray-50 p-4 rounded-md">
          <h3 className="font-medium text-gray-800 mb-2">차트 설명</h3>
          <p className="text-gray-600">
            이 차트는 CAD/KRW 환율의 낙관적, 기본, 비관적 시나리오를 보여줍니다.
            기본 시나리오에서는 환율이 소폭 하락할 것으로 예상되지만,
            글로벌 경제 상황과 원자재 가격 변동에 따라 다양한 시나리오가 가능합니다.
          </p>
        </div>
      </section>

      <section className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">경제 지표 비교</h2>
        <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
          <Image 
            src="/charts/economic_indicators_comparison.png" 
            alt="경제 지표 비교" 
            width={800} 
            height={450} 
            className="rounded-lg"
          />
        </div>
        <div className="bg-gray-50 p-4 rounded-md">
          <h3 className="font-medium text-gray-800 mb-2">차트 설명</h3>
          <p className="text-gray-600">
            이 차트는 캐나다와 한국의 주요 경제 지표를 비교한 것입니다.
            캐나다의 GDP 성장률(2.4%)이 한국(0.1%)보다 높고, 물가상승률도 캐나다(2.6%)가 한국(0.3%)보다 높습니다.
            이러한 경제 지표 차이는 환율 변동의 주요 요인 중 하나입니다.
          </p>
        </div>
      </section>

      <section className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">환율 영향 요인</h2>
        <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
          <Image 
            src="/charts/exchange_rate_factors.png" 
            alt="환율 영향 요인" 
            width={800} 
            height={450} 
            className="rounded-lg"
          />
        </div>
        <div className="bg-gray-50 p-4 rounded-md">
          <h3 className="font-medium text-gray-800 mb-2">차트 설명</h3>
          <p className="text-gray-600">
            이 차트는 CAD/KRW 환율에 영향을 미치는 주요 요인의 중요도를 나타냅니다.
            금리 차이, 원자재 가격, 무역 관계 등이 환율에 큰 영향을 미치는 요인으로 분석되었습니다.
            특히 캐나다는 원자재 수출국으로서 원자재 가격 변동에 민감하게 반응합니다.
          </p>
        </div>
      </section>

      <section className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">매수/매도 신호</h2>
        <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
          <Image 
            src="/charts/buy_sell_signal.png" 
            alt="매수/매도 신호" 
            width={800} 
            height={450} 
            className="rounded-lg"
          />
        </div>
        <div className="bg-gray-50 p-4 rounded-md">
          <h3 className="font-medium text-gray-800 mb-2">차트 설명</h3>
          <p className="text-gray-600">
            이 차트는 현재 CAD/KRW 환율의 매수/매도 신호를 나타냅니다.
            분석 결과에 따르면 현재 환율은 1020.20 KRW이고, 한 달 후 예상 환율은 1019.26 KRW로
            소폭 하락할 것으로 예측되어 매도를 추천합니다.
          </p>
        </div>
      </section>

      {/* 다음 페이지 링크 */}
      <div className="flex justify-between">
        <a href="/analysis" className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          상세 분석
        </a>
        <a href="/recommendation" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          추천 보기
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  );
}
