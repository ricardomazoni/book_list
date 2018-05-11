import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectBook } from '../actions/index'
import { bindActionCreators } from 'redux'

class BookList extends Component {
    renderList() {
        return this.props.books.map((book)=>{
            return(
                <li 
                    key={book.title} 
                    onClick={() => this.props.selectBook(book)}
                    className='list-group-item'>
                    {book.title}
                </li>
            )
        })
    }
    render() {
        // console.log(this.props.asdf)
        return (
            <ul className='list-group col-sm-4'>
                {this.renderList()}
            </ul>
        
        )
    }
}

/**
 * 
 * Qualquer coisa que for retornado, 
 * sera criado uma lista de livros
 * 
 */
function mapStateToProps(state) {
    return {
        books: state.books
    }
}

function mapDispatchToProps(dispatch) {
    /**
     * Sempre que o livro for selecionado/
     * chamado, o resultado deve ser passado
     * para todos os reducers
     * 
     * 
     */
    return bindActionCreators({ selectBook: selectBook }, dispatch)
}
/**
 * Ira promover uma lista de livros de um component para um
 * container. E precisa saber sobre envio do dispatch
 * Ao selecionar o livro o mesm ficara disponivel para props
 */
export default connect(mapStateToProps, mapDispatchToProps)(BookList)