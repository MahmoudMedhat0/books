import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAll } from "../../Helpers/books";
const renderBooks = (books) => {

    return (
        books.map((item) => {
            return (
              <>
                <p>title: {item.title}</p>
                <p>sub: {item.subtitle}</p>
                 <p>authors: {item.authors}</p>
                <p>shelf: {item.shelf}</p>
                <p>{item.publishedDate}</p>
                <p>{item.description}</p>
                <p>{item.pageCount}</p>
                <p>{item.printType}</p>
                <p>{item.averageRating}</p>
                <p>{item.ratingsCount}</p>
                <p>{item.maturityRating}</p>
                <p>{item.allowAnonLogging}</p>
                <p>{item.contentVersion}</p>
                <p>{item.id}</p>
              </>
            );
          })
      ) 
  
};
function Home() {
  const [books, setbooks] = useState([]);

  useEffect(() => {
    getAll()
      .then((res) => {
        setbooks(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    renderBooks(books)
  )
}

export default Home;
