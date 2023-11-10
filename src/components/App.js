import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';

//Listeleyeceğimiz film sayısı belli olmadığı için state kullanacağız, state içinde class component kullanacağız
//state bir obje olduğu için, state içerisindeki array property olacaktır
//Parent Component(App.js)' dan child component(MovieList)'a geçmemizin en kolay yolu MovieList'e prop oluşturmaktır

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
        ],

        searchQuery: ""
    }  

    deleteMovie = (movie) => {
        const newMovieList = this.state.movies.filter(
            m => m.id !== movie.id
        );

        this.setState(state => ({
            movies: newMovieList
        }))
    }

    searchMovie = (event) => {
        //console.log(event.target.value)
        this.setState({searchQuery: event.target.value})
    }

    render() {

        let filteredMovies = this.state.movies.filter(
            (movie) => {
                return movie.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
            }
        )

        return(
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SearchBar 
                            searchMovieProp = {this.searchMovie}
                        />
                    </div>
                </div>
                <MovieList 
                movies={filteredMovies} 
                deleteMovieProp = {this.deleteMovie}    />
            </div>
        );
    }
};

export default App;