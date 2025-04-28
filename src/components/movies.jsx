import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { getMovies } from '../services/fakeMovieService';
import Pagination from './common/Pagination';
import { paginate } from '../utils/Paginate';
import ListGroup from './common/listGroup';
import { genres, getGenres } from '../services/fakeGenreService';
import MoviesTable from './moviesTable';
import _ from 'lodash';
import SearchBox from "./searchBox";





class Movies extends Component {
    state = { 
        movies:[],
        pageSize: 4,
        currentPage:1,
        genres:[],
        sortColum:{ path:'title', order:'asc'} ,
        searchQuery: "",
        selectedGenre: null,


     };


     componentDidMount(){

        const genres = [{ _id:"", name: ' All Genres'}, ...getGenres()]
        this.setState({ movies:getMovies(), genres});

     };
     
     handleDelete =(movie)=>{
            const movies = this.state.movies.filter(m=>m._id !==movie._id);
            this.setState({movies})

     };

     handleLike =(movie)=>{
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movies[index]};
        movies[index].liked = !movies[index].liked;
        this.setState({movies});

     };


     handlePageChange = page =>{
        this.setState({currentPage:page});


     };


     handleGenreSelect= genre =>{

            this.setState({ selectedGenre:genre,currentPage:1});
     };

     handleSort = sortColum =>{
        this.setState({ sortColum});
      };


      handleSearch = query => {
         this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
       };





     getPagedData =() =>{

      const {pageSize,
            currentPage,
            selectedGenre,
            sortColum,
            searchQuery,
            movies:allMovies} = this.state; 
            
            
   let filtered = allMovies;
    if (searchQuery)
      filtered = allMovies.filter(m =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (selectedGenre && selectedGenre._id)
      filtered = allMovies.filter(m => m.genre._id === selectedGenre._id);




      // const filtered = selectedGenre && selectedGenre._id
      // ? allMovies.filter(m=>m.genre._id === selectedGenre._id) 
      // :allMovies;

    const sorted = _.orderBy(filtered, [sortColum.path], [sortColum.order]);

     const movies = paginate(sorted,currentPage,pageSize,);

     return{totalCount: filtered.length, data :movies}


     };

    render() 
    
    {   const{length:count} =this.state.movies;
        const {
            pageSize,
            currentPage,
            sortColum,
            searchQuery
             } = this.state;
        
        if(count=== 0)
        return <p>There is no movie in the Database</p>;

        const { totalCount,data: movies} = this.getPagedData();

      
        
        
        return ( 

            <div className='row' style={{marginTop:'50px'}}>

            <div className='col-3'>
                <ListGroup items={this.state.genres}
                selectedItem = {this.state.selectedGenre} 
               
                onItemSelect ={this.handleGenreSelect} />
            </div>

            <div className='col'>

            <Link
            to="/movies/new"
            className="btn btn-primary"
            style={{ marginBottom: '20px' }}
          >
            New Movie
          </Link>




            <p>Showing {totalCount} movies in the Database</p>,
            <SearchBox value={searchQuery} onChange={this.handleSearch} />
            

            <MoviesTable movies= {movies}
             onLike={this.handleLike}
             sortColum={sortColum}
             onDelete={this.handleDelete}
             onSort={this.handleSort}/>
       

        <Pagination
         itemsCount={totalCount}
         pageSize ={pageSize}
         currentPage={currentPage}
         onPageChange={this.handlePageChange}/>
            </div>

            

            </div>
          );
    }
}
 
export default Movies; 