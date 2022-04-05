function add(n1: number, n2: number) {
  return n1 + n2;
}

const number1 = 5;
const number2 = 2.8;

const result = add(number1, number2);
console.log(result);

/*
- TS는 컴파일 과정에서 에러를 검출해준다.
- JS는 동적 타입이다. 중간에 타입이 바뀔 수 있다.
- 반면 TS는 정적 타입이다. 중간에 타입 변경이 불가능하다.
*/
