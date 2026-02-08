const livro = {
    titulo: 'O Hobbit',
    autor: 'J. R. R. Tolkien',
    paginas: 310,
    editora: 'Abril'
}

livro.publicado = true
livro.idiomas = ['Ingles', 'Português', 'Espanhol']

livro.idiomas.push('Mandarim')
livro.idiomas.push('Francês')

console.log('Livro antes: ', livro)

delete livro.paginas

console.log('Livro depois: ', livro)

console.log('Autor do livro', livro['autor'])

console.log('Editora: ', livro['editora'])
