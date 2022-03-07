import React, { useEffect, useState } from "react";
import { BOOK_LIST_URL } from '../constants'
import { useHistory } from "react-router-dom";



const BookListPage = () => {

    const history = useHistory();

    const [bookList, updateBookList] = useState([]);
    // useState is used if any content has to be updated at some point.
    // useState returns a stateful value, and a function to update it. 
    // here bookList is the state value and updateBookList is the function reference.

    useEffect(() => {

        async function fetchData() {
            // Since the fetchData is async we need to wait for fetch api to resolve the promise object.

            const bookListResponse = await fetch(BOOK_LIST_URL);
            const bookListJsonData = await bookListResponse.json();

            // OPTIONAL
            // console.log(`Printing book list in json format: ${bookListJsonData}`);

            // Use the function updateBookList to update the state value of bookList with bookListJsonData 
            updateBookList(bookListJsonData)

        }

        fetchData();
    }, []);


    // Once the bookList variable's state value updates the below returned values will be rendered.
    return <div>
        {
            bookList.map(book => {
                // using map is best practice in JS to loop throught he contents.
                return <div>
                    <p>{"Title : " + book.title}</p>
                    <p>{"Author : " + book.author}</p>
                    <img src={book.cover} title={book.title} onClick={() => history.push(`/bookdetails/${book.book_id}`)}></img>
                </div>

            })
        }
    </div>
};

export default BookListPage;