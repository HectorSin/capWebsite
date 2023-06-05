from flask import Flask, render_template, request
from chat_api import chat

app = Flask(__name__)

@app.route('/')
def page1():
    return render_template('index.html')

@app.route('/index.html')
def page10():
    return render_template('index.html')

@app.route('/air.html')
def page2():
    return render_template('air.html')

@app.route('/form1.html')
def form1():
    return render_template('form1.html')

@app.route('/form21.html')
def form21():
    return render_template('form21.html')

@app.route('/form22.html')
def form22():
    return render_template('form22.html')

@app.route('/form2.html')
def page4():
    return render_template('form2.html')

@app.route('/package.html')
def page5():
    return render_template('package.html')

@app.route('/rent.html')
def page6():
    return render_template('rent.html')

@app.route('/sukso.html')
def page7():
    return render_template('sukso.html')

@app.route('/tour.html')
def page8():
    return render_template('tour.html')

# 폼 데이터 처리
@app.route('/ways.html', methods=['POST'])
def handle_form():
    user_input = request.form.get('userInput')
    c_result = chat(user_input)
    # 폼 데이터를 처리하는 로직을 작성합니다.

    # 결과를 ways.html에 전달하여 렌더링합니다.
    #c_result = user_input
    return render_template('ways.html', result=c_result)

# 나머지 HTML 파일에 대해서도 동일한 방식으로 라우트를 추가합니다.

if __name__ == '__main__':
    app.run()