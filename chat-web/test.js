/*

// 질문 목록과 답변 목록
const questions = [
	{
		id: 1,
		title: '여행을 떠나기 전에 반드시 해야 하는 일은?',
		answers: [
			{ id: 1, text: '여행 일정 짜기' },
			{ id: 2, text: '여행 관련 정보 검색' },
			{ id: 3, text: '여행 필수품 준비하기' },
			{ id: 4, text: '여행 동반자와 계획 세우기' },
		]
	},
	{
		id: 2,
		title: '여행지를 선택할 때 가장 중요한 기준은?',
		answers: [
			{ id: 1, text: '자연 경관' },
			{ id: 2, text: '역사와 문화' },
			{ id: 3, text: '음식과 맛집' },
			{ id: 4, text: '쇼핑과 엔터테인먼트' },
		]
	},
	{
		id: 3,
		title: '새로운 경험을 위해 가장 도전적인 여행은?',
		answers: [
			{ id: 1, text: '스카이다이빙' },
			{ id: 2, text: '바다 낚시' },
			{ id: 3, text: '서핑' },
			{ id: 4, text: '트레킹' },
		]
	},
];

// 질문 답변을 저장할 객체
const userAnswers = {};

// 선택된 답변을 저장하는 함수
function selectAnswer(questionId, answerId) {
	userAnswers[questionId] = answerId;
}

// 결과 페이지로 이동하는 함수
function showResult() {
	// 모든 질문에 대한 답변을 선택했는지 확인
	if (Object.keys(userAnswers).length < questions.length) {
		alert('모든 질문에 답변해주세요.');
		return;
	}

	// Chat GPT API에 전달할 prompt 생성
	let prompt = '나의 여행 성향은?\n';
	questions.forEach(question => {
		const answer = question.answers.find(a => a.id == userAnswers[question.id]);
		prompt += `Q${question.id}. ${question.title}\nA. ${answer.text}\n`;
	});

	// prompt를 이용하여 Chat GPT API 호출
	// ...

	// 결과 페이지로 이동
	location.href = 'result.html';
}

// 질문 목록을 화면에 표시하는 함수
function renderQuestions() {
	const questionList = document.querySelector('.question-list');
	questions.forEach(question => {
		const questionItem = document.createElement('li');
		questionItem.innerHTML = `
			<p class="title">${question.title}</p>
			<ul class="answer-list">
				${question.answers.map(answer => `
					<li onclick="selectAnswer(${question.id}, ${answer.id}); this.classList.toggle('selected')">
						${answer.text}
					</li>
				`).join('')}
			</ul>
		`;
		questionList.appendChild(questionItem);
	});
}

// 화면이 로드되면 질문 목록을 표시
window.onload = () => {
	renderQuestions();
};



// Chat GPT API에 전달할 prompt 생성하는 함수
function generatePrompt() {
	// 사용자가 선택한 모든 답변을 prompt 문자열로 생성
	let prompt = '';
	questions.forEach(question => {
		const userAnswer = userAnswers[question.id];
		if (userAnswer) {
			prompt += `${question.title} ${userAnswer.text} `;
		}
	});
	// prompt 문자열 반환
	return prompt;
}

// Chat GPT API를 이용하여 결과 생성하는 함수
async function generateResult() {
	// Chat GPT API 호출을 위한 데이터 생성
	const prompt = generatePrompt();
	const url = 'https://api.openai.com/v1/engines/davinci-codex/completions';
	const data = {
		prompt: prompt,
		max_tokens: 60,
		temperature: 0.5,
	};

	// Chat GPT API 호출 및 결과 반환
	try {
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': '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' // Chat GPT API KEY 입력 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
			},
			body: JSON.stringify(data)
		});
		const result = await response.json();
		return result.choices[0].text;
	} catch (error) {
		console.error(error);
	}
}

// 선택한 답변을 userAnswers 객체에 저장하는 함수
function selectAnswer(questionId, answerId) {
	const question = questions.find(q => q.id === questionId);
	const answer = question.answers.find(a => a.id === answerId);
	userAnswers[questionId] = answer;
}

// 결과 보기 버튼을 누르면 결과를 보여주는 함수
async function showResult() {
	// 모든 질문에 대한 답변이 완료되었는지 확인
	const isAnsweredAll = questions.every(question => userAnswers[question.id]);
	if (!isAnsweredAll) {
		alert('모든 질문에 답변해주세요!');
		return;
	}

	// Chat GPT API를 이용하여 결과 생성
	const result = await generateResult();

	// 결과를 result.html 페이지로 전달
	localStorage.setItem('result', result);

	// result.html 페이지로 이동
	window.location.href = 'result.html';
}
*/

// 질문 목록과 답변 목록
const questions = [
	{
		id: 1,
		title: '여행을 떠나기 전에 반드시 해야 하는 일은?',
		answers: [
			{ id: 1, text: '여행 일정 짜기' },
			{ id: 2, text: '여행 관련 정보 검색' },
			{ id: 3, text: '여행 필수품 준비하기' },
			{ id: 4, text: '여행 동반자와 계획 세우기' },
		]
	},
	{
		id: 2,
		title: '여행지를 선택할 때 가장 중요한 기준은?',
		answers: [
			{ id: 1, text: '자연 경관' },
			{ id: 2, text: '역사와 문화' },
			{ id: 3, text: '음식과 맛집' },
			{ id: 4, text: '쇼핑과 엔터테인먼트' },
		]
	},
	{
		id: 3,
		title: '새로운 경험을 위해 가장 도전적인 여행은?',
		answers: [
			{ id: 1, text: '스카이다이빙' },
			{ id: 2, text: '바다 낚시' },
			{ id: 3, text: '서핑' },
			{ id: 4, text: '트레킹' },
		]
	},
];

// 질문 답변을 저장할 객체
const userAnswers = {};

// 선택된 답변을 저장하는 함수
function selectAnswer(questionId, answerId) {
	userAnswers[questionId] = answerId;
}

// 결과 페이지로 이동하는 함수
async function showResult() {
	// 모든 질문에 대한 답변을 선택했는지 확인
	if (Object.keys(userAnswers).length < questions.length) {
		alert('모든 질문에 답변해주세요.');
		return;
	}

	// Chat GPT API에 전달할 prompt 생성
	let prompt = '나의 여행 성향은?\n';
	questions.forEach(question => {
		const answer = question.answers.find(a => a.id == userAnswers[question.id]);
		prompt += `Q${question.id}. ${question.title}\nA. ${answer.text}\n`;
	});

	// prompt를 이용하여 Chat GPT API 호출
	
    async function callChatGPTAPI(prompt) {
        // Chat GPT API 호출을 위한 데이터 생성
        const url = 'https://api.openai.com/v1/engines/davinci-codex/completions';
        const data = {
          prompt: prompt,
          max_tokens: 60,
          temperature: 0.5,
        };
      
        // Chat GPT API 호출 및 결과 반환
        try {
          const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': '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' // Chat GPT API KEY 입력
            },
            body: JSON.stringify(data)
          });
          const result = await response.json();
          return result.choices[0].text;
        } catch (error) {
          console.error(error);
        }
      }
      
    // Chat GPT API 호출하여 결과 생성
    const result = await callChatGPTAPI(prompt);
      
    // 결과 페이지로 이동
    localStorage.setItem('result', result);
    location.href = 'result.html';
    }
/*
    //API 키 변수 저장
    var OPENAI_API_KEY='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'

  
    // Chat GPT API 호출을 위한 데이터 생성
//const prompt = generatePrompt();
const url = 'https://api.openai.com/v1/engines/davinci-codex/completions';
const data = {
	prompt: prompt,
	max_tokens: 60,
	temperature: 0.5,
};

// Chat GPT API 호출 및 결과 반환
try {
	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': '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' // Chat GPT API KEY 입력 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
		},
		body: JSON.stringify(data)
	});
	const result = await response.json();
	console.log(result.choices[0].text);
} catch (error) {
	console.error(error);
}

	// 결과 페이지로 이동
	location.href = 'result.html';
}

*/
// 질문 목록을 화면에 표시하는 함수
function renderQuestions() {
	const questionList = document.querySelector('.question-list');
	questions.forEach(question => {
		const questionItem = document.createElement('li');
		questionItem.innerHTML = `
			<p class="title">${question.title}</p>
			<ul class="answer-list">
				${question.answers.map(answer => `
					<li onclick="selectAnswer(${question.id}, ${answer.id}); this.classList.toggle('selected')">
						${answer.text}
					</li>
				`).join('')}
			</ul>
		`;
		questionList.appendChild(questionItem);
	});
}

// 화면이 로드되면 질문 목록을 표시
window.onload = () => {
	renderQuestions();
};