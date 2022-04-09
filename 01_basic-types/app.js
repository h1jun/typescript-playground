function add(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var number1 = 5;
var number2 = 2.8;
var printResult = true;
var resultPhrase = "결과 : ";
add(number1, number2, printResult, resultPhrase);
/*
- TS는 컴파일 과정에서 에러를 검출해준다.
- JS는 동적 타입이다. 중간에 타입이 바뀔 수 있다.
- 반면 TS는 정적 타입이다. 중간에 타입 변경이 불가능하다.
*/
