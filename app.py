from flask import Flask, render_template, redirect, url_for

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/search')
def search():
    return render_template('search.html')

@app.route('/edu/<skill>')
def edu(skill):
    # 여기에 선택한 기술에 따라 처리하는 코드 추가 가능
    return render_template('edu/{}.html'.format(skill.lower()))

# 새로운 라우트 추가
@app.route('/process_form', methods=['POST'])
def process_form():
    # 폼에서 전달된 데이터를 처리하는 코드 추가
    return redirect(url_for('search'))

    

if __name__ == '__main__':
    app.run(debug=True)
