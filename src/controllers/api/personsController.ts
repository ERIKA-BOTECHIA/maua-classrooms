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
    classroom: string,
    class: string,
    teacher: string,
    review: string;
    midiaKit: MediaKit;
    createdAt: string;
    updatedAt: string;
}
  
