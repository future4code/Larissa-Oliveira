class Livro:
    def __init__(self, titulo = '', copias = 0, preco = 0.0):
        self.titulo = titulo
        self.copias_em_estoque = copias
        self.preco = preco

    def __str__(self):
        return 'Título: {}; Estoque: {}; Preço: R${}'.format(self.titulo, self.copias_em_estoque, self.titulo)

    def vender(self, copias_vendidas):
        self.copias_em_estoque -= copias_vendidas

    def atualizar_preco(self, novo_preco):
        if novo_preco > 0.0:
            self.preco = novo_preco
        else:
            print('Novo preço inválido < R$ 0.0. Vou manter o preço anterior!')

livros = [Livro('João das Neves e os Guerreiros', 23, 10.0), Livro('Introdução a Python', 30, 27.50),
          Livro('Lógica de Programação Avançada', 2, 100.0), Livro('Java para Iniciantes', 15, 38.50)]