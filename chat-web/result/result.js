// 다른 여행 경로 추천 받기 버튼 클릭 시
const otherRouteBtn = document.querySelector('.cta .btn-primary');
otherRouteBtn.addEventListener('click', () => {
	// 새로운 경로 추천을 받는다는 알림창 출력
	alert('새로운 여행 경로 추천을 받습니다!');
});

// 돌아가기 버튼 클릭 시
const goBackBtn = document.querySelector('.cta .btn-secondary');
goBackBtn.addEventListener('click', () => {
	// 이전 페이지로 이동
	history.back();
});
