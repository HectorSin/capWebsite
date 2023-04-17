const apiKey = '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'; // Chat GPT API 인증키

// 결과 페이지 로딩 완료 시 실행되는 함수
window.onload = () => {
	const urlParams = new URLSearchParams(window.location.search);
	const s1 = urlParams.get('s1');
	const s2 = urlParams.get('s2');
	const s3 = urlParams.get('s3');
	const s4 = urlParams.get('s4');
	const scores = [s1, s2, s3, s4];

	const prompt = generatePrompt(scores); // Chat GPT API에 전달할 prompt 생성
	getRecommendation(apiKey, prompt); // Chat GPT API를 통해 여행지 추천 받기
}

// Chat GPT API를 통해 여행지 추천을 받는 함수
async function getRecommendation(apiKey, prompt) {
	const apiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';

	const data = {
		prompt: prompt,
		max_tokens: 100,
		n: 1,
		stop: '\n',
		model: 'text-davinci-002',
	};

	try {
		const response = await fetch(apiUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${apiKey}`,
			},
			body: JSON.stringify(data),
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const result = await response.json();
		const recommendation = result.choices[0].text.trim();
		document.querySelector('.loading').style.display = 'none';
		document.querySelector('.result').textContent = recommendation;
	} catch (error) {
		console.error(error);
		document.querySelector('.loading').textContent = '추천에 실패했습니다.';
	}
}


// Chat GPT API에 전달할 prompt 생성하는 함수
function generatePrompt(scores) {
	const questions = ['여행을 떠나는 목적은 무엇인가요?', '어떤 활동을 좋아하나요?', '여행지에서 어떤 것을 기대하나요?', '여행할 때 가장 중요한 것은 무엇인가요?'];
	const options = [['자연과 산책하기', '역사와 문화 탐방하기', '음식과 술 즐기기', '여유롭게 휴식하기'], ['자전거 타기', '걷기', '헤엄치기', '스노클링'], ['자연경관', '문화유산', '새로운 경험', '휴식과 힐링'], ['예산', '편의시설', '여행지 위치', '여행의 철학']];
	const scoresText = ['자연과 산책하기', '역사와 문화 탐방하기', '음식과 술 즐기기', '여유롭게 휴식하기'];

	let prompt = '';

	for (let i = 0; i < scores.length; i++) {
		const optionIndex = Math.max(scores[i] - 1, 0); // 0 이하의 값이 나오지 않도록 함
		const option = options[i][optionIndex];
		prompt += `${questions[i]} ${option} `;
	}

	prompt += '여행지 추천해주세요.';
	return prompt;
}
