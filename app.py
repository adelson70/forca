from flask import Flask
from routes import configure_routes


app = Flask(__name__)

# CHAVE DO COOKIE
app.secret_key = '7c9b4342db84949350c9e19ee4f72ac7cc47c7afa477f5b2b9fc9bb8401c0aa0'

if __name__ == '__main__':
    configure_routes(app)

    app.run(debug=True, host='192.168.10.26')