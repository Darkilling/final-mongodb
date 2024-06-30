from flask import *
import requests

app = Flask(__name__)

@app.route('/')
def index():
    datos = requests.get('http://127.0.0.1:2000/')
    if datos.status_code == 200:
        restaurantes = datos.json()
        return render_template('index.html', restaurantes=restaurantes)
    else:
        return jsonify({'error':'Error al obtener los datos desde la ruta de la api Node.js'})

@app.route('/buscar',  methods=['POST'])
def buscar():
    name = request.form['name']
    print(name)
    datos = requests.get(f"http://127.0.0.1:2001/restaurante/{name}")
    
    if datos.status_code == 200:                
        restaurantes = datos.json()
        print(restaurantes)
        return render_template('index.html', restaurantes=restaurantes)
    if datos.status_code == 404:
        return render_template('index.html', message= f'Datos no encontrado {name}' )
    else:
        return render_template('index.html',message= 'Error al obtener los datos desde la ruta de la api Node.js')

if __name__ == '__main__':
    app.run(debug=True)