// unknown 사용자가 어떤 값을 입력할지 모를 때
// unknown은 어떤 값이든 들어올 수 있으니 엄격하게 검사해야 된다.
let userInput: unknown;
let useName: string;

userInput = 5;
userInput = "lee";
// useName = userInput; // 'unknown' 형식은 'string' 형식에 할당할 수 없습니다.

// useName = userInput; // error

// 검사해야 한다.
if (typeof userInput === "string") {
  useName = userInput;
}

console.log(useName);
// unknown과 any는 다르다.
// unknown은 any보다 제한적이다.

// never
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("에러 발생!", 500);
