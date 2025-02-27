"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
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
        coverImg: { type: String || null, required: false, default: null },
        iconImg: { type: String || null, required: false, default: null },
        pdfFile: { type: String || null, required: false, default: null },
        colorHex: { type: String || null, required: false, default: null },
    },
    addBy: { type: String, required: true },
    reference: { type: String, required: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});
exports.BookModel = mongoose_1.default.model("Book", bookSchema);
//# sourceMappingURL=BookSchema.js.map