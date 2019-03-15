import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


import { changeLike, changeDislike } from '../redux/actions';
class List extends React.Component {

  
  handleLike =(e)=>{
    let i = e.currentTarget.value;         
    this.props.changeLike(i);
    
  }
  handleDislike = (e) =>{
    let i = e.currentTarget.value;         
    this.props.changeDislike(i);
    
  }
  render() {
    const { books } = this.props; // пришли из стейта редакса (глобальное хранилище)
    
    if (books.length === 0) {
      return (
        <div className="alert alert-dark" role="alert">
          Книг нет
        </div>
      )
    }
    
    return (
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Название</th>
            <th>Автор</th>
            <th>Цена</th>
            <th>Like</th>
            <th>Dislike</th>
            <th width="15%">Подробнее</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book,i) => {
            if (book)
            return (
              <tr key={i}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.price} руб.</td>
                <td>
                <h4>{book.like}</h4>
                  <button value={i} onClick={this.handleLike} className="btn btn-success btn-sm">
                    Like
                  </button>
                </td>
                <td>
                  <h4>{book.dislike}</h4>
                <button value={i} onClick={this.handleDislike} className="btn btn-danger   btn-sm">
                    Dislike
                  </button>
                </td>
                <td>
                  <Link to={`/books/${i}`} className="btn btn-info btn-sm">
                    Подробнее
                  </Link>
                </td>
                
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
}

// перегон данных из глобального хранилища в пропсы нашей компоненты
const mapStateToProps = (state) => {
  return {
    books: state.books
  }
}
export default connect(mapStateToProps, { changeLike, changeDislike })(List);