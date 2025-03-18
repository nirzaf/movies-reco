import { Card, CardContent, CardMedia, Typography, Box, Rating } from '@mui/material';
import { Link } from 'react-router-dom';

interface MovieCardProps {
  id: number;
  title: string;
  imageUrl: string;
  rating: number;
  genre: string;
  year?: number;
}

const MovieCard = ({ id, title, imageUrl, rating, genre, year }: MovieCardProps) => {
  return (
    <Card 
      sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column',
        transition: 'transform 0.3s',
        '&:hover': {
          transform: 'scale(1.03)',
          boxShadow: 6
        }
      }}
    >
      <Link to={`/movie/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <CardMedia
          component="img"
          height="200"
          image={imageUrl || 'https://via.placeholder.com/300x450?text=No+Image'}
          alt={title}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h6" component="div" noWrap>
            {title} {year && `(${year})`}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Rating value={rating / 2} precision={0.5} readOnly size="small" />
            <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
              {rating.toFixed(1)}/10
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
            {genre}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
};

export default MovieCard;