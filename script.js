const quizList = [
    {
      text: '西暦1900年は閏年である。',
      answer: 0
    },
    {
      text: '光の三原色は赤緑青である',
      answer: 1
    },
    {
      text: '紙鍋の紙は、燃えないように耐火加工されている。',
      answer: 0
    }
  ];
 
  // 今何問目か
let quizNumber = 0;
// 正解数
let score = 0;

// 問題を表示する
function showQuiz() {
  const quiz = quizList[quizNumber];
  document.getElementById('quiz-text').innerText = quiz.text;
}

// 回答ボタンを押した時
function submit(input) {
  // 答え合わせ
  check(input);
    // 問題番号を1つÏ進める
    quizNumber++;
    //コンソールログ 確認
    //console.log(quizNumber);
    // 問題があれば問題文を表示、そうでなければ結果発表する。
    if (quizNumber < quizList.length) {
        //console.log(quizNumber + 1000);
      showQuiz();

    } else {
        //console.log(quizNumber + 2000);
        //console.log(quizNumber + 20000);
         finish();  
    }
  }

 // 正解ならば、得点を1加算する。
function check(input) {
    const quiz = quizList[quizNumber];
    if (input == quiz.answer) {
      score++;
      const title = document.getElementById('seikai');
      title.textContent = '正解数は'+ score +'です'
        //コンソールログ 確認
        //console.log(quizNumber + 100);
      //document.getElementById('status-score').innerText = score;
      //正解なら青色
      const mondai = document.getElementById('quiz-text');
      mondai.style.color = 'blue';
      mondai.style.backgroundColor = 'red';
    }
    else 
    {
        const mondai = document.getElementById('quiz-text');
    mondai.style.color = 'red';
    mondai.style.backgroundColor = 'white';

    }
     }

  // 結果発表
function finish() {
    alert(`${quizList.length}問中、${score}問正解でした！`);
  }