import jwtwebtoken from 'jsonwebtoken';
import BookService from '../../services/book.service';
import GeneralFunctionService from '../../services/generalfunction';

class BookController {
  constructor() {}

  list = async (req, res) => {
    try {
      let result = await BookService.list();
      console.log('result ', result);
      let finalResponse = [];
      if (result && result.length) {
        finalResponse = result.map((res) => ({
          id: res.iBookId,
          name: res.vName,
          author: res.vAuthor,
          description: res.vDescription,
          publisher: res.vPublisher,
          price: res.iPrice,
          total_pages: res.iTotalPages,
        }));
      }
      res.status(200).json({
        success: 1,
        message: 'Book list found',
        data: finalResponse,
      });
    } catch (error) {
      console.log('error', error);
      res.status(500).json({
        success: 0,
        message: error.code,
      });
    }
  };

  detail = async (req, res) => {
    try {
      let result = await BookService.getBookDetails(req.params.id);
      console.log(result);
      let finalResult = {
        id: result[0].iBookId,
        name: result[0].vName,
        author: result[0].vAuthor,
        description: result[0].vDescription,
        publisher: result[0].vPublisher,
        price: result[0].iPrice,
        total_pages: result[0].iTotalPages,
      };
      res.status(200).json({
        success: 1,
        message: 'Book list found',
        data: finalResult,
      });
    } catch (error) {
      console.log('error', error);
      res.status(500).json({
        success: 0,
        message: err.code,
      });
    }
  };

  create = async (req, res) => {
    try {
      // console.log("body", req.body , req.decoded)
      let bookRecord = {
        vName: req.body.name,
        vAuthor: req.body.author,
        vDescription: req.body.description,
        vPublisher: req.body.publisher,
        iPrice: req.body.price,
        iTotalPages: req.body.total_pages,
        iUserId: req.decoded.id,
      };
      let result = await BookService.createBook(bookRecord);
      console.log('result', result);
      if (result) {
        res.status(200).json({
          success: 1,
          message: 'Record Inserted successfully',
        });
      } else {
        res.status(200).json({
          success: 0,
          message: 'Something went wrong, please try again',
          data: {},
        });
      }
    } catch (error) {
      console.log('error', error);
      res.status(500).json({
        success: 0,
        message: error.code,
      });
    }
  };

  update = async (req, res) => {
    try {
      let bookRecord = {
        vName: req.body.name,
        vAuthor: req.body.author,
        vDescription: req.body.description,
        vPublisher: req.body.publisher,
        iPrice: req.body.price,
        iTotalPages: req.body.total_pages,
        iUserId: req.decoded.id,
      };
      let result = await BookService.updateBookDetails(bookRecord, req.body.id);
      console.log('result', result);
      if (result) {
        res.status(200).json({
          success: 1,
          message: 'Record Updated successfully',
        });
      } else {
        res.status(200).json({
          success: 0,
          message: 'Something went wrong, please try again',
        });
      }
    } catch (error) {
      console.log('error', error);
      res.status(500).json({
        success: 0,
        message: err.code,
      });
    }
  };
}

export default new BookController(BookService);
