import React from "react";
import SearchBar from './SearchBar'
import MovieList from './MovieList'

//Listeleyeceğimiz film sayısı belli olmadığı için state kullanacağız, state içinde class component kullanacağız
//state bir obje olduğu için, state içerisindeki array property olacaktır

class  App extends React.Component {

    state = {
        movies : [
            {
              "id": 1,
              "name": "The Flash",
              "rating": 8.3,
              "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
              "imageURL": "https://image.tmdb.org/t/p/w220_and_h330_face/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
            },
    
            {
              "id": 2,
              "name": "Interstellar",
              "rating": 6.8,
              "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
              "imageURL": "https://image.tmdb.org/t/p/w220_and_h330_face/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
            },
            {
                "id": 3,
                "name": "Arrow",
                "rating": 7.9,
                "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
                "imageURL": "https://image.tmdb.org/t/p/w220_and_h330_face/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
              }
                ]
     }  

    render() {

        return(
            <div className="container">
                <div className="row">
                    <dic className="col-lg-12">
                        <SearchBar />
                    </dic>
                </div>
                <MovieList />
            </div>
        );
    }
};

export default App;