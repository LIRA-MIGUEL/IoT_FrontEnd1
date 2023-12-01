from flask import Flask, render_template

app = Flask(__name__)

@app.route("/", methods=["GET"])
def index():
    return render_template('index.html')

@app.route("/ver", methods=["GET", "POST"])
def ver():
    return render_template('ver.html')

@app.route("/observar", methods=["GET"])
def observar():
    """Pagina para probar DOM"""
    return render_template('observar.html')

if __name__ == '__main__':
    app.run()
