//사이트 콘솔창에서 확인
document.head
document.body
document.body.childNodes
document.body.childNodes[1]
document.body.childNodes[1].tagName
document.body.childNodes[1].innerText
document.body.childNodes[1]. //점만 찍어서 얼마나 많은 애트리뷰트가 있는지 확인해보세요.
document.body.childNodes[2]
document.body.childNodes[2].data

// 해당하는 Id를 가진 요소에 접근하기
document.getElementById();

// 해당하는 모든 요소에 접근하기
document.getElementsByTagName();

// 해당하는 클래스를 가진 모든 요소에 접근하기
document.getElementsByClassName();

// css 선택자로 단일 요소에 접근하기
document.querySelector("selector");

// css 선택자로 여러 요소에 접근하기
document.querySelectorAll("selector");

//이런식으로 innerText, innerHTML 활용해서 바꿀수있다//
document.querySelector(".ball.type1").innerText = 20