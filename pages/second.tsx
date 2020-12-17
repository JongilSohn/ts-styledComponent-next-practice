import React from 'react';

function Second(props) {
  return (
    <div>
      <div>
        {/* 화면에 표시하는 데이터는 state로 관리하기 */}
        {/* 다시 불러오기 버튼은 ajax 통신을 해서 state 업데이트 */}
        <button>
          최신 데이터 불러오기
        </button>

        {/* 삭제 요청을 ajax로 요청 */}
        {/* 요청이 성공하면 스크립트를 통해 페이지 이동 */}
        {/* Route.goBack(), Route.push() */}
        <button>
          데이터 삭제하기
        </button>
      </div>
    </div>
  )
}