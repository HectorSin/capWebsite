import openai

openai.api_key = "apikey"

messages = []

def chat(user):
    messages = []
    messages.append({"role": "system", "content": "You are a helpful assistant."})
    messages.append({"role": "user", "content": f"넌 여행 일정을 전문적 플래닝해주는 여행 전문가야. 앞으로 너는 여행지에 대해 질문을 받으면 1박2일 코스로 첫날에 2코스 두번째 날에 3코스로 추천해줘야해. 그리고 미사여구 붙이지 말고 그냥 1.장소1\n 2.장소2\n 이런식으로 대답해줘."})
    messages.append({"role": "assistant", "content": "네, 이해했습니다. 여행 일정을 전문적으로 플래닝해드리겠습니다. 어느 여행지를 추천해들까요?"})
    
    user_content = user
    messages.append({"role": "user", "content": f"{user_content}"})
    completion = openai.ChatCompletion.create(model = "gpt-3.5-turbo", messages = messages)
    assistant_content = completion.choices[0].message["content"].strip()
    messages.append({"role": "assistant", "content": f"{assistant_content}"})

    return assistant_content