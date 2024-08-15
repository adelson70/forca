# GERENCIAMENTO DAS ROTAS
from flask import render_template, redirect, url_for, request, session
from utils import adicionarPalavra


def configure_routes(app):

    # ROTA DE INICIO DA APLICAÇÃO
    @app.route('/', methods=['POST','GET'])
    def inicio():
        return(render_template('forca.html'))
    
    # ROTA PARA SABER A DIMENSÃO DO DISPOSITIVO
    @app.route('/dimensao', methods=['POST'])
    def dimensao():
        data = request.get_json()
        largura = data.get('largura')
        altura = data.get('altura')
        print(f'{largura}x{altura}')
        
        return redirect(url_for('inicio'))
    

    # ROTA ADMIN PARA ADICIONAR PALAVRAS
    @app.route('/admin', methods=['POST', 'GET'])
    def admin():
        return(render_template(('admin.html')))