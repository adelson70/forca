# GERENCIAMENTO DAS ROTAS
from flask import render_template, redirect, url_for, request, session
def configure_routes(app):

    @app.route('/', methods=['POST','GET'])
    def inicio():
        return(render_template('index.html'))