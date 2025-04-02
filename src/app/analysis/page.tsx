import React from 'react';

export default function Analysis() {
  return (
    <div className="space-y-10">
      {/* 헤더 섹션 */}
      <section className="text-center py-8 bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg">
        <h1 className="text-3xl font-bold text-blue-800 mb-3">CAD/KRW 환율 상세 분석</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          캐나다 달러 대비 원화 환율의 역사적 추세와 영향 요인에 대한 상세 분석 결과입니다.
        </p>
      </section>

      {/* 역사적 추세 분석 */}
      <section className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">역사적 추세 분석</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium text-gray-700 mb-3">최근 1년 환율 동향</h3>
          <p className="text-gray-600 mb-4">
            최근 1년간 CAD/KRW 환율은 변동성을 보이며 전반적으로 상승 추세를 유지했습니다. 
            특히 최근 6개월간은 뚜렷한 상승세를 보였으나, 최근 데이터와 경제적 요인을 종합적으로 
            분석한 결과 향후 1개월간은 소폭 하락할 것으로 예상됩니다.
          </p>
          <div className="bg-gray-100 p-4 rounded-md">
            <ul className="list-disc pl-5 space-y-2">
              <li>1년 최저: 약 최저치 KRW</li>
              <li>1년 최고: 약 최고치 KRW</li>
              <li>1년 평균: 약 평균치 KRW</li>
              <li>현재 환율: 1020.20 KRW</li>
            </ul>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium text-gray-700 mb-3">기술적 지표</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-md">
              <h4 className="font-medium text-gray-800 mb-2">이동평균선</h4>
              <p className="text-gray-600">
                현재 환율은 20일 이동평균선보다 높은 수준에 위치하고 있어 단기적으로는 상승세를 유지하고 있습니다.
                그러나 최근 데이터를 분석한 결과, 상승 모멘텀이 약화되고 있어 조정 가능성이 있습니다.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-md">
              <h4 className="font-medium text-gray-800 mb-2">변동성</h4>
              <p className="text-gray-600">
                일일 변동성은 평균 약 변동성%로, 비교적 안정적인 움직임을 보이고 있습니다.
                이는 급격한 환율 변동 가능성이 낮음을 시사합니다.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-medium text-gray-700 mb-3">추세 방향</h3>
          <p className="text-gray-600">
            선형 회귀 분석 결과, 최근 6개월간 CAD/KRW 환율은 상승 추세를 보였으나,
            최근 데이터에서는 상승 모멘텀이 약화되는 신호가 관찰됩니다.
            이는 단기적으로 소폭 하락 또는 횡보할 가능성을 시사합니다.
          </p>
        </div>
      </section>

      {/* 경제적 요인 분석 */}
      <section className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">환율에 영향을 미치는 경제적 요인</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-medium text-gray-700 mb-4">캐나다 경제 지표</h3>
            <table className="w-full border-collapse">
              <tbody>
                <tr className="border-b">
                  <td className="py-2 text-gray-600">GDP 성장률</td>
                  <td className="py-2 font-medium text-right">2.4%</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 text-gray-600">실업률</td>
                  <td className="py-2 font-medium text-right">6.6%</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 text-gray-600">물가상승률</td>
                  <td className="py-2 font-medium text-right">2.6%</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 text-gray-600">금리</td>
                  <td className="py-2 font-medium text-right">2.75%</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 text-gray-600">무역수지</td>
                  <td className="py-2 font-medium text-right">3970 CAD 백만</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 text-gray-600">기업신뢰지수</td>
                  <td className="py-2 font-medium text-right">55.3</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 text-gray-600">제조업 PMI</td>
                  <td className="py-2 font-medium text-right">46.3</td>
                </tr>
                <tr>
                  <td className="py-2 text-gray-600">소비자신뢰지수</td>
                  <td className="py-2 font-medium text-right">48.8</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div>
            <h3 className="text-xl font-medium text-gray-700 mb-4">한국 경제 지표</h3>
            <table className="w-full border-collapse">
              <tbody>
                <tr className="border-b">
                  <td className="py-2 text-gray-600">GDP 성장률</td>
                  <td className="py-2 font-medium text-right">0.1%</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 text-gray-600">소비자물가</td>
                  <td className="py-2 font-medium text-right">0.3%</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 text-gray-600">생산자물가</td>
                  <td className="py-2 font-medium text-right">0.0%</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 text-gray-600">경상수지</td>
                  <td className="py-2 font-medium text-right">29.4 억$</td>
                </tr>
                <tr>
                  <td className="py-2 text-gray-600">통화량</td>
                  <td className="py-2 font-medium text-right">0.5%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h3 className="text-xl font-medium text-gray-700 mb-4">주요 영향 요인</h3>
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-md">
            <h4 className="font-medium text-blue-800 mb-1">금리 차이</h4>
            <p className="text-gray-700">
              캐나다의 금리(2.75%)가 한국보다 높아 캐나다 달러 강세 요인으로 작용합니다.
              일반적으로 금리가 높은 국가의 통화는 투자 매력도가 높아 강세를 보이는 경향이 있습니다.
            </p>
          </div>
          
          <div className="bg-indigo-50 p-4 rounded-md">
            <h4 className="font-medium text-indigo-800 mb-1">경제 성장률 차이</h4>
            <p className="text-gray-700">
              캐나다의 GDP 성장률(2.4%)이 한국(0.1%)보다 높아 캐나다 달러 강세 요인으로 작용합니다.
              경제 성장이 활발한 국가의 통화는 일반적으로 강세를 보입니다.
            </p>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-md">
            <h4 className="font-medium text-purple-800 mb-1">원자재 가격</h4>
            <p className="text-gray-700">
              캐나다는 석유 등 원자재 수출국으로, 원자재 가격 변동에 민감합니다.
              원자재 가격이 상승하면 캐나다 달러가 강세를 보이는 경향이 있습니다.
            </p>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-md">
            <h4 className="font-medium text-blue-800 mb-1">무역 관계</h4>
            <p className="text-gray-700">
              캐나다는 미국과의 무역 의존도가 높아 미국 경제 상황에 영향을 받습니다.
              미국 경제가 호조를 보이면 캐나다 달러도 강세를 보이는 경향이 있습니다.
            </p>
          </div>
          
          <div className="bg-indigo-50 p-4 rounded-md">
            <h4 className="font-medium text-indigo-800 mb-1">중앙은행 정책</h4>
            <p className="text-gray-700">
              양국 중앙은행의 통화 정책 결정이 환율에 영향을 미칩니다.
              금리 인상 또는 인하 결정, 양적 완화 정책 등이 환율 변동의 주요 요인입니다.
            </p>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-md">
            <h4 className="font-medium text-purple-800 mb-1">글로벌 경제 불확실성</h4>
            <p className="text-gray-700">
              글로벌 경제 상황에 따른 안전자산 선호 현상이 환율에 영향을 미칩니다.
              경제 불확실성이 높아지면 안전자산으로 여겨지는 통화가 강세를 보이는 경향이 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* 최근 동향 */}
      <section className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">최근 동향</h2>
        <ul className="space-y-4">
          <li className="flex items-start">
            <div className="bg-gray-200 p-2 rounded-full mr-3 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-gray-700">캐나다 경제는 건설업 부진과 수출 여건 악화로 경기 하방 위험이 확대되는 모습</p>
          </li>
          <li className="flex items-start">
            <div className="bg-gray-200 p-2 rounded-full mr-3 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-gray-700">제조업생산은 반도체를 중심으로 개선세 유지</p>
          </li>
          <li className="flex items-start">
            <div className="bg-gray-200 p-2 rounded-full mr-3 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-gray-700">한국 경제는 건설업 부진과 수출 여건 악화로 경기 하방 위험이 확대되는 모습</p>
          </li>
          <li className="flex items-start">
            <div className="bg-gray-200 p-2 rounded-full mr-3 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-gray-700">캐나다 달러는 최근 6개월간 상승 추세를 보이고 있음</p>
          </li>
          <li className="flex items-start">
            <div className="bg-gray-200 p-2 rounded-full mr-3 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-gray-700">한 달 후 예상 환율은 현재보다 소폭 하락한 1019.26 KRW로 예측됨</p>
          </li>
        </ul>
      </section>

      {/* 다음 페이지 링크 */}
      <div className="flex justify-between">
        <a href="/" className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          홈으로
        </a>
        <a href="/charts" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          차트 보기
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  );
}
