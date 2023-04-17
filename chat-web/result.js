// 결과 출력 영역 선택
const resultDiv = document.getElementById('result');

// 이전 페이지에서 전달받은 결과 불러오기
const result = localStorage.getItem('result');

// 결과 출력
//resultDiv.textContent = result;

// 결과 출력
if (result) {
	resultDiv.textContent = result;
} else {
	resultDiv.textContent = '결과가 없습니다.';
}

// 다시하기 버튼 클릭 이벤트 핸들러 등록
const restartBtn = document.getElementById('restart-btn');
restartBtn.addEventListener('click', () => {
	// 로컬 스토리지 초기화 후 test.html 페이지로 이동
	localStorage.clear();
	window.location.href = 'test.html';
});
