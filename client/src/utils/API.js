import axious from "axios";
import axios from "axios";

export default {
    createBook(){
        return axios.post("/api/books", data);
    },
    
    deleteBook(){
        return axios.delete(`/api/books/${bookId}`, data);
    },
    getBooks(){
        return axios.get("/api/books");
    }
}