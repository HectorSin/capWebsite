// 성향테스트 시작 버튼 클릭 시
const startBtn = document.querySelector('.start-btn');
startBtn.addEventListener('click', () => {
	// 성향테스트 페이지로 이동
	location.href = 'test.html';
});

// 로그인 버튼 클릭 시
const loginBtn = document.querySelector('nav ul li:first-child a');
loginBtn.addEventListener('click', () => {
	// 로그인 페이지로 이동
	location.href = 'login.html';
});

// 여행 계획, 여행 일정, 나의 여행지 버튼 클릭 시
const planningBtns = document.querySelectorAll('nav ul li:nth-child(n+3) a');
planningBtns.forEach(btn => {
	btn.addEventListener('click', () => {
		// 로그인되어 있지 않으면 로그인 페이지로 이동
		// 로그인되어 있으면 해당 페이지로 이동
		alert('로그인이 필요한 서비스입니다.');
		location.href = 'login.html';
	});
});
