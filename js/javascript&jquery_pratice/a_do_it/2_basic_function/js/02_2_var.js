var box;
box = 100;
box = 30;
document.write(box);

// 변수에 저장 할 수 있는 자료형 

// 1.문자형

var s = "javascript"
var num = "100"
var tag = "<h1>String</h1>"
document.write(tag);

// 2.숫자형

var s = 100
var t = Number("100")
document.write(t, "<br>");

// 3.논리형
// 논리형 데이터에는 참 또는 거짓이있다.
var s = true
var t = 10 >= 100
var k = Boolean(0);
var f = Boolean()
var c = Boolean(null)
var d = Boolean("null")

// Boolean() 메서드는 논리형 데이터인 true와 false를 반환합니다.
// Boolean() 메서드는 숫자 0 null undefined 빈문자"" 를 제외한 모든 데이터에 true를 반환합니다
// 즉 다음과 같이 메서드에 0을 입력하면 flase가 나옵니다

document.write(s, "<br>")
document.write(t, "<br>")
document.write(k, "<br>")
document.write(f, "<br>")
document.write(c, "<br>")
document.write(d, "<br>")

var line = "<hr>"
document.write(line);

var a = true;
var b = false;
var c = 10 > 5;
var d = Boolean(null);

document.write(a, "<br>");
document.write(b, "<br>");
document.write(c, "<br>");
document.write(d, "<br>");

var line = "<hr>"
document.write(line);

// 4.null & undefined 데이터
// undefined는 변수에 값이 등로고디기 전의 기본값
// null은 변수에 저장된 데이터를 비우고자 할 떄 사용하는 값

// 5.typeof
// typeof는 지정한 데이터나 변수에 저장된 자료형을 알고 싶을 때 사용한다.

var num = 100
var str = "자바스크립트"

document.write(typeof num, "<br>")
document.write(typeof str, "<br>");