import React from 'react';
import { connect } from 'react-redux';

import { deleteBook, addFavoritesBook } from '../redux/actions';

class Single extends React.Component {

  handleDeleteBook =()=>{
    const currendId = this.props.match.params.id;
    // дернуть экшен редакса
    this.props.deleteBook(currendId);

    // перенаправить на главную страницу
    this.props.history.push('/');
  }
  
  handleAddFavorites =()=>{
    const currendId = this.props.match.params.id;
    // дернуть экшен редакса
    this.props.addFavoritesBook(currendId);

    // перенаправить на главную страницу
    //this.props.history.push('/');
  }


  render() {
    const { books } = this.props; // пришли из стейта редакса (глобальное хранилище)
   // console.log(books);
    
    const currendId = this.props.match.params.id;
    //console.log(currendId);
    
    const book = books[currendId];
   // console.log(book);
    return (
      <div>
        Книга
        
        <h1>Название: {book.title}</h1>
        <h2>Автор: {book.author}</h2>
        <p>Цена: {book.price} руб.</p>
        <div className="d-flex flex-row justify-content-between">
        <button className="btn btn-warning" onClick={this.handleAddFavorites}>В избранное</button>
        <button className="btn btn-danger" onClick={this.handleDeleteBook}>Удалить</button>
        </div>
        
      </div>
    )
  }
}

//export default Single;

// перегон данных из глобального хранилища в пропсы нашей компоненты
const mapStateToProps = (state) => {
  return {
    books: state.books
  }
}

export default connect(mapStateToProps, {deleteBook, addFavoritesBook} )(Single);