const initialState = {
  books: [ 
          {
            id: 0,
            title: "First Book",
            author: "Pushkin",
            price: 45,
            like: 0,
            dislike:0
          },
          {
            id: 1,
            title: "Second Book",
            author: "Esenin",
            price: 45,
            like: 0,
            dislike: 0
          }
        ],
  favorites: [],      
  currentId: 2
}

// чистая функция, которая принимает сугубо 2 параметра
// стейт и экшен, как и любая чистая функция:
// 1) никаких side-эффектов
// 2) никаких мутаций (создание новых данных, иммутабельность)
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "CREATE_BOOK":
      return {                    // вернуть новый стейт
        ...state,                 // разложить в него текущий стейт
        books: [                  // книги пополнить
          ...state.books,         // взять текущие книги и разложить в новый массив
          { 
            ...action.payload,    // пополнить новой книгой
            id: state.currentId   // вложить в книгу id
          }
        ],
        currentId: state.currentId + 1
      };
    
    case "UPDATE_BOOK":
      break;

    case "DELETE_BOOK": {
      const id = action.payload;
      const newbooks = [...state.books];
    //  console.log(id, newbooks);
      //delete newbooks[id];
      newbooks.splice(id,1);
      //console.log(newbooks, "after del");
      
      
    return {...state, books : newbooks};
      }
    //break;
      
    case "ADD_FAVORITES_BOOK":{
      //console.log(state.favorites.includes(Number(action.payload)));
      if (state.favorites.includes(Number(action.payload)))
      {
        alert("Уже есть в избранном ");
        return state;
      }

      else{
        alert("Добавлено в избранное");
        return {                    
          ...state,                 
          favorites: [              
            ...state.favorites,
              Number(action.payload)
            ]
            }
        }
      }
    case "DELETE_FAVORITES_BOOK" :{
      const newFavorites = [...state.favorites];
      const i = newFavorites.indexOf(Number(action.payload));
     // console.log("index in favo",i);
      newFavorites.splice(i,1);
      return {...state, favorites : newFavorites};
    }
    case "CHANGE_LIKE": {
      const bookUpate = [...state.books];
      bookUpate[Number(action.payload)].like++;
      return {...state, books : bookUpate};
    }
    
    case "CHANGE_DISLIKE": {
      const bookUpate = [...state.books];
      bookUpate[Number(action.payload)].dislike++;
      return {...state, books : bookUpate};
    }
    default:
      return state;
  }
}