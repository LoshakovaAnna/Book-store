// Action (действие)
// простой объект, который влияет на редьюсер

// const action1 = { type: "CREATE_BOOK", payload: {name: "qwe", price: 10} };
// const action2 = { type: "UPDATE_BOOK", payload: 1 }; // 1 - bookId
// const action3 = { type: "DELETE_BOOK", payload: 2 }; // 2 - bookId
// const action4 = { type: "FETCH_BOOK", payload: [{},{}] };

// простые экшены не гибкие
// поэтому мы напишем функции, которые создают экшены (простые объекты) динамически

// Action Creators - Создатели Экшенов
export const createBook = (book)   => ({ type: "CREATE_BOOK", payload: book });
export const updateBook = (bookId) => ({ type: "UPDATE_BOOK", payload: bookId });
export const deleteBook = (bookId) => ({ type: "DELETE_BOOK", payload: bookId });
export const addFavoritesBook = (bookId) => ({ type: "ADD_FAVORITES_BOOK", payload: bookId });
export const deleteFavoritesBook = (bookId) => ({ type: "DELETE_FAVORITES_BOOK", payload: bookId });
export const changeLike = (bookId) => ({ type: "CHANGE_LIKE", payload: bookId });
export const changeDislike = (bookId) => ({ type: "CHANGE_DISLIKE", payload: bookId });


