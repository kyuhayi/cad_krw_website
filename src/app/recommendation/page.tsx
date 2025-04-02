import React from 'react';
import Image from 'next/image';

export default function Recommendation() {
  // 현재 환율 및 예측 정보 (실제 배포 시에는 API 또는 데이터 파일에서 가져올 수 있음)
  const currentRate = 1020.20;
  const predictedRate = 1019.26;
  const changeRate = -0.09;
  const recommendation = "매도";

  return (
    <div className="space-y-10">
      {/* 헤더 섹션 */}
      <section className="text-center py-8 bg-gradient-to-r from-red-50 to-blue-50 rounded-lg">
        <h1 className="text-3xl font-bold text-blue-800 mb-3">CAD/KRW 환율 매수/매도 추천</h1>
        <p className="text-gray-600 max-w-3xl mx-auto">
          데이터 기반 분석을 통한 캐나다 달러 대비 원화 환율의 매수/매도 추천 정보를 제공합니다.
        </p>
      </section>

      {/* 추천 섹션 */}
      <section className="bg-white p-8 rounded-lg shadow-md">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">최종 추천</h2>
          <div className={`inline-block px-8 py-4 rounded-full text-3xl font-bold ${recommendation === '매수' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {recommendation}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium text-gray-800 mb-4">현재 환율 정보</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">현재 CAD/KRW 환율:</span>
                <span className="text-xl font-semibold">{currentRate.toFixed(2)} KRW</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">한 달 후 예상 환율:</span>
                <span className="text-xl font-semibold">{predictedRate.toFixed(2)} KRW</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">예상 변화율:</span>
                <span className={`text-xl font-semibold ${changeRate >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {changeRate >= 0 ? '+' : ''}{changeRate.toFixed(2)}%
                </span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium text-gray-800 mb-4">매수/매도 신호</h3>
            <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
              <Image 
                src="/charts/buy_sell_signal.png" 
                alt="매수/매도 신호" 
                width={800} 
                height={450} 
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-medium text-gray-800 mb-4">추천 근거</h3>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 mb-4">
              CAD/KRW 환율은 현재 1020.20 KRW에서 한 달 후 1019.26 KRW로 소폭 하락할 것으로 예상됩니다.
              이는 -0.09%의 하락을 의미하며, 캐나다 달러의 약세가 예상됩니다.
            </p>
            <p className="text-gray-700 mb-4">
              비록 캐나다의 경제 지표(GDP 성장률, 물가상승률, 금리 등)가 한국보다 양호하지만,
              최근의 기술적 지표와 글로벌 경제 불확실성을 고려할 때 단기적으로는 소폭 하락이 예상됩니다.
            </p>
            <p className="text-gray-700">
              따라서 현재 시점에서 캐나다 달러 매도를 고려해볼 수 있습니다.
              다만, 변화율이 매우 작기 때문에 대규모 거래보다는 소규모 포지션 조정이 권장됩니다.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-medium text-gray-800 mb-4">리스크 요인</h3>
          <div className="space-y-4">
            <div className="bg-yellow-50 p-4 rounded-md border-l-4 border-yellow-400">
              <h4 className="font-medium text-yellow-800 mb-1">예상보다 높은 캐나다 경제 성장률</h4>
              <p className="text-gray-700">
                캐나다의 경제 성장률이 예상보다 높게 유지될 경우, 환율이 상승할 가능성이 있습니다.
              </p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-md border-l-4 border-yellow-400">
              <h4 className="font-medium text-yellow-800 mb-1">한국 경제 지표 악화</h4>
              <p className="text-gray-700">
                한국의 경제 지표가 더욱 악화될 경우, 원화 약세로 인해 환율이 상승할 가능성이 있습니다.
              </p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-md border-l-4 border-yellow-400">
              <h4 className="font-medium text-yellow-800 mb-1">글로벌 원자재 가격 상승</h4>
              <p className="text-gray-700">
                글로벌 원자재 가격이 상승할 경우, 원자재 수출국인 캐나다 달러가 강세를 보일 가능성이 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 시나리오 분석 */}
      <section className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">시나리오 분석</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-lg font-medium text-green-800 mb-3">낙관적 시나리오</h3>
            <p className="text-gray-700 mb-4">
              글로벌 경제 회복과 원자재 가격 상승으로 캐나다 달러 강세
            </p>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">예상 환율:</span>
              <span className="text-xl font-semibold text-green-700">약 1030 KRW</span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="text-gray-600">변화율:</span>
              <span className="text-lg font-semibold text-green-700">+0.96%</span>
            </div>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-medium text-blue-800 mb-3">기본 시나리오</h3>
            <p className="text-gray-700 mb-4">
              현재 추세가 유지되며 환율 소폭 하락
            </p>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">예상 환율:</span>
              <span className="text-xl font-semibold text-blue-700">1019.26 KRW</span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="text-gray-600">변화율:</span>
              <span className="text-lg font-semibold text-red-700">-0.09%</span>
            </div>
          </div>
          
          <div className="bg-red-50 p-6 rounded-lg">
            <h3 className="text-lg font-medium text-red-800 mb-3">비관적 시나리오</h3>
            <p className="text-gray-700 mb-4">
              글로벌 경제 불확실성 증가와 원자재 가격 하락으로 캐나다 달러 약세
            </p>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">예상 환율:</span>
              <span className="text-xl font-semibold text-red-700">약 1010 KRW</span>
            </div>
            <div className="flex justify-between items-center mt-2">
              <span className="text-gray-600">변화율:</span>
              <span className="text-lg font-semibold text-red-700">-1.00%</span>
            </div>
          </div>
        </div>
      </section>

      {/* 투자 전략 */}
      <section className="bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">투자 전략 제안</h2>
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium text-gray-800 mb-3">단기 전략 (1개월)</h3>
            <p className="text-gray-700">
              현재 환율이 소폭 하락할 것으로 예상되므로, 캐나다 달러 매도를 고려해볼 수 있습니다.
              다만, 변화율이 매우 작기 때문에 대규모 거래보다는 소규모 포지션 조정이 권장됩니다.
              또한, 글로벌 경제 상황과 원자재 가격 변동을 주시하며 전략을 조정할 필요가 있습니다.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium text-gray-800 mb-3">중장기 전략 (3-6개월)</h3>
            <p className="text-gray-700">
              중장기적으로는 캐나다의 경제 성장률과 금리 정책, 글로벌 원자재 가격 동향을 주시할 필요가 있습니다.
              캐나다의 경제 지표가 한국보다 양호하므로, 중장기적으로는 캐나다 달러가 강세를 보일 가능성이 있습니다.
              따라서, 단기적인 매도 후 중장기적으로는 매수 기회를 모색하는 전략을 고려해볼 수 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* 면책 조항 */}
      <section className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">면책 조항</h2>
        <p className="text-gray-600">
          본 웹사이트의 정보는 참고용으로만 제공되며, 투자 결정 시 추가적인 정보와 전문가의 조언을 참고하시기 바랍니다.
          환율은 다양한 요인에 의해 변동될 수 있으며, 예측과 다른 결과가 나타날 수 있습니다.
          본 웹사이트의 정보를 바탕으로 한 투자 결정에 대한 책임은 전적으로 사용자에게 있습니다.
        </p>
      </section>

      {/* 다음 페이지 링크 */}
      <div className="flex justify-between">
        <a href="/charts" className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          차트 보기
        </a>
        <a href="/" className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          홈으로
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  );
}
