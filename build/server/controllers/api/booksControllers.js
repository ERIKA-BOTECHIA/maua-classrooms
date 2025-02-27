"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksController = void 0;
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const bookSchema = new mongoose_1.default.Schema({
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
}, {
    collection: "Books"
});
;
const BookModel = mongoose_1.default.model('Books', bookSchema);
const storage = multer_1.default.diskStorage({
    destination: (req, file, callback) => {
        const storageFolder = process.env.STORAGE_FOLDER || path_1.default.resolve("/STORAGE/");
        callback(null, storageFolder);
    },
    filename: (req, file, callback) => {
        const uniqueSuffix = Date.now() + "-" + file.originalname;
        callback(null, file.fieldname + "-" + uniqueSuffix);
    },
});
const upload = (0, multer_1.default)({ storage }).fields([
    { name: "coverImg", maxCount: 1 },
    { name: "iconImg", maxCount: 1 },
    { name: "pdfFile", maxCount: 1 },
]);
class BooksController {
    static createBook(req, res) {
        upload(req, res, (err) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e, _f;
            if (err) {
                return res.status(500).json({ message: "Error uploading files", error: err });
            }
            const { title, releasedYear, quantity, author, ISBN, editionNumber, publisher, review, pageCount, genre, collection, addBy, reference } = req.body;
            const files = req.files;
            const coverImg = (_b = (_a = files === null || files === void 0 ? void 0 : files.coverImg) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.filename;
            const iconImg = (_d = (_c = files === null || files === void 0 ? void 0 : files.iconImg) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.filename;
            const pdfFile = (_f = (_e = files === null || files === void 0 ? void 0 : files.pdfFile) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.filename;
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
                const savedBook = yield newBook.save();
                res.status(201).json(savedBook);
            }
            catch (error) {
                res.status(500).json({ message: "Error creating book", error });
            }
        }));
    }
    static updateBook(req, res) {
        const { id } = req.params;
        upload(req, res, (err) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e, _f;
            if (err) {
                return res.status(500).json({ message: "Error uploading files", error: err });
            }
            const { title, releasedYear, quantity, author, ISBN, editionNumber, publisher, review, pageCount, genre, collection, addBy, reference } = req.body;
            const files = req.files;
            const updatedData = {
                title, releasedYear, quantity, author, ISBN, editionNumber, publisher, review, pageCount, genre, collection, addBy, reference,
            };
            if ((_b = (_a = files === null || files === void 0 ? void 0 : files.coverImg) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.filename) {
                updatedData.midiaKit = Object.assign(Object.assign({}, updatedData.midiaKit), { coverImg: files.coverImg[0].filename });
            }
            if ((_d = (_c = files === null || files === void 0 ? void 0 : files.iconImg) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.filename) {
                updatedData.midiaKit = Object.assign(Object.assign({}, updatedData.midiaKit), { iconImg: files.iconImg[0].filename });
            }
            if ((_f = (_e = files === null || files === void 0 ? void 0 : files.pdfFile) === null || _e === void 0 ? void 0 : _e[0]) === null || _f === void 0 ? void 0 : _f.filename) {
                updatedData.midiaKit = Object.assign(Object.assign({}, updatedData.midiaKit), { pdfFile: files.pdfFile[0].filename });
            }
            if (files || req.body.colorHex) {
                updatedData.midiaKit = Object.assign(Object.assign({}, updatedData.midiaKit), { colorHex: req.body.colorHex });
            }
            try {
                const updatedBook = yield BookModel.findByIdAndUpdate(id, updatedData, { new: true });
                if (!updatedBook) {
                    return res.status(404).json({ message: "Book not found" });
                }
                res.status(200).json(updatedBook);
            }
            catch (error) {
                res.status(500).json({ message: "Error updating book", error });
            }
        }));
    }
    static deleteBook(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const deletedBook = yield BookModel.findByIdAndDelete(id);
                if (!deletedBook) {
                    return res.status(404).json({ message: "Book not found" });
                }
                res.status(200).json({ message: "Book deleted successfully" });
            }
            catch (error) {
                res.status(500).json({ message: "Error deleting book", error });
            }
        });
    }
    static getBooks(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const book = yield BookModel.find();
                res.status(200).json(book);
            }
            catch (error) {
                res.status(500).json({ message: "Error fetching books", error });
            }
        });
    }
    static getBookById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            try {
                const book = yield BookModel.findById(id);
                if (!book) {
                    return res.status(404).json({ message: "Book not found" });
                }
                res.status(200).json(book);
            }
            catch (error) {
                res.status(500).json({ message: "Error fetching book", error });
            }
        });
    }
    static getBookSearch(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const searchName = req.query.searchName;
                const searchAuthor = req.query.searchAuthor;
                const searchPublisher = req.query.searchPublisher;
                const book = yield BookModel.find();
                res.status(200).json(book);
            }
            catch (error) {
                res.status(500).json({ message: "Error fetching books", error });
            }
        });
    }
}
exports.BooksController = BooksController;
//# sourceMappingURL=booksControllers.js.map