import type Book from "@/types/Book";

interface User {
  firstName: string;
  lastName: string;
  email: string;
  born: string;
  likedBooks: Array<Book>;
}

export default User;
