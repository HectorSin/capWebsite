const answers = []; // 각 질문에 대한 답변을 저장할 배열

// submit 버튼 클릭 이벤트 리스너 등록
document.querySelector('.submit-btn').addEventListener('click', (event) => {
	event.preventDefault(); // 기본 동작 방지

	// 각 질문에 대한 답변을 배열에 저장
	answers[0] = document.querySelector('#question1').value;
	answers[1] = document.querySelector('#question2').value;
	answers[2] = document.querySelector('#question3').value;
	answers[3] = document.querySelector('#question4').value;

	// 각 답변에 대한 점수 계산
	const scores = calculateScores(answers);

	// 결과 페이지로 이동
	window.location.href = `result.html?s1=${scores[0]}&s2=${scores[1]}&s3=${scores[2]}&s4=${scores[3]}`;
});

// 각 답변에 대한 점수 계산하는 함수
function calculateScores(answers) {
	const scores = [0, 0, 0, 0];

	for (let i = 0; i < answers.length; i++) {
		switch (answers[i]) {
			case 'option1':
				scores[0]++;
				break;
			case 'option2':
				scores[1]++;
				break;
			case 'option3':
				scores[2]++;
				break;
			case 'option4':
				scores[3]++;
				break;
			default:
				break;
		}
	}

	return scores;
}
