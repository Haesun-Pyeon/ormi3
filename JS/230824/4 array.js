let arr1 = [1, 2, 3];
let arr2 = arr1;
console.log(arr2); //[1,2,3]

arr1[0] = 10;
console.log(arr1);
console.log(arr2); //[10,2,3]

// 비교해보세요.
let value1 = 10;
let value2 = value1;
console.log(value2); //10

value1 = 20;
console.log(value2); //10

let val = 'hello!';
console.log(val.toUpperCase());

// 위의 코드가 내부적으로는 아래처럼 실행됩니다. 이것이 바로 autoboxing 입니다.

let val1 = 'hello!';
let temp = new String('hello!');
console.log(temp.toUpperCase());
temp = null;

//배열//
/* 여러가지 생성 방법
const arr = [];
const arr = [1, 2, 3];
const arr2 = new Array(4, 5, 6);
const arr2 = new Array(3);
*/
const arr = [1, 2, 3];
// 배열 안의 원소에 접근하기 위해서는 인덱스 번호를 이용합니다. 
console.log(arr[0]); // 1
console.log(arr[1]); // 2
console.log(arr[2]); // 3
console.log(arr[3]); // undefined

const myArray = [1, 2, 3, 4, 5];
console.log(myArray.length); // 5

//2차원배열
const arr2nd = [
  [1, 2],
  [3, 4],
  [5, 6]
];
console.log(arr2nd[0][0]); //1
console.log(arr2nd[2][1]); //6

//3차원배열
const arr3rd = [
  [
    [1, 2],
    [3, 4]
  ],
  [
    [5, 6],
    [7, 8]
  ]
];
console.log(arr3rd[0][1][0]); //3
console.log(arr3rd[1][0][1]); //6

//push(): 배열의 끝에 요소 추가, 길이 리턴
//pop(): 배열의 마지막 요소 꺼냄, 꺼낸 값 리턴
const array1 = [1, 2, 3];
array1.push(4);
console.log(array1); // [1, 2, 3, 4]
array1.pop();
console.log(array1); // [1, 2, 3]

//shift(): 배열의 첫 번째 요소 꺼냄, 꺼낸 값 리턴
//unshift(): 배열의 첫 번째에 요소 추가, 길이 리턴
const fruitArray = ["사과", "바나나", "수박"];
fruitArray.shift();
console.log(fruitArray); //['바나나', '수박']
fruitArray.unshift("오이", "배");
console.log(fruitArray); //['오이', '배', '바나나', '수박']

//splice(): 배열의 요수를 추가, 제거, 교체
//splice(바꿀인덱스, 삭제할개수, 추가할요소들)
const spliceArr = [1, 2, 3];
spliceArr.splice(1, 0, 4);
console.log(spliceArr); // [1, 4, 2, 3]
spliceArr.splice(2, 1, 5);
console.log(spliceArr); // [1, 4, 5, 3]

//slice(): 요소들을 추출하여 새로운 배열로 반환
//slice(시작, 끝)-두번째요소 바로 전까지, 배열 길이보다 크면 배열 끝까지 추출
const myArray1 = ["apple", "banana", "cherry", "durian", "elderberry"];
console.log(myArray1.slice(1, 4)); //['banana', 'cherry', 'durian']
console.log(myArray1.slice()); //["apple", "banana", "cherry", "durian", "elderberry"]
console.log(myArray1.slice(0, 10)); //["apple", "banana", "cherry", "durian", "elderberry"]

//sort(): 배열의 요소를 정렬, 정렬된 배열을 반환
const avengers = ['아이언맨', '스파이더맨', '헐크', '토르'];
console.log(avengers.sort()); //['스파이더맨', '아이언맨', '토르', '헐크']

const nums = [3, 1, 8, 6];
console.log(nums.sort()); //[1,3,6,8]

const nums2 = [23, 5, 1000, 42];
console.log(nums2.sort()); //[1000,23,42,5] 문자열로 변환해서 유니코드 순서대로 비교하기 때문

//비교함수를 사용하여 반환값에 따라 정렬
const num3 = [13, 9, 10];

num3.sort(function (a, b) {
  console.log('a: ' + a, 'b: ' + b);
  return a - b;
});
console.log(num3)
/**
"a: 9"
"b: 13" // a - b는 음수임으로 a를 앞으로 => [9, 13, 10]

"a: 10"
"b: 9" // a - b는 양수임으로 b를 앞으로 => [9, 13, 10]

"a: 10"
"b: 13" // a - b는 음수임으로 a를 앞으로 => [9, 10, 13]

"a: 10"
"b: 9" // a - b 는 양수임으로 b를 앞으로 => [9, 10, 13]
*/

//forEach(): 배열의 각 요소에 대해 주어진 함수를 실행
//forEach(배열요소, 인덱스, 배열)??
const arrfe = ['참외', '키위', '감귤'];
arrfe.forEach(function(item, index) {
  console.log(item, `은(는) ${index}번째 입니다.`);
	arrfe[index] = index;
}); //함수를 인자로 넘겨서 실행하게한다.(콜백함수)
// 결과
// 참외 0
// 키위 1
// 감귤 2

const arrfe2 = ['참외', '키위', '감귤']
function callbackfn(item, index,arr){
  console.log(item, `은(는) ${index}번째 입니다.`);
  console.log("원본배열은",arr,"입니다")
}
arrfe2.forEach(callbackfn);

//map(): 배열의 요소에 대해 주어진 함수를 실행하고 리턴한 결과를 새로운 배열로 반환
//map(함수, 인덱스)??
const a = [1,2,3];
function callbackfn2(item){
  return item*2
}
console.log(a.map(callbackfn2)) //[2,4,6]
console.log(a) //[1,2,3] 원본값은 변하지 않음

//filter(): 특정 조건을 만족하는 요소들만 추출하여 새로운 배열 반환
const af = [1,2,3,4,5];
function filterFn(num){
  return num % 2 === 1;
}
const result = af.filter(filterFn);
console.log(result); //[1,3,5]

const filterFn2 = (num) => num%2===0;
const result2 = af.filter(filterFn2);
console.log(result2); //[2,4]

const result3 = af.filter((num)=>num%2===1);
console.log(result3);
const result4 = af.filter((num)=>{
  return num%2===0; //코드블럭 만들면 return 꼭 써줘야함
})
console.log(result4);

//reduce(): 배열의 값들을 하나씩 가져와서 누적 연산을 함
//a: 누적값, c: 가산값, 0: 초기값
const abc = [1, 2, 3, 4, 5]
console.log(abc.reduce((a, c) => a + c, 0)) //15

const rearr = [1, 2, 3, 4]
function reducer(x,y){
  return x+y;
}
const resultt = rearr.reduce(reducer, 0);
console.log(resultt); //10

//includes(): 요소가 포함되어 있으면 true, 아니면 false
const arrr1 = ['hello', 'world', 'hojun'];
console.log(arrr1.includes('world')); //true

//join(): 문자열로 연결할때 사용, 기본값은 쉼표(,)
const arrr2 = ['010', '1034', '1100']
console.log(arrr2.join('-')) // 010-1034-1100
/* const arr3 = [010, 1034, 1100]
arr3.join('-') // 이렇게 하시면 안됩니다. 0으로 시작하는 숫자를 8진수로 인식합니다. */