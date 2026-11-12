import os
from flask import Flask, render_template, jsonify, send_from_directory

app = Flask(__name__)

# Catálogo base estructurado (puedes migrarlo a PostgreSQL o SQLite luego)
PRODUCTOS = [
    {
        "id": 1,
        "nombre": "Body Colegiala Chic & Corbata",
        "categoria": "bodys",
        "precio": 22.00,
        "tallas": ["S", "M", "L"],
        "imagen": "img/colegiala.jpg",
        "etiqueta": "BESTSELLER"
    },
    {
        "id": 2,
        "nombre": "Conjunto Noir Ribete Blanco",
        "categoria": "negro",
        "precio": 22.00,
        "tallas": ["S", "M", "L"],
        "imagen": "img/noir-blanco.jpg",
        "etiqueta": "EDICIÓN ESPECIAL"
    },
    {
        "id": 3,
        "nombre": "Conjunto Rojo Carmesí con Arnés",
        "categoria": "rojo",
        "precio": 22.00,
        "tallas": ["S", "M", "L"],
        "imagen": "img/rojo-arnes.jpg",
        "etiqueta": "PIEZA ÍCONO"
    },
    {
        "id": 4,
        "nombre": "Conjunto Gargantilla Choker Noir",
        "categoria": "negro",
        "precio": 24.00,
        "tallas": ["S", "M", "L"],
        "imagen": "img/choker-noir.jpg",
        "etiqueta": "ALTA COSTURA"
    },
    {
        "id": 5,
        "nombre": "Bralette Noir Clásico Escote V",
        "categoria": "negro",
        "precio": 20.00,
        "tallas": ["S", "M", "L"],
        "imagen": "img/bralette-clasico.jpg",
        "etiqueta": "ESENCIAL VIP"
    },
    {
        "id": 6,
        "nombre": "Body Arnés & Malla Transparente",
        "categoria": "bodys",
        "precio": 22.00,
        "tallas": ["S", "M", "L"],
        "imagen": "img/body-malla.jpg",
        "etiqueta": "BONDAGE CHIC"
    }
]

@app.route('/')
def index():
    return render_template('index.html', productos=PRODUCTOS)

@app.route('/api/productos')
def api_productos():
    return jsonify(PRODUCTOS)

@app.route('/assets/<path:filename>')
def legacy_assets(filename):
    """Compatibilidad para referencias directas a /assets/"""
    return send_from_directory(os.path.join(app.root_path, 'static', 'img'), filename)

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)

