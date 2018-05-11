export function selectBook(book) {
    /**
     * add um livro selecionado e retornar uma ação
     * de um objeto  com um tipo property
     */
    // console.log('A book has ben selected: ', book.title)
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}