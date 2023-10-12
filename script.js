let button = document.getElementById('finish');

button.addEventListener('click', checkTest);

function checkTest() {
    // alert (2);
let result = 0;

let ans1 = document.getElementById('q1').value;
if (ans1 === '1') {
    result++;
}
let ans2 = document.getElementById('q2').value;
if (ans2 === '3,14159') {
    result++;
}
let ans3 = document.getElementById('q3').value;
if (ans3 === '0') {
    result++;
}
let ans4 = document.getElementById('q4').value;
if (ans4 === 'бесконечности') {
    result++;
}
//ответ - строка, т к getElementById возвр-т строку
alert('Правильных ответов: ' + result);
}