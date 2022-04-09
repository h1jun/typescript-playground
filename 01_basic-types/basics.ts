function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

// const number1 = 5;
let number1: number;
number1 = 5; // 타입과 다른 값을 입력하면 에러 발생

const number2 = 2.8;
const printResult = true;

// const resultPhrase = "결과 : ";
let resultPhrase = "결과 : "; // let resultPhrase: string으로 타입추론이 이루어진다.

add(number1, number2, printResult, resultPhrase);

/*
- TS는 컴파일 과정에서 에러를 검출해준다.
- JS는 동적 타입이다. 중간에 타입이 바뀔 수 있다.
- 반면 TS는 정적 타입이다. 중간에 타입 변경이 불가능하다.
*/
