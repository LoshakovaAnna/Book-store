import React from 'react';
import { connect } from 'react-redux';

import { deleteFavoritesBook } from '../redux/actions';
import { Link }  from 'react-router-dom';

class Favorites extends React.Component {

    handleDeleteFavoritesBook = (e) =>{
        let i = e.currentTarget.value;         
        this.props.deleteFavoritesBook(i);
       //console.log(this.props.favorites);
    }
   
    
    render() {
        const { books, favorites } = this.props; // пришли из стейта редакса (глобальное хранилище)
      //  console.log(favorites);
    
        return (
        <div>
            Избранное
        
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>Название</th>
                    <th>Автор</th>                
                    <th>Цена</th>
                    <th width="15%">Опции</th>
                </tr>
            </thead>
            <tbody>
                {books.map( (book,i) =>  {
                  //  console.log(book, i);              
                    if ( (book) && (favorites.includes(book.id)) ) {
                        return (
                        <tr key={i}>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.price} руб.</td>
                            <td>
                                <div className="d-flex flex-column">
                                    <Link to={`/books/${i}`} className="btn btn-outline-secondary btn-sm">
                                        Посмотреть
                                    </Link>
                                    <button className="btn btn-danger" value={i} onClick={this.handleDeleteFavoritesBook}>Удалить из избранного</button>
                                </div>
                            </td>
                        </tr>
                        )
                    }
                    else return null;
                }
                )}
            </tbody>
        </table>
    </div>
    )}
}


// перегон данных из глобального хранилища в пропсы нашей компоненты
const mapStateToProps = (state) => {
  return {
    books: state.books,
    favorites: state.favorites
  }
}

export default connect(mapStateToProps, { deleteFavoritesBook} )(Favorites);