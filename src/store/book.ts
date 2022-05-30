import { ref } from 'vue';
import { defineStore } from 'pinia'
import books from '@/data/books.json'
import type Book from '@/types/Book';
import { useUserStore } from '../store/user'

export const useBookStore = defineStore('BookStore', {

    state: () => {
        const likedBooks = [] as Book[];
        const userStore = useUserStore();

        return { books, likedBooks, userStore };
    },

    getters: {
        getBooks: (state) => {
            let items = localStorage.getItem('likedBooks');
            state.likedBooks = (items === null) ? [] : JSON.parse(items);

            return state.books;
        },
    },

    actions: {

        isBookmarked (id: number): boolean {
            let persistedBooks = localStorage.getItem('likedBooks');
            let items = (persistedBooks === null) ? null : JSON.parse(persistedBooks);

            if (!items) return false;

            let obj = items.find((element: { id: number; }) => element.id === id);

            return obj !== undefined;
        },

        addBookmark(book: Book, event: any, flag: boolean) {
            if (this.isBookmarked(book.id)) {
                let items = JSON.parse(localStorage.getItem('likedBooks') ?? '');
                this.likedBooks = items;
                this.likedBooks.splice(items.findIndex((element: { id: number; }) => element.id === book.id), 1);
                this.userStore.removeBookmark(book.id);
                if (flag) event.target.innerHTML = 'Add';
            } else {
                this.likedBooks.push(book);
                this.userStore.addBook(book);
                if (flag) event.target.innerHTML = 'Remove';
            }
            localStorage.setItem('likedBooks', JSON.stringify(this.likedBooks));
        },
    }
})
