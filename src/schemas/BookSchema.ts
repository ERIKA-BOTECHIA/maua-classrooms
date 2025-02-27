// models/Book.ts
import mongoose from "mongoose";

import { MidiaKit } from "../interfaces/interfaces";
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
  midiaKit: MidiaKit;
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
    coverImg: { type: String||null, required: false , default: null},
    iconImg: { type: String||null, required: false ,default: null},
    pdfFile: { type: String||null, required: false , default: null},
    colorHex: { type: String||null, required: false , default: null },
  },
  addBy: { type: String, required: true },
  reference: { type: String, required: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const BookModel = mongoose.model<IBook>("Book", bookSchema);
