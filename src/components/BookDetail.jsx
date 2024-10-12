import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia, Button } from '@mui/material';

const BookDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

 
  const books = [
    { 
      id: 1, 
      title: 'Slaughterhouse-Five', 
      author: 'Kurt Vonnegut', 
      description: ' Some of the major themes in Slaughterhouse-Five include the impacts of war, free will, and death.', 
      cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1PEdgz6sN8IUnxsRkIIFeEAE-cjIvScr2Ww&s' 
      
    },
    { 
      id: 2, 
      title: 'The Red and the Black', 
      author: 'Stendhal', 
      description: 'It chronicles the attempts of a provincial young man to rise socially beyond his modest upbringing through a combination of talent, hard work, deception, and hypocrisy', 
      cover: 'https://m.media-amazon.com/images/I/51bFUfYP9RL._AC_UF1000,1000_QL80_.jpg' 
    },
    { 
      id: 3, 
      title: 'War and Peace', 
      author: 'Tolstoy', 
      description: 'The novels primary historical setting is the French invasion of Russia in 1812 which was a turning point in the Napoleonic Wars and a period of patriotic significance to Russia', 
      cover: 'https://cdn.kobo.com/book-images/7c814a86-5172-4ebf-8810-abe091527842/353/569/90/False/war-and-peace-322.jpg' 
    },
    { 
      id: 4, 
      title: 'Pride and Prejudice', 
      author: 'Jane Austen', 
      description: 'A romantic novel that explores the themes of love, marriage, and societal expectations.', 
      cover: 'https://rukminim2.flixcart.com/image/850/1000/kkec4280/book/d/h/d/pride-prejudice-original-imafzra6pfewjjwb.jpeg?q=90&crop=false' 
    },
    { 
      id: 5, 
      title: 'Ek Samandar, Mere Andar', 
      author: 'Sanjeev Joshi', 
      description: 'It is a compilation of 75 poems written over many years...', 
      cover: 'https://m.media-amazon.com/images/I/81KN90In8LL._AC_UF1000,1000_QL80_.jpg' 
    },
    { 
      id: 6, 
      title: 'Gandhi: A Life in Three Campaigns', 
      author: 'M.J. Akbar and K Natwar Singh', 
      description: 'The book delves into Mahatma Gandhis leadership during the three major campaigns of India independence movement', 
      cover: 'https://m.media-amazon.com/images/I/81qFUfD1grL._UF1000,1000_QL80_.jpg' 
    },
    { 
      id: 7, 
      title: 'The Rule Breakers', 
      author: 'Preeti Shenoy', 
      description: 'A novel about revolves around a girl Veda, eldest of 5 children of a family based in hilly town Joshimath', 
      cover: 'https://preetishenoy.com/wp-content/uploads/RuleBreakers-600x609.png' 
    },
    { 
      id: 8, 
      title: 'House of Mirth', 
      author: 'Edith Wharton', 
      description: 'The story concerns the tragic fate of the beautiful and well-connected but penniless Lily Bart, who at age 29 lacks a husband to secure her position in society.', 
      cover: 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781471152481/the-house-of-mirth-9781471152481_hr.jpg' 
    },
    { 
      id: 9, 
      title: 'Beloved', 
      author: 'Toni Morrison', 
      description: 'examines the destructive legacy of slavery as it chronicles the life of a Black woman named Sethe, from her pre-Civil War days as a slave in Kentucky to her time in Cincinnati, Ohio, in 1873.', 
      cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsaktr1Ut6mF8r-ni6FuNm5VOZD2VMIyarVA&s' 
    },
    { 
      id: 10, 
      title: 'Event Factory', 
      author: 'Renee Gladman', 
      description: 'A “linguist-traveler” arrives by plane to Ravicka, a city of yellow air in which an undefined crisis is causing the inhabitants to flee.', 
      cover: 'https://images.squarespace-cdn.com/content/v1/5f45ec2d98a2513ca091f6d3/1638547995299-J7XRAPA145XPNNUPYLSJ/2010+-+Event+Factory.jpeg?format=300w' 
    },
  ];
  const book = books.find(b => b.id === parseInt(id));

  if (!book) {
    return <Typography variant="h4">Book not found</Typography>;
  }

  return (
    <Card sx={{ maxWidth: 600, margin: 'auto', mt: 4 }}>
      <CardMedia
        component="img"
        image={book.cover}
        alt={book.title}
        style={{ objectFit: 'contain', height: '400px', width: '100%' }} 
      />
      <CardContent>
        <Typography variant="h3" gutterBottom>{book.title}</Typography>
        <Typography variant="h5" gutterBottom>Author: {book.author}</Typography>
        <Typography variant="body1" paragraph>{book.description}</Typography>

        
        <Button 
          onClick={() => navigate('/login')}  
          variant="contained" 
          color="secondary" 
          sx={{ marginTop: 2 }}
          style={{backgroundColor:"blue"}}
        >
          Buy Now  {book.price}
        </Button>

       
        <Button 
          onClick={() => navigate('/')} 
          variant="contained" 
          color="primary" 
          sx={{ marginTop: 2, marginLeft: 2 }}
          style={{backgroundColor:"Blue"}}
        >
          Back to Home
        </Button>
      </CardContent>
    </Card>
  );
};

export default BookDetail;