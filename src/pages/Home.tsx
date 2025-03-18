import { Box, Typography, Grid, Container, Paper, Button } from '@mui/material';
import MovieCard from '../components/common/MovieCard';

// Mock data for featured movies
const featuredMovies = [
  { id: 1, title: 'The Shawshank Redemption', imageUrl: 'https://via.placeholder.com/300x450?text=Shawshank', rating: 9.3, genre: 'Drama', year: 1994 },
  { id: 2, title: 'The Godfather', imageUrl: 'https://via.placeholder.com/300x450?text=Godfather', rating: 9.2, genre: 'Crime, Drama', year: 1972 },
  { id: 3, title: 'The Dark Knight', imageUrl: 'https://via.placeholder.com/300x450?text=Dark+Knight', rating: 9.0, genre: 'Action, Crime, Drama', year: 2008 },
];

// Mock data for new releases
const newReleases = [
  { id: 4, title: 'Dune: Part Two', imageUrl: 'https://via.placeholder.com/300x450?text=Dune+2', rating: 8.5, genre: 'Sci-Fi, Adventure', year: 2024 },
  { id: 5, title: 'Oppenheimer', imageUrl: 'https://via.placeholder.com/300x450?text=Oppenheimer', rating: 8.4, genre: 'Biography, Drama', year: 2023 },
  { id: 6, title: 'Poor Things', imageUrl: 'https://via.placeholder.com/300x450?text=Poor+Things', rating: 8.2, genre: 'Comedy, Drama, Sci-Fi', year: 2023 },
  { id: 7, title: 'The Killer', imageUrl: 'https://via.placeholder.com/300x450?text=The+Killer', rating: 7.9, genre: 'Action, Crime, Thriller', year: 2023 },
];

// Mock data for trending movies
const trendingMovies = [
  { id: 8, title: 'Barbie', imageUrl: 'https://via.placeholder.com/300x450?text=Barbie', rating: 7.0, genre: 'Adventure, Comedy', year: 2023 },
  { id: 9, title: 'The Holdovers', imageUrl: 'https://via.placeholder.com/300x450?text=Holdovers', rating: 8.0, genre: 'Comedy, Drama', year: 2023 },
  { id: 10, title: 'Killers of the Flower Moon', imageUrl: 'https://via.placeholder.com/300x450?text=Killers', rating: 7.7, genre: 'Crime, Drama', year: 2023 },
  { id: 11, title: 'Past Lives', imageUrl: 'https://via.placeholder.com/300x450?text=Past+Lives', rating: 8.1, genre: 'Drama, Romance', year: 2023 },
  { id: 12, title: 'The Zone of Interest', imageUrl: 'https://via.placeholder.com/300x450?text=Zone', rating: 7.8, genre: 'Drama, History', year: 2023 },
  { id: 13, title: 'Anatomy of a Fall', imageUrl: 'https://via.placeholder.com/300x450?text=Anatomy', rating: 7.9, genre: 'Crime, Drama', year: 2023 },
];

const Home = () => {
  return (
    <Box>
      {/* Hero Banner */}
      <Paper 
        sx={{
          position: 'relative',
          backgroundColor: 'grey.800',
          color: '#fff',
          mb: 4,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: 'url(https://via.placeholder.com/1200x400?text=Featured+Movie)',
          height: { xs: '300px', md: '400px' },
          display: 'flex',
          alignItems: 'flex-end',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: 'rgba(0,0,0,.3)',
          }}
        />
        <Container maxWidth="lg" sx={{ position: 'relative', p: { xs: 3, md: 6 } }}>
          <Typography component="h1" variant="h3" color="inherit" gutterBottom>
            Discover Your Next Favorite Movie
          </Typography>
          <Typography variant="h5" color="inherit" paragraph>
            Personalized recommendations based on your taste
          </Typography>
          <Button variant="contained" size="large" sx={{ mt: 2 }}>
            Explore Now
          </Button>
        </Container>
      </Paper>

      {/* Featured Movies */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Featured Movies
        </Typography>
        <Grid container spacing={4}>
          {featuredMovies.map((movie) => (
            <Grid item key={movie.id} xs={12} sm={6} md={4}>
              <MovieCard {...movie} />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* New Releases */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          New Releases
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            overflowX: 'auto',
            pb: 2,
            '&::-webkit-scrollbar': {
              height: '8px',
            },
            '&::-webkit-scrollbar-track': {
              backgroundColor: 'rgba(0,0,0,0.1)',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: 'rgba(0,0,0,0.2)',
              borderRadius: '4px',
            },
          }}
        >
          {newReleases.map((movie) => (
            <Box key={movie.id} sx={{ minWidth: { xs: '85%', sm: '300px', md: '250px' } }}>
              <MovieCard {...movie} />
            </Box>
          ))}
        </Box>
      </Box>

      {/* Trending Movies */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Trending Movies
        </Typography>
        <Grid container spacing={3}>
          {trendingMovies.map((movie) => (
            <Grid item key={movie.id} xs={12} sm={6} md={4} lg={2}>
              <MovieCard {...movie} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Home;