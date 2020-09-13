// 1.산술연산자

var num1 = 15;
var num2 = 2;
var result;
result = num1 + num2;
document.write(result, "<br>");
result = num1 - num2;
document.write(result, "<br>");
result = num1 * num2;
document.write(result, "<br>");
result = num1 / num2;
document.write(result, "<br>");
result = num1 % num2;
document.write(result, "<br>");

var line = "<hr>"
document.write(line);

// 2.문자결합연산자
// 피연산자가 문자형 데이터
// 여러개의 문자를 하나의 문자형 데이터로 결합할 때 사용한다

var t1 = "학교종이";
var t2 = " 땡떙땡";
var t3 = 8282;
var t4 = " 어서모이자";
var result = t1 + t2 + t3 + t4
document.write(result, "<br>")

var line = "<hr>"
document.write(line);

// 3.대입연산자
// 아나 이게 진짜 짜증나고 좀 잘 안와닿는다 그러나 언젠간 외워질테니 너무 걱정하지마라
// 연산된 데이터를 (ex x+y) 바로 변수에 저장할 때 사용한다
// 산술연산자와 대입연산자가 복합적으로 적용된 것을 말한다

var num1 = 10;
var num2 = 3;

num1 += num2
document.write(num1, "<br>")

num1 -= num2
document.write(num1, "<br>")

num1 *= num2
document.write(num1, "<br>")

num1 %= num2
document.write(num1, "<br>")

var line = "<hr>"
document.write(line);

// 다음은 여러 개의 데이터로 저장된 HTML 태그를 복합 대입 연산자를 이용하여 하나의 문자로 연결한 뒤 표한하는 것

var str = "<table border='1'>";
str += "<tr>";
str += "<td>1</td><td>2</td><td>3</td>";
str += "</tr>";
str += "</table>";
document.write(str);

var line = "<hr>"
document.write(line);

// 4.증감연사자
// 증감 연산자에는 숫자형 데이터를 1씩 증가시키는 증가 연산자와 반대로 1씩 감소시키는 감소 연산자 있습니다.

var num1 = 10;
var num2 = 20;
var result;

num1--;

document.write(num1, "<br>")
// 이거도 일단 num1값이 result 된 이후 -1이 빠진게 num1으로 들어간다

num1++;
document.write(num1, "<br>")
// 그래서 이게 10으로 나오는거임

result = num2++
document.write(result, "<br>")

// reusult는 일단 num2(20)이 먼저 저장된 후 값을 보여준다
// 그 뒤에 num2(20)에 1이 증가되어 num2가 21로 새로 저장된다

result = ++num2
document.write(result, "<br>")

var line = "<hr>"
document.write(line);

// 5.비교연산자
// 두 데이터를 크다, 작다, 같다와 같이 비교할 때 사용하는 연산자
// 결과는 무조건 참과 거짓으로만 나온다

var k = 10, m = "10"
k == 10
m == 10

// 여기서 ==는 문자와 숫자를 구분 하지 않아서 둘타 ture다

k === 10
m === 10
// 허나 ===는 문자와 숫자를 구분하기에 다른 식이다

var a = 10;
var b = 20;
var c = 10;
var f = "20";
var result;

result = a > b;
document.write(result, "<br>");
result = a < b;
document.write(result, "<br>");
result = a <= b;
document.write(result, "<br>");
result = b == f;
document.write(result, "<br>");
result = a != b;
document.write(result, "<br>");
result = b === f;
document.write(result, "<br >");

// 6.논리연산자
// ||  or 둘중 하나만  ture면 ture를 반환한다
// && and 피연산중 하나라도 false면 false를 반환하낟
// ! not 이거는 not이면 false , false면 not을 반환한다 또한 얘는 단항연산자라고 불리며 우선순위가 2순위다
// 논리 연삱자는 피연산자가 논리형 데이터인 true 또는 false로 결괏값을 반환합니다

// 7.연산자 우선순위
// 1.()
// 2.단항연산자(--,++,!)
// 3.산술연산자(*, /,%,+,-)
// 4.비교연산자(>,>=,<=,==,===,!==,!=)
// 5.논리연산자(&&,||)
// 6.대입(복합대깁)연산자 (=, +=,-=,/=,%=)

var line = "<hr>"
document.write(line);

var a = 10;
var b = 20;
var m = 30;
var n = 40;

var result;
result = a > b || b >= m || m > m;
document.write(result, "<br>");

result = a > b || b >= m || m <= n;
document.write(result, "<br>");

result = a <= b && b >= m && m <= n;
document.write(result, "<br>")

result = a <= b && b <= m && m <= n;
document.write(result, "<br>");

result = !(a > b);
document.write(result, "<br>");

// 8.삼항 조건 연산자
// 삼항 조건 연산자는 조건식의 결과에 따라 실행결과가 달라지는 삼항 연산자이며 연산을 위해 피연산자가 3개 필요하다

var line = "<hr>"
document.write(line);

var a = 10;
var b = 3;

var result = a > b ? "javascript" : "hello";
// 이 식이 바로 삼항 조건 연산자
// a>b 하나의 항 javascript 두 번째 항 hellow 3번째 항
// 표시는 ? 료 해준다

document.write(result, "<br>");

// 9.총정리 실습 들어갑시다

// var line = "<hr>"
// document.write(line);

// var userHeight = 180;
// var userWeight = 74;

// var normal_w = (userHeight - 100) * 0.9;
// document.write(normal_w, "<br>");


// // 9_1.적정 체중 구하기
// var name = prompt("당신의 이름은?", "이름을 입력하세요");
// var height = prompt("당신의 신장은?", "당신의 신장을 입력하세요");
// var weight = prompt("당신의 몸무게는?", "당신의 몸무게를 입력하세요");

// var normal_w = (height - 100) * 0.9;
// var result = weight >= normal_w - 5 && weight <= normal_w + 5;
// var result = result ? "적정체중입니다." : "적정체중이 아닙니다.";
// document.write(name + "님은 " + result, "<br>");

var line = "<hr>"
document.write(line);

// 10_1.도전미션1

// var price1 = prompt("교통비", "교통비를 입력하세요");
// var price2 = prompt("식비", "식비를 입력하세요");
// var price3 = prompt("음료비", "음료비를 입력하세요");

var price1 = 3000
var price2 = 6000
var price3 = 9000

var sum = price1 + price2 + price3;
var result = sum <= 10000 ? "돈 관리 잘 했어요!" : "원 초과하셨습니다";
document.write(sum - 10000 + result);


// 10_2.도전미션2

var line = "<hr>"
document.write(line);

var sa = prompt("4분기", "4분기 판매량을 입력하세요");

var ill = 1200;
var lee = 1300;
var sam = 1000;

var sum = (ill + lee + sam) / 3
var result = sa >= sum ? "판매량이 평균이상입니다" : "판매량이 평균 미만입니다"

document.write(result);


var line = "<hr>"
document.write(line);