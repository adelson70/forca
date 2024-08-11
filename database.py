# BANCO DE DADOS
import sqlite3 as sql

# FUNÇÃO PARA CONECTAR O BANCO DE DADOS
# IRA CRIAR AS TABELAS CASO NÃO EXISTAM
def conectarDB():
    conexao = sql.connect('database/forca.db')
    cursor = conexao.cursor()

    # CRIANDA TABELA ONDE IRA ARMAZENAR AS PALAVRAS CHAVES
    cursor.execute('''
                   CREATE TABLE IF NOT EXISTS palavras(
                   id INTEGER PRIMARY KEY AUTOINCREMENT,
                   palavra VARCHAR(30))
                   ''')

    # CRIANDA A TABELA PARA VALIDAR O USUARIO ADMIN
    cursor.execute('''
                   CREATE TABLE IF NOT EXISTS user(
                   id INTEGER PRIMARY KEY AUTOINCREMENT,
                   nome_usuario VARCHAR(10),
                   senha_usuario VARCHAR(10))
                   ''')
    
    conexao.commit()


    return conexao, cursor

if __name__ == '__main__':
    conectarDB()
    print('banco carregado')