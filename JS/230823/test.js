console.log('11');
console.error('22');
console.table({a:1, b:2});

//'use strict' //엄격모드에서 실행
// 변수
var a = 3; //재할당o & 초기화필요x & 중복선언o & 코드블록{}밖 접근o
let b = 4; //재할당o & 초기화필요x & 중복선언x & 코드블록{}밖 접근x 
const c = 5; //재할당x & 초기화필요o & 중복선언x & 코드블록{}밖 접근x

//타입 - 원시타입 / 참조타입
//원시타입 - 값 변경x, 값에 의한 전달(참조x 값 자체가 저장)
//문자열//
let str1 = 'hello';
let str2 = str1;
console.log(str2);
str1 = 'world';
console.log(str1, str2); //str2는 안바뀜

let myPassword = 'qwer123!@#';
console.log(myPassword.length); //length속성

let 불멸자 = 'immortal';
불멸자[0] = 'l';
console.log(불멸자); //immortal
불멸자.toUpperCase();
console.log(불멸자); //immortal

let lyrics1 = '광야로 걸어가 ';
let lyrics2 = '알아 네 home groud';
'광야로 걸어가 알아 네 home ground' === lyrics1 + lyrics2; //true

let text = "Next level 제껴라 제껴라 제껴라";
console.log(text.indexOf('level')); //5
console.log(text.indexOf('제껴라')); //11
console.log(text.indexOf('제껴라', 16)); //19
console.log(text.indexOf('광야')); //-1(없음)

//뒤부터검색 - 검색순서만 바뀌고 인덱스번호는 안바뀜
console.log(text.lastIndexOf('level')); //5
console.log(text.lastIndexOf('제껴라')); //19
console.log(text.lastIndexOf('제껴라', 16)); //15
console.log(text.lastIndexOf('광야')); //-1

//match(): 정규표현식을 인자로 받아 일치문자열을 배열로반환
//g플래그-> global (일치하는 모든 값 찾음)
console.log("Naevis 우리 ae, ae들을 불러봐".match(/ae/)); //["ae"]
console.log("Naevis 우리 ae, ae들을 불러봐".match(/ae/g)); //["ae","ae","ae"]
console.log("Naevis 우리 ae, ae들을 불러봐".match(/[a-zA-Z]\w+/g)); //["Naevis","ae","ae"] 영어 중 하나 이상의 문자로 이루어진 단어 찾음

console.log("제껴라 제껴라 제껴라 huh!".replace("제껴라", "check it out")); // "check it out 제껴라 제껴라 huh!"
console.log("제껴라 제껴라 제껴라 huh!".replace("제껴라/g", "check it out")); // "check it out check it out check it out huh!"

console.log("중심을 잃고 목소리도 잃고".slice(7)); // "목소리도 잃고"
console.log("중심을 잃고 목소리도 잃고".slice(7, 14)); // "목소리도 잃고"
console.log("중심을 잃고 목소리도 잃고".slice(-3)); // " 잃고"
console.log("중심을 잃고 목소리도 잃고".slice(-3, 13)); // " 잃"

console.log("La la la la la la".split(" ")); // ["La", "la", "la", "la", "la", "la"]
console.log("La la la la la la".split("")); // ["L", "a", " ", "l", "a", " ", "l", "a", " ", "l", "a", " ", "l", "a", " ", "l", "a"]
console.log("La-la-la-la-la-la".split("-", 3)); // ["La", "la", "la"]

console.log("What's the name? Black mamba".toLowerCase());
// "what's the name? black mamba"
console.log("Watch me while I make it out".toUpperCase());
// "WATCH ME WHILE I MAKE IT OUT"

console.log("         abc  ".trim());
// "abc"

let str = '99'
console.log(str.padStart(5, '0')); // '99'를 5자리 채웁니다. 부족한 부분은 0으로 채웁니다.
// "00099"

//숫자형//
// 산술연산
console.log(`10 + 3 = ${10 + 3}`)
console.log(`10 - 3 = ${10 - 3}`)
console.log(`10 / 3 = ${10 / 3}`)
console.log(`10 * 3 = ${10 * 3}`)
console.log(`10 ** 3 = ${10 ** 3}`) // 10의 3승
console.log(`4 ** 0.5 = ${4 ** 0.5}`) // 4의 제곱근
console.log(`10 % 3 = ${10 % 3}`) // 나머지

// 단항연산 
console.log(-2)
console.log(-(-2))
// console.log(--2) // error
console.log(+4)
console.log(+'4') // 숫자4

// 증감연산자
let num = 3; // 증감연산자는 할당연산자를 통해 할당된 값에만 사용 가능합니다.
console.log("증감연산 : ", ++num); // 4
console.log("증감연산 : ", num++); // 5 (출력하고 나서 연산을 합니다!)
console.log("증감연산 : ", --num); // 4
console.log("증감연산 : ", num--); // 3 (출력하고 나서 연산을 합니다!)

// 비교연산자(값은 boolean으로 반환됩니다.)
console.log("비교연산 : ", 2 > 3);
console.log("비교연산 : ", 2 >= 3);
console.log("비교연산 : ", 2 < 3);
console.log("비교연산 : ", 2 <= 3);
console.log("비교연산 : ", 2 == 3); 
console.log("비교연산 : ", 2 === 3);
// 등호 2개를 권하지 않습니다. 실무에서는 등호 3개를 사용하시길 권해드립니다.
console.log("비교연산 : ", 2 == '2'); // 다른 언어에서는 false, js에서는 true
console.log("비교연산 : ", 2 === '2'); // 다른 언어에서 이런 문법이 없고, js에서는 false

//----------------------------------------------------------------//

//Boolean//
let x = 5;
let y = 10;
let z = 5;

console.log(x > y); // false
console.log(x < y); // true
console.log(x >= z); // true
console.log(x <= z); // true
console.log(x === z); // true
console.log(x !== y); // true