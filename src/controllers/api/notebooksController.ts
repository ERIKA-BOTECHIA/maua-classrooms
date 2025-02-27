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

interface INotebook extends Document {
    releasedYear: number;
    period: number;
    author: string;
    key: string;
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
  
