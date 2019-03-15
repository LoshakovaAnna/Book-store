import React from 'react';
import { connect } from 'react-redux';

import { createBook } from '../redux/actions';

class Form extends React.Component {
  state = {
    title: '',
    price: '',
    author: 'Есенин',
    arrAuthors : ['Есенин', 'Пушкин', 'Керуак', 'Буковски']
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState( { [name]: value } );
  }

  handleSubmit = (e) => {
    // 1 отменить обновление страницы
    e.preventDefault();

    // 2 достать необходимые данные
    const { title, price,author } = this.state;

    // 3 сложить их вместе
    const book = {
      title: title,
      price: price,
      author: author,
      like:0,
      dislike:0
    }
    
    // дернуть экшен редакса
    this.props.createBook(book);

    // перенаправить на главную страницу
    this.props.history.push('/');
  }

  render() {
    const {title, price, author, arrAuthors} = this.state;
    
    return (
      <form className="form-inline" onSubmit={this.handleSubmit}>
        <div className="form-group mr-3">
          <input 
            type="text" 
            name="title"
            className="form-control"
            placeholder="Название" 
            value={title} 
            onChange={this.handleChange}
            required
          />
        </div>
        <div className="form-group mr-3">
          <select 
                name="author"
                className="form-control"
                placeholder="Автор" 
                value={author} 
                onChange={this.handleChange}
                required
            >
            {arrAuthors.map( (opt,i) =>{
              return (
                 <option key={i}>{opt}</option>
                 )
              })
            }
          </select>
        </div>
        
        <div className="form-group mr-3">
          <input 
            type="number" 
            name="price"
            className="form-control"
            placeholder="Цена" 
            value={price} 
            onChange={this.handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Добавить</button>
      </form>
    )
  }
}

// 1 данные
// 2 действия actions
// connect(1,2)
// connect забрасывает данные и действия в пропсы компоненты
export default connect(null, { createBook })(Form);
