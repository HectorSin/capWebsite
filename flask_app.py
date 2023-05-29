from flask import Flask, render_template

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
def page3():
    return render_template('form1.html')

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

@app.route('/ways.html')
def page9():
    return render_template('ways.html')

# 나머지 HTML 파일에 대해서도 동일한 방식으로 라우트를 추가합니다.

if __name__ == '__main__':
    app.run()