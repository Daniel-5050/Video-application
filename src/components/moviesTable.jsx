import React,{Component} from 'react';
import Like from './common/Like';
import Table from './common/table'; 
import { Link } from 'react-router-dom';



class MoviesTable extends Component {

    columns = [
        { path:'title',label: 'Title' ,content:movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>},
        { path:'genre.name',label: 'Genre'},
        { path:'numberInstock',label: 'Stock'},
        { path:'dailyRentalRate',label: 'Rate'},
        {
            
        key:'like', content: movie => <Like liked={movie.liked}
        onClick={ ()=> this.props.onLike(movie)}/> },

        {
        key:'delete', content: movie => ( <button onClick={() => this.props.onDelete(movie)}
        className='btn btn-danger btn-sm'>Delete</button> )},
    ]

   
    
    render() { 
        const {movies, sortColum,onSort,} = this.props;

            return (
                <Table columns={this.columns} data ={movies} sortColum ={sortColum} onSort={onSort}/>
            );
        
    }
}
 


// -----------------------------------------------



 
export default MoviesTable;