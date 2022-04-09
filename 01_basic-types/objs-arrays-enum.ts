// 객체, 배열, 튜플, Enum
// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "Kim",
//   age: 40,
// };

/*
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // 튜플 타입
} = {
  name: "Kim",
  age: 40,
  hobbies: ["Sports", "Cooking"], //  hobbies: string[]으로 타입 추론
  role: [2, "author"],
};
*/

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

// This is better
const person = {
  name: "Kim",
  age: 40,
  hobbies: ["Sports", "Cooking"], //  hobbies: string[]으로 타입 추론
  role: Role.ADMIN,
};

// 튜플, 고정된 길이의 배열
// person.role.push("admin"); // push는 튜플에서 에러를 검출하지 못 한다.
// person.role = [0, "admin"];

let favoriteActivities: string[]; // 타입 지정
favoriteActivities = ["스포츠"];

console.log(person.name);

for (const hobby of person.hobbies) {
  // 지정해준 타입으로 hobby가 string으로 타입추론이 이루어져서 hobby.toUpperCase()를 사용할 수 있다.
  console.log(hobby.toUpperCase());
  //   console.log(hobby.map()); // Error
}

if (person.role === Role.AUTHOR) {
  console.log("is author");
}
