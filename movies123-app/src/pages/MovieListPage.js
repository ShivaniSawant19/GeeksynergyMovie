import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../pages/style.css';
import Button from 'react-bootstrap/Button';

import { Card, Row, Col, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';



const MovieListPage = () => {
  const [movies, setMovies] = useState([]);
 

  useEffect(() => {
    const fetchData = async () => {
        let data = await axios.post('https://hoblist.com/api/movieList',{ category: 'movies',
             language: 'kannada',
              genre: 'all',
              sort: 'voting'});
        console.log(data.data.result);
        setMovies(data.data.result);
      
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Kannada Movie List</h2><br />

      <Container style={{ width: '30rem'}}>
            <Row >
              </Row>
              <Row>
                {movies.map(movie => (

<MDBCard style={{ maxWidth: '540px' }}>
<MDBRow className='g-0'>
  <MDBCol md='4'>
    <MDBCardImage style={{maxHeight : 'fit-content'}} src={movie.poster} alt='...' fluid />
  </MDBCol>
  <MDBCol md='8'>
    <MDBCardBody>
    <Card.Header>Movie : {movie.title}</Card.Header>
      <MDBCardText>
      <Card.Text>Genre : {movie.genre} </Card.Text> 
      <Card.Text>Director :{movie.director}</Card.Text>
      <Card.Text>Starring : {movie.stars}</Card.Text>
      </MDBCardText>
      <MDBCardText>
      <Card.Text> {movie.language} | {movie.releasedDate} </Card.Text>
      <Card.Text style={{color: 'blue' }} >Views : {movie.pageViews}M | Voted by {movie.voting} people </Card.Text>
     
    
      </MDBCardText>
    </MDBCardBody>  
  </MDBCol>
</MDBRow><Button variant="primary">Watch Trailer</Button><Card.Text />
<Card.Text></Card.Text>
</MDBCard>
                //    <Card className="text-center">
                //    <Card.Header>Movie : {movie.title}</Card.Header>
                //    <Card>    <Card.Img style={{ height: '20rem' }} src={movie.poster}/></Card>
                //    <Card>
                //    <Card.Body>
                //      <Card.Text>Genre : {movie.genre} </Card.Text> 
                //      <Card.Text>Director :{movie.director}</Card.Text>
                //       <Card.Text>Starring : {movie.stars}</Card.Text>
                //       <Card.Text> {movie.language} | {movie.releasedDate} </Card.Text>
                //       <Card.Text style={{color: 'blue' }} >Views : {movie.pageViews}M | Voted by {movie.voting} people </Card.Text>  
                //    </Card.Body> </Card>
                //    <Button variant="primary">Watch Trailer</Button><Card.Text />
                //    <Card.Footer className="text-muted"></Card.Footer>
                //  </Card> 



                    // <Row>
                    
                    //     <Card >
                    //      <Card.Img src={movie.poster}/>

                    //         <Card.Body>
                    //             <Card.Title>Movie : {movie.title}</Card.Title>
                    //             <Card.Text>Genre : {movie.genre}</Card.Text>
                    //             <Card.Text>Director :{movie.director}</Card.Text>
                    //             <Card.Text>Starring : {movie.stars}</Card.Text>
                    //             <Card.Text>Language : {movie.language} </Card.Text>
                              
                    //             <Card.Footer>Voting : {movie.voting}</Card.Footer>
                                
                                
                    //         </Card.Body>
                    //     </Card>
                    // </Row>
                ))}
            </Row>
        </Container>
        
      {/* <table>
        <thead>
          <tr>
            <th>-|-</th><th>||</th>
            <th>Id</th><th>||</th>
            <th>Movie Title</th><th>||</th>
            <th>language</th><th>||</th>
            <th>Movie Genre</th><th>||</th>
            <th>Movie Title</th><th>||</th>
            <th> Movie Release Date</th><th>||</th>
            <th> Movie Language</th><th>||</th>
          </tr>
        </thead>
        <tbody>
          {movies.map(movie => (
            <tr key={movie._id}>
                <td>-|-</td><td>||</td>
              <td>{movie._id}</td><td>||</td>
              <td>{movie.title}</td><td>||</td>
              <td>{movie.language}</td><td>||</td>
              <td>{movie.genre}</td><td>||</td>
              <td>{movie.title}</td><td>||</td>
              <td>{movie.releasedDate}</td><td>||</td>
              <td>{movie.language}</td><td>||</td>
              
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  );
};

export default MovieListPage;
