from flask import Flask, jsonify, render_template, request


app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/dados")
def dados():
    return render_template("dados.html")

@app.route("/recebe-dados", methods=['POST'])
def recebe_dados():
    nome = request.form['nome-aluno']
    email = request.form['email-aluno']
    return jsonify(nome=nome, email=email)


@app.route("/dados-json")
def dados_json():
    return render_template("dadosJson.html")

@app.route("/recebe-json", methods=['POST'])
def recebe_json():
    json = request.get_json()
    nome = json['nome']
    email =json['email']
    return jsonify(nome=nome, email=email)


if __name__ == '__main__':
    app.run("localhost", port=5000, debug=True)