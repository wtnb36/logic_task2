const array = [];

function answer1() {
  const quiz_1 = document.getElementById('quiz-1');
  if (quiz_1.answer.value == "a" || quiz_1.answer.value == "b" || quiz_1.answer.value == "c") {
    if (quiz_1.answer.value == 'a') {
      document.getElementById('a1_answer').innerHTML = "正解";
      document.getElementById('a1_caution').innerHTML = "";
      array.push("正解");
    } else if (quiz_1.answer.value == 'b') {
      document.getElementById('a1_answer').innerHTML = "不正解";
      document.getElementById('a1_answer').className = "incorrect"
      document.getElementById('a1_caution').innerHTML = "";
      array.push("不正解");
    } else if (quiz_1.answer.value == 'c') {
      document.getElementById('a1_answer').innerHTML = "不正解";
      document.getElementById('a1_answer').className = "incorrect"
      document.getElementById('a1_caution').innerHTML = "";
      array.push("不正解")
    }
  } else {
    document.getElementById('a1_answer').innerHTML = "";
    document.getElementById('a1_caution').innerHTML = "選択してください";
    document.getElementById('a1_caution').style.color = "red";
    array.push("未回答")
  }
}

function answer2() {
  const quiz_2 = document.getElementById('quiz-2');
  if (quiz_2.a2.value.match(/^[0-9]+$/)) {
    if (quiz_2.a2.value == "108") {
      document.getElementById('a2_answer').innerHTML = "正解";
      document.getElementById('a2_caution').innerHTML = "";
      array.push("正解");
    } else {
      document.getElementById('a2_answer').innerHTML = "不正解";
      document.getElementById('a2_answer').className = "incorrect"
      document.getElementById('a2_caution').innerHTML = "";
      array.push("不正解");
    }
  } else {
    document.getElementById('a2_answer').innerHTML = "";
    document.getElementById('a2_caution').innerHTML = "半角数字で入力してください";
    document.getElementById('a2_caution').style.color = "red";
    array.push("未回答")
  }
}


function answer3() {
  const check1 = document.getElementById('check1');
  const check2 = document.getElementById('check2');
  const check3 = document.getElementById('check3');
  if (check1.checked == true && check2.checked == false && check3.checked == false) {
    document.getElementById('a3_answer').innerHTML = "正解";
    array.push("正解");
  } else {
    document.getElementById('a3_answer').innerHTML = "不正解";
    document.getElementById('a3_answer').className = "incorrect"
    array.push("不正解")
  }
}


function correct() {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == "正解") {
      count++;
    }
  }
  let str = array.length + "門中" + count + "門正解";
  document.getElementById('all_answer').innerHTML = str;
}

function allAnswer() {
  answer1();
  answer2();
  answer3();
  correct();
  array.length = 0;
}

