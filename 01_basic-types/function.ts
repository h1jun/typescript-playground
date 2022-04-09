// 리턴타입은 타입을 추론하게 하는 게 좋다.
function add(n1: number, n2: number) {
  return n1 + n2;
}

// void 타입, 반환 타입이 없어서
function printResult(num: number): void {
  console.log("결과 : " + num);
}

// 함수의 매개변수로서 전달할 callback 함수
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(5, 12));

// 타입 기능을 하는 함수
let combineValues: (a: number, b: number) => number; // 상세하게 기술해줘야지 다른 상황에서 에러 검출 가능

combineValues = add;
// combineValues = printResult; // error
// combineValues = 5; // error

console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => {
  console.log(result);
});
