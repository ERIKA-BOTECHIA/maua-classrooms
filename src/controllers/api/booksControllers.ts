// controllers/booksController.ts
import express, { Express, Request, Response } from "express";
import multer from "multer";
import path from "path";
import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config() 
interface MediaKit {
  coverImg?: string;
  iconImg?: string;
  pdfFile?: string;
  colorHex?: string;
}

interface IBook extends Document {
    title: string;
    releasedYear: number;
    quantity: number;
    author: string;
    ISBN: string;
    editionNumber: number;
    publisher: string;
    review?: string;
    pageCount?: number;
    genre?: string;
    collection?: string;
    midiaKit: MediaKit;
    addBy: string;
    reference?: string;
    createdAt: Date;
    updatedAt: Date;
  }
  

const bookSchema = new mongoose.Schema<IBook>({
  title: { type: String, required: true },
  releasedYear: { type: Number, required: true },
  quantity: { type: Number, required: true },
  author: { type: String, required: true },
  ISBN: { type: String, required: true },
  editionNumber: { type: Number, required: true },
  publisher: { type: String, required: true },
  review: { type: String, required: false },
  pageCount: { type: Number, required: false },
  genre: { type: String, required: false },
  collection: { type: String, required: false },
  midiaKit: {
    coverImg: { type: String, required: false },
    iconImg: { type: String, required: false },
    pdfFile: { type: String, required: false },
    colorHex: { type: String, required: false },
  },
  addBy: { type: String, required: true },
  reference: { type: String, required: false }
},{
    collection: "Books"
}); // Specify the collection name
;

 const BookModel = mongoose.model<IBook>('Books' , bookSchema);

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    const storageFolder= process.env.STORAGE_FOLDER||path.resolve("/STORAGE/")
    callback(null,storageFolder);
  },
  filename: (req, file, callback) => {
    const uniqueSuffix = Date.now() + "-" + file.originalname; // Added hyphen for clarity
    callback(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage }).fields([
  { name: "coverImg", maxCount: 1 },
  { name: "iconImg", maxCount: 1 },
  { name: "pdfFile", maxCount: 1 },
]);

export class BooksController {
  static createBook(req: Request, res: Response) {
    upload(req, res, async (err: any) => {
      if (err) {
        return res.status(500).json({ message: "Error uploading files", error: err });
      }

      const { title, releasedYear, quantity, author, ISBN, editionNumber, publisher, review, pageCount, genre, collection, addBy, reference } = req.body;

      const files = req.files as { [fieldname: string]: Express.Multer.File[] } | undefined;

      const coverImg = files?.coverImg?.[0]?.filename;
      const iconImg = files?.iconImg?.[0]?.filename;
      const pdfFile = files?.pdfFile?.[0]?.filename;

      const newBook = new BookModel({
        title,
        releasedYear,
        quantity,
        author,
        ISBN,
        editionNumber,
        publisher,
        review,
        pageCount,
        genre,
        collection,
        addBy,
        reference,
        midiaKit: { coverImg, iconImg, pdfFile }
      });

      try {
        const savedBook = await newBook.save();
        res.status(201).json(savedBook);
      } catch (error) {
        res.status(500).json({ message: "Error creating book", error });
      }
    });
  }

  // ... other methods (getBooks, getBookById, deleteBook)

  static updateBook(req: Request, res: Response) {
    const { id } = req.params;
    upload(req, res, async (err: any) => {
      if (err) {
        return res.status(500).json({ message: "Error uploading files", error: err });
      }

      const { title, releasedYear, quantity, author, ISBN, editionNumber, publisher, review, pageCount, genre, collection, addBy, reference } = req.body;

      const files = req.files as { [fieldname: string]: Express.Multer.File[] } | undefined;

      const updatedData: Partial<IBook> = { // Use Partial<IBook>
        title, releasedYear, quantity, author, ISBN, editionNumber, publisher, review, pageCount, genre, collection, addBy, reference,
      };

      if (files?.coverImg?.[0]?.filename) {
        updatedData.midiaKit = { ...updatedData.midiaKit, coverImg: files.coverImg[0].filename }; // Spread existing midiaKit
      }
      if (files?.iconImg?.[0]?.filename) {
        updatedData.midiaKit = { ...updatedData.midiaKit, iconImg: files.iconImg[0].filename };
      }
      if (files?.pdfFile?.[0]?.filename) {
        updatedData.midiaKit = { ...updatedData.midiaKit, pdfFile: files.pdfFile[0].filename };
      }
       if (files || req.body.colorHex) {
            updatedData.midiaKit = {...updatedData.midiaKit, colorHex: req.body.colorHex}
        }


      try {
        const updatedBook = await BookModel.findByIdAndUpdate(id, updatedData, { new: true });
        if (!updatedBook) {
          return res.status(404).json({ message: "Book not found" });
        }
        res.status(200).json(updatedBook);
      } catch (error) {
        res.status(500).json({ message: "Error updating book", error });
      }
    });
  }



  static async deleteBook(req: Request, res: Response) { // Added async
    const { id } = req.params;

    try {
      const deletedBook = await BookModel.findByIdAndDelete(id); // Await the result
      if (!deletedBook) {
        return res.status(404).json({ message: "Book not found" });
      }
      res.status(200).json({ message: "Book deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting book", error });
    }
  }

 // ... (createBook and updateBook methods remain the same)

 static async getBooks(req: Request, res: Response) {
    try {
      const book = await BookModel.find();
      res.status(200).json(book);
    } catch (error) {
      res.status(500).json({ message: "Error fetching books", error });
    }
  }

  static async getBookById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const book = await BookModel.findById(id);
      if (!book) {
        return res.status(404).json({ message: "Book not found" });
      }
      res.status(200).json(book);
    } catch (error) {
      res.status(500).json({ message: "Error fetching book", error });
    }
  }


  static async getBookSearch(req: Request, res: Response) {
    try {
      const searchName = req.query.searchName as string | undefined;
      const searchAuthor = req.query.searchAuthor as string |undefined;
      const searchPublisher = req.query.searchPublisher as string|undefined
      const book = await BookModel.find();
      res.status(200).json(book);
    } catch (error) {
      res.status(500).json({ message: "Error fetching books", error });
    }
  }


}
