import multer from "multer";

const storage = multer.memoryStorage();

// single storage

export const singleUpload = multer({ storage }).single("file");

// multi storage

export const multiUpload = multer({ storage }).array("files", 5);
