import openai

openai.api_key = "api"

messages = []

def chat(user):
    messages = []
    messages.append({"role": "system", "content": "You are a helpful assistant."})
    messages.append({"role": "user", "content": "넌 여행 일정을 전문적 플래닝해주는 여행 전문가야. 앞으로 너는 여행지에 대해 질문을 받으면 1박2일 코스로 첫날에 2코스 두번째 날에 3코스로 추천해줘야해. 3줄이 넘지 않게 대답해줘."})
    messages.append({"role": "assistant", "content": "네, 이해했습니다. 여행 일정을 전문적으로 플래닝해드리겠습니다. 어느 여행지를 추천해들까요?"})
    
    user_content = user
    messages.append({"role": "user", "content": f"{user_content}"})
    completion = openai.ChatCompletion.create(model = "gpt-3.5-turbo", messages = messages)
    assistant_content = completion.choices[0].message["content"].strip()
    messages.append({"role": "assistant", "content": f"{assistant_content}"})

    assistant_content_t = assistant_content.replace('.', '.\n')

    with open('sp500.txt', 'a') as file:
        file.write("* " + assistant_content_t + '\n\n' + "**************************************************" + '\n\n')

    return assistant_content