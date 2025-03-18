import { Box, Typography, Grid, Paper, Rating } from '@mui/material';

// Mock data for movie details
const movieDetails = {
  id: 1,
  title: 'The Shawshank Redemption',
  year: 1994,
  rating: 9.3,
  director: 'Frank Darabont',
  cast: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
  genre: 'Drama',
  duration: '2h 22m',
  plot: 'Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.',
  imageUrl: 'https://via.placeholder.com/500x750?text=Shawshank+Redemption',
};

const MovieDetail = () => {
  return (
    <Box>
      {/* Header Section */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {movieDetails.title} ({movieDetails.year})
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Rating value={movieDetails.rating / 2} precision={0.5} readOnly />
          <Typography variant="body1" sx={{ ml: 1 }}>
            {movieDetails.rating.toFixed(1)}/10
          </Typography>
        </Box>
      </Box>
      
      {/* Main Content */}
      <Grid container spacing={4} sx={{ mb: 6 }}>
        {/* Left Column - Movie Poster */}
        <Grid item xs={12} md={4}>
          <img 
            src={movieDetails.imageUrl} 
            alt={movieDetails.title} 
            style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }} 
          />
        </Grid>
        
        {/* Right Column - Movie Details */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>Overview</Typography>
            <Typography variant="body1" paragraph>
              {movieDetails.plot}
            </Typography>
            
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Director</Typography>
                <Typography variant="body1" paragraph>{movieDetails.director}</Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>Duration</Typography>
                <Typography variant="body1" paragraph>{movieDetails.duration}</Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MovieDetail;