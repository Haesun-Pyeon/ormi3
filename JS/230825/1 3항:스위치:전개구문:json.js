//삼항연산자: 조건식 ? true일때 : false일때
//if문과 다른점은 결과값이 남는다.
let result = true ? "true입니다." : "false입니다.";
console.log(result);

result = true && "true일때값";
console.log(result); //true일때값
result = false && "false일때값";
console.log(result); //false
result = false || "값";
console.log(result); //값
result = true || "값";
console.log(result); //true

//let result2 = num.filter()[필터 결과값 배열].reduce((누적값, 다음인덱스값) => 누적값 + 다음인덱스값, 0)

//[1,2,3,4,5].reduce(함수) -> 초기값이 없으므로 4번 실행됨

switch (2) {
  case 4:
    console.log("4입니다");
    break; //break가 없으면 그 이후가 계속 실행된다.
  case 2:
    console.log("2입니다");
    break;
  default:
    console.log("이상한 값입니다.");
    break;
}

let price = 0;
let menu = "카페라떼"; // 메뉴를 바꿔보세요!

switch (menu) {
  case "아메리카노":
    price = 4000;
  case "카페라떼":
    price = 5000;
  case "바닐라라떼":
    price = 6000;
  case "콜드브루":
    price = 5500;
  case "딸기라떼":
    price = 7000;
  case "레몬에이드":
    price = 6500;
  case "에스프레소":
    price = 3500;
  case "루이보스":
    price = 4500;
  default:
    console.log("메뉴를 정확히 입력하세요.");
}
console.log(price);
//break가 없어서 카페라떼 이후가 다 실행됨.
/* 여러 항목의 실행할 코드가 같을경우
case '아메리카노':
case '카페라떼' :
  price = 4000;
  break;
이런식으로 쓸수도 있다.*/

//배열의 전개구문(spread)
const 과일들 = ["사과", "파인애플", "수박"];
const 생선들 = ["조기", "갈치", "다금바리"];
const 합치면 = [...과일들, ...생선들];

console.log(합치면); //[ '사과', '파인애플', '수박', '조기', '갈치', '다금바리' ]
console.log(...과일들); //사과 파인애플 수박

const 함수 = (a, b, c) => console.log("과일이", a, b, c, "들이 싱싱해요");
함수(...과일들); //과일이 사과 파인애플 수박 들이 싱싱해요

//객체의 전개구문
const 위니브1 = { 개리: 1, 빙키: 2 };
const 위니브2 = { 라이캣: 3 };
const 위니브3 = { ...위니브1, ...위니브2 };

console.log(위니브3); //{ '개리': 1, '빙키': 2, '라이캣': 3 }
//함수(...위니브)는 안됨 - 객체라 반복성 있는게 아니라서

//디스트럭쳐링 destructuring 구조분해할당
const categories = { food1: "과일", food2: "채소", food3: "육류" };
const { food1, food2, food3, food4 } = categories;
console.log(food1, food2, food3, food4); //과일, 채소, 육류, undefined
const { food1: fruit } = categories; //food1을 fruit으로 바꿔서 가져올때
console.log(fruit); //과일

const arr = [1, 2, 3];
const [a, b, c] = arr; //배열은 인덱스에 맞춰서 매칭됨
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

//JSON
//JSON.parse(): JSON문자열->자바스크립트 객체 변환
//JSON.stringify() : 자바스크립트 객체->JSON문자열 변환
const json1 = '{"result":true, "count":42}';
const obj1 = JSON.parse(json1);
console.log(obj1); //{ result: true, count: 42 }

const json2 = "[1, 2, 3]";
const obj2 = JSON.parse(json2);
console.log(obj2); //[ 1, 2, 3 ]

const json3 = "[1, 2, [1, 2, 3]]";
const obj3 = JSON.parse(json3);
console.log(obj3); //[ 1, 2, [ 1, 2, 3 ] ]

const obj4 = { result: true, count: 42 };
const json4 = JSON.stringify(obj4);
console.log(json4); //{"result":true,"count":42}
