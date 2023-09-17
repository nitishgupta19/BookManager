import db from '../config/database';

class BookService {
  constructor() {}

  list() {
    return db('book').select();
  }

  createBook = (data) => {
    return db('book').insert(data);
  };

  getBookDetails = (id) => {
    return db('book').select('*').where({ iBookId: id });
  };

  updateBookDetails = (data, id) => {
    return db('book')
      .select()
      .where({
        iBookId: id,
      })
      .update(data);
  };
}

export default new BookService();
