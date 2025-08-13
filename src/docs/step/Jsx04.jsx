import React from 'react';
// JSX는 if문을 사용할 수 없기 때문에 삼항연산자를 지원한다.
// return 이 됐을 때 if를 사용할 수 없음
// 조건식 ? 참일 때 랜더링할 JSX : 거짓을 때 랜더링 할 JSX
// 조건식이 && 참일 때 랜더링할 JSX : 거짓을 때 랜더링 할 JSX
// && 연산자는 앞의 조건식이 false라면 뒤를 실행하니 않으며, false라는 값은 랜더링 되지 않는다.

const Jsx04 = () => {
  const name = undefined || "홍길동"
  const login = true
  return (
    <div>
      {login ? (
        <>{name}님 환영합니다. </>
      ) : (
        <>로그인 실패!</>
      )}
    </div>
  );
};

export default Jsx04;