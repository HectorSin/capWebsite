from flask import Flask, render_template, request
from chat_api import chat

app = Flask(__name__)

q1 = ["나는 혼자 여행을 즐기는 편이야 ", "나는 가족,친구,연인과 함께 여행을 즐기는 편이야"]
q2 = ["호캉스같은 여행을 좋아해 ", "문화체험을 즐기는 편이야 ", "호캉스, 문화체험 말고 다른 종류의 활동을 좋아해 "]
q3 = ["돈 많이 써도 괜찮아, ", "돈은 적당히 쓰고 싶어, ", "돈은 많이 안쓰고 싶어, "]

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

@app.route('/form311.html')
def form311():
    return render_template('form311.html')

@app.route('/form312.html')
def form312():
    return render_template('form312.html')

@app.route('/form313.html')
def form313():
    return render_template('form313.html')

@app.route('/form321.html')
def form321():
    return render_template('form321.html')

@app.route('/form322.html')
def form322():
    return render_template('form322.html')

@app.route('/form323.html')
def form323():
    return render_template('form323.html')

@app.route('/index111.html')
def page111():
    return render_template('index111.html')

@app.route('/index112.html')
def page112():
    return render_template('index112.html')

@app.route('/index113.html')
def page113():
    return render_template('index113.html')

@app.route('/index121.html')
def page121():
    return render_template('index121.html')

@app.route('/index122.html')
def page122():
    return render_template('index122.html')

@app.route('/index123.html')
def page123():
    return render_template('index123.html')

@app.route('/index131.html')
def page131():
    return render_template('index131.html')

@app.route('/index132.html')
def page132():
    return render_template('index132.html')

@app.route('/index133.html')
def page133():
    return render_template('index133.html')

@app.route('/index211.html')
def page211():
    return render_template('index211.html')

@app.route('/index212.html')
def page212():
    return render_template('index212.html')

@app.route('/index213.html')
def page213():
    return render_template('index213.html')

@app.route('/index221.html')
def page221():
    return render_template('index221.html')

@app.route('/index222.html')
def page222():
    return render_template('index222.html')

@app.route('/index223.html')
def page223():
    return render_template('index223.html')

@app.route('/index231.html')
def page231():
    return render_template('index231.html')

@app.route('/index232.html')
def page232():
    return render_template('index232.html')

@app.route('/index233.html')
def page233():
    return render_template('index233.html')

@app.route('/mypage.html')
def page233():
    return render_template('mypage.html', result = "hi")

# 폼 데이터 처리
@app.route('/ways111.html', methods=['POST'])
def handle_form111():
    user_input = request.form.get('userInput')
    c_result = chat(q1[0] + q2[0] + q3[0] + user_input)
    # c_result = q1[0] + q2[0] + q3[0] + user_input
    # 결과를 ways.html에 전달하여 렌더링합니다.
    return render_template('ways.html', result=c_result)

@app.route('/ways112.html', methods=['POST'])
def handle_form112():
    user_input = request.form.get('userInput')
    c_result = chat(q1[0] + q2[0] + q3[1] + user_input)
    # 결과를 ways.html에 전달하여 렌더링합니다.
    return render_template('ways.html', result=c_result)

@app.route('/ways113.html', methods=['POST'])
def handle_form113():
    user_input = request.form.get('userInput')
    c_result = chat(q1[0] + q2[0] + q3[2] + user_input)
    # 결과를 ways.html에 전달하여 렌더링합니다.
    return render_template('ways.html', result=c_result)

@app.route('/ways121.html', methods=['POST'])
def handle_form121():
    user_input = request.form.get('userInput')
    c_result = chat(q1[0] + q2[1] + q3[0] + user_input)
    # 결과를 ways.html에 전달하여 렌더링합니다.
    return render_template('ways.html', result=c_result)

@app.route('/ways122.html', methods=['POST'])
def handle_form122():
    user_input = request.form.get('userInput')
    c_result = chat(q1[0] + q2[1] + q3[1] + user_input)
    # 결과를 ways.html에 전달하여 렌더링합니다.
    return render_template('ways.html', result=c_result)

@app.route('/ways123.html', methods=['POST'])
def handle_form123():
    user_input = request.form.get('userInput')
    c_result = chat(q1[0] + q2[1] + q3[2] + user_input)
    # 결과를 ways.html에 전달하여 렌더링합니다.
    return render_template('ways.html', result=c_result)

@app.route('/ways131.html', methods=['POST'])
def handle_form131():
    user_input = request.form.get('userInput')
    c_result = chat(q1[0] + q2[2] + q3[0] + user_input)
    # 결과를 ways.html에 전달하여 렌더링합니다.
    return render_template('ways.html', result=c_result)

@app.route('/ways132.html', methods=['POST'])
def handle_form132():
    user_input = request.form.get('userInput')
    c_result = chat(q1[0] + q2[2] + q3[1] + user_input)
    # 결과를 ways.html에 전달하여 렌더링합니다.
    return render_template('ways.html', result=c_result)

@app.route('/ways133.html', methods=['POST'])
def handle_form133():
    user_input = request.form.get('userInput')
    c_result = chat(q1[0] + q2[2] + q3[2] + user_input)
    # 결과를 ways.html에 전달하여 렌더링합니다.
    return render_template('ways.html', result=c_result)

@app.route('/ways211.html', methods=['POST'])
def handle_form211():
    user_input = request.form.get('userInput')
    c_result = chat(q1[1] + q2[0] + q3[0] + user_input)
    # 결과를 ways.html에 전달하여 렌더링합니다.
    return render_template('ways.html', result=c_result)

@app.route('/ways212.html', methods=['POST'])
def handle_form212():
    user_input = request.form.get('userInput')
    c_result = chat(q1[1] + q2[0] + q3[1] + user_input)
    # 결과를 ways.html에 전달하여 렌더링합니다.
    return render_template('ways.html', result=c_result)

@app.route('/ways213.html', methods=['POST'])
def handle_form213():
    user_input = request.form.get('userInput')
    c_result = chat(q1[1] + q2[0] + q3[2] + user_input)
    # 결과를 ways.html에 전달하여 렌더링합니다.
    return render_template('ways.html', result=c_result)

@app.route('/ways221.html', methods=['POST'])
def handle_form221():
    user_input = request.form.get('userInput')
    c_result = chat(q1[1] + q2[1] + q3[0] + user_input)
    # 결과를 ways.html에 전달하여 렌더링합니다.
    return render_template('ways.html', result=c_result)

@app.route('/ways222.html', methods=['POST'])
def handle_form222():
    user_input = request.form.get('userInput')
    c_result = chat(q1[1] + q2[1] + q3[1] + user_input)
    # 결과를 ways.html에 전달하여 렌더링합니다.
    return render_template('ways.html', result=c_result)

@app.route('/ways223.html', methods=['POST'])
def handle_form223():
    user_input = request.form.get('userInput')
    c_result = chat(q1[1] + q2[1] + q3[2] + user_input)
    # 결과를 ways.html에 전달하여 렌더링합니다.
    return render_template('ways.html', result=c_result)

@app.route('/ways231.html', methods=['POST'])
def handle_form231():
    user_input = request.form.get('userInput')
    c_result = chat(q1[1] + q2[2] + q3[0] + user_input)
    # 결과를 ways.html에 전달하여 렌더링합니다.
    return render_template('ways.html', result=c_result)

@app.route('/ways232.html', methods=['POST'])
def handle_form232():
    user_input = request.form.get('userInput')
    c_result = chat(q1[1] + q2[2] + q3[1] + user_input)
    # 결과를 ways.html에 전달하여 렌더링합니다.
    return render_template('ways.html', result=c_result)

@app.route('/ways233.html', methods=['POST'])
def handle_form233():
    user_input = request.form.get('userInput')
    c_result = chat(q1[1] + q2[2] + q3[2] + user_input)
    # 결과를 ways.html에 전달하여 렌더링합니다.
    return render_template('ways.html', result=c_result)

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
    #c_result = chat(user_input)
    # 폼 데이터를 처리하는 로직을 작성합니다.

    # 결과를 ways.html에 전달하여 렌더링합니다.
    c_result = user_input
    return render_template('ways.html', result=c_result)

# 나머지 HTML 파일에 대해서도 동일한 방식으로 라우트를 추가합니다.

if __name__ == '__main__':
    app.run()