# GERENCIAMENTO DAS ROTAS
from flask import render_template, redirect, url_for, request, session
def configure_routes(app):

    # ROTA DE INICIO DA APLICAÇÃO
    @app.route('/', methods=['POST','GET'])
    def inicio():
        return(render_template('forca.html'))
    
    # ROTA PARA ...