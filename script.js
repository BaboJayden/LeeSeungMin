const problem = [
    {problem: "이승민이 제일 좋아하는 스포츠는?", level:1, answer: "B", a:"축구", b:"농구", c:"배드민턴", d:"탁구"},
    {problem: "이승민이 제일 좋아하는 과목은?", level:1, answer: "D", a:"수학", b:"과학", c:"영어", d:"체육"},
    {problem: "이승민이 제일 잘하는 과목은?", level:1, answer: "A", a:"영어", b:"체육", c:"국어", d:"수학"},
    {problem: "이승민이 제일 자주 찾아가는 반은?", level:1, answer: "A", a:"1-1", b:"1-2", c:"1-3", d:"1-4"},
    {problem: "이승민이 제일 좋아하는 수학 문제집은?", level:2, answer: "C", a:"쎈", b:"수학의 정석", c:"블랙라벨", d:"개념유형 파워"},
    {problem: "이승민의 50m 달리기 최고기록은?", level:2, answer: "B", a:"7.73", b:"7.80", c:"8.02", d:"8.27"},
    {problem: "이승민의 취미는?", level:2, answer: "D", a:"친구 때리기", b:"운동", c:"독서", d:"체스"},
    {problem: "이승민이 제일 선호하는 축구 포지션은?", level:3, answer: "C", a:"GK", b:"CB", c:"RM", d:"RW"},
    {problem: "이승민이 제일 좋아하는 래퍼는?", level:3, answer: "B", a:"블라세", b:"노윤하", c:"조광일", d:"릴보이"},
    {problem: "이승민의 키는?", level:3, answer: "C", a:"171", b:"172", c:"173", d:"174"},
    // {problem: `당신의 점수는 ${point}점입니다!` , level:"", answer: "", a:"", b:"", c:"", d:""}
];
let problemNum = 0;
let point = 0;

const loop = num => {
    document.getElementById("next").style.display = "none";
    document.getElementById("label1").style.color = "white";
    document.getElementById("label2").style.color = "white";
    document.getElementById("label3").style.color = "white";
    document.getElementById("label4").style.color = "white";
    if(problemNum == 10) {
        document.getElementById("select").style.display = "none";
        document.getElementById("problem").innerHTML = `당신의 점수는 ${point}점입니다!<br>이승민에게 점수를 알려주세요!`
    }
    const data = problem[problemNum];
    document.getElementById("problem").innerHTML = data.problem;
    document.getElementById("level").innerHTML = "Lv. " + data.level;
    document.getElementById("label1").innerHTML = data.a;
    document.getElementById("label2").innerHTML = data.b;
    document.getElementById("label3").innerHTML = data.c;
    document.getElementById("label4").innerHTML = data.d;
    if(data.level == 1)
    {document.getElementById("level").style.color = "yellowgreen"}
    else if(data.level == 2)
    {document.getElementById("level").style.color = "orange"}
    else if(data.level == 3)
    {document.getElementById("level").style.color = "red"}
}

const click1 = () => {
    if("A" == problem[problemNum].answer) {
        document.getElementById("label1").style.color = "#03fc1c";
        point++;
    } else {
        document.getElementById("label1").style.color = "#fc0303";
    }
    document.getElementById("next").style.display = "block";
}
const click2 = () => {
    if("B" == problem[problemNum].answer) {
        document.getElementById("label2").style.color = "#03fc1c";
        point++;
    } else {
        document.getElementById("label2").style.color = "#fc0303";
    }
    document.getElementById("next").style.display = "block";
}
const click3 = () => {
    if("C" == problem[problemNum].answer) {
        document.getElementById("label3").style.color = "#03fc1c";
        point++;
    } else {
        document.getElementById("label3").style.color = "#fc0303";
    }
    document.getElementById("next").style.display = "block";
}
const click4 = () => {
    if("D" == problem[problemNum].answer) {
        document.getElementById("label4").style.color = "#03fc1c";
        point++;
    } else {
        document.getElementById("label4").style.color = "#fc0303";
    }
    document.getElementById("next").style.display = "block";
}
document.getElementById("label1").onclick = click1;
document.getElementById("label2").onclick = click2;
document.getElementById("label3").onclick = click3;
document.getElementById("label4").onclick = click4;
document.getElementById("next").onclick = () => {
    problemNum++;
    loop(problemNum);
}

loop(problemNum);
