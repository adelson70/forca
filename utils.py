# GERENCIAMENTO DAS FUNÇÕES
from database import conectarDB
def adicionarPalavra(palavra):
    conexao, cursor = conectarDB()

    cursor.execute('INSERT INTO palavras (palavra) VALUES (?)',(palavra,))
    conexao.commit()

    return 'success'
