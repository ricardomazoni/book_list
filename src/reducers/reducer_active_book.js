/**
 * 
 * @param {*} state -> estatdo atual
 * @param {*} action -> acao
 * 
 * O argumento de um estado não se aplica
 * ao state, somente o state desse reducer é
 * responsavel pela ação
 * 
 */
export default function(state=null, action) {
    switch(action.type) {
        case 'BOOK_SELECTED':
            return action.payload
    }
    return state
}