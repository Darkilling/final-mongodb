from flask import *
import requests

app = Flask(__name__)

@app.route('/')
def index():
    datos = requests.get('http://127.0.0.1:2000/')
    if datos.status_code == 200:
        propiedad = datos.json()
        return render_template('index.html', propiedad=propiedad)
    else:
        return jsonify({'error': 'No se pudo obtener la información del puerto 2000'})

if __name__ == '__main__':
    app.run(debug=True)