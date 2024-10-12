import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, Grid, Button } from '@mui/material';
import '../App.css'; 

const BookList = () => {
  const [books] = useState([
    { id: 1, title: 'Slaughterhouse-Five', author: 'Kurt Vonnegut', cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1PEdgz6sN8IUnxsRkIIFeEAE-cjIvScr2Ww&s', },
    { id: 2, title: 'The Red and the Black', author: 'Stendhal', cover: 'https://m.media-amazon.com/images/I/51bFUfYP9RL._AC_UF1000,1000_QL80_.jpg' },
    { id: 3, title: 'War and Peace', author: 'Tolstoy', cover: 'https://cdn.kobo.com/book-images/7c814a86-5172-4ebf-8810-abe091527842/353/569/90/False/war-and-peace-322.jpg' },
    { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', cover: 'https://rukminim2.flixcart.com/image/850/1000/kkec4280/book/d/h/d/pride-prejudice-original-imafzra6pfewjjwb.jpeg?q=90&crop=false' },
    { id: 5, title: 'Ek Samandar, Mere Andar', author: 'Sanjeev Joshi', cover: 'https://m.media-amazon.com/images/I/81KN90In8LL._AC_UF1000,1000_QL80_.jpg' },
    { id: 6, title: 'Gandhi: A Life in Three Campaign', author: 'M.J. Akbar and K Natwar Singh', cover: 'https://m.media-amazon.com/images/I/81qFUfD1grL._UF1000,1000_QL80_.jpg' },
    { id: 7, title: 'The Rule Breakers', author: 'Preeti Shenoy', cover: 'https://preetishenoy.com/wp-content/uploads/RuleBreakers-600x609.png' },
    { id: 8, title: 'House of Mirth', author: 'Edith Wharton', cover: 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781471152481/the-house-of-mirth-9781471152481_hr.jpg' },
    { id: 9, title: 'Beloved', author: 'Toni Morrison', cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsaktr1Ut6mF8r-ni6FuNm5VOZD2VMIyarVA&s' },
    { id: 10, title: 'Event Factory', author: 'Renee Gladman', cover: 'https://images.squarespace-cdn.com/content/v1/5f45ec2d98a2513ca091f6d3/1638547995299-J7XRAPA145XPNNUPYLSJ/2010+-+Event+Factory.jpeg?format=300w' },
  ]);

  return (
    <div>
      
      <div className="library-background">
        <div className="overlay">
          <Typography variant="h2" className="library-text">Welcome to the Lybrio</Typography>
        </div>
      </div>

      {/* Book List */}
      <Typography variant="h4" className='typo' gutterBottom>Book List</Typography>
      <Grid container spacing={4}>
        {books.map(book => (
          <Grid item xs={12} sm={6} md={4} key={book.id}>
            <Card>
              <CardMedia
                component="img"
                height="250"
                image={book.cover}
                alt={book.title}
              />
              <CardContent>
                <Typography variant="h6">{book.title}</Typography>
                <Typography variant="subtitle1">{book.author}</Typography>
                <Button component={Link} to={`/book/${book.id}`} variant="contained" color="primary"style={{backgroundColor:"blue"}}>
                  View Details
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Button component={Link} to="/add-book" variant="contained" color="secondary" sx={{ marginTop: 2 }}style={{backgroundColor:"blue",margin:"10px",borderRadius:"30px"}}>
        Add New Book
      </Button>
    </div>
  );
};

export default BookList;
