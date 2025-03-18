import { Box, Typography, Grid, Container, Paper, Button } from '@mui/material';
import MovieCard from '../components/common/MovieCard';

// Import movie poster images
import shawshankPoster from '../assets/images/movie-posters/shawshank.svg';
import godfatherPoster from '../assets/images/movie-posters/godfather.svg';
import darkKnightPoster from '../assets/images/movie-posters/dark-knight.svg';
import dunePoster from '../assets/images/movie-posters/dune.svg';
import oppenheimerPoster from '../assets/images/movie-posters/oppenheimer.svg';
import barbiePoster from '../assets/images/movie-posters/barbie.svg';
import poorThingsPoster from '../assets/images/movie-posters/poor-things.svg';
import theKillerPoster from '../assets/images/movie-posters/the-killer.svg';
import holdoversPoster from '../assets/images/movie-posters/holdovers.svg';
import killersOfTheFlowerMoonPoster from '../assets/images/movie-posters/killers-of-the-flower-moon.svg';
import pastLivesPoster from '../assets/images/movie-posters/past-lives.svg';
import zoneOfInterestPoster from '../assets/images/movie-posters/zone-of-interest.svg';
import anatomyOfAFallPoster from '../assets/images/movie-posters/anatomy-of-a-fall.svg';
import heroBanner from '../assets/images/banners/hero-banner.svg';

// Mock data for featured movies
const featuredMovies = [
  { id: 1, title: 'The Shawshank Redemption', imageUrl: shawshankPoster, rating: 9.3, genre: 'Drama', year: 1994 },
  { id: 2, title: 'The Godfather', imageUrl: godfatherPoster, rating: 9.2, genre: 'Crime, Drama', year: 1972 },
  { id: 3, title: 'The Dark Knight', imageUrl: darkKnightPoster, rating: 9.0, genre: 'Action, Crime, Drama', year: 2008 },
];

// Mock data for new releases
const newReleases = [
  { id: 4, title: 'Dune: Part Two', imageUrl: dunePoster, rating: 8.5, genre: 'Sci-Fi, Adventure', year: 2024 },
  { id: 5, title: 'Oppenheimer', imageUrl: oppenheimerPoster, rating: 8.4, genre: 'Biography, Drama', year: 2023 },
  { id: 6, title: 'Poor Things', imageUrl: poorThingsPoster, rating: 8.2, genre: 'Comedy, Drama, Sci-Fi', year: 2023 },
  { id: 7, title: 'The Killer', imageUrl: theKillerPoster, rating: 7.9, genre: 'Action, Crime, Thriller', year: 2023 },
];

// Mock data for trending movies
const trendingMovies = [
  { id: 8, title: 'Barbie', imageUrl: barbiePoster, rating: 7.0, genre: 'Adventure, Comedy', year: 2023 },
  { id: 9, title: 'The Holdovers', imageUrl: holdoversPoster, rating: 8.0, genre: 'Comedy, Drama', year: 2023 },
  { id: 10, title: 'Killers of the Flower Moon', imageUrl: killersOfTheFlowerMoonPoster, rating: 7.7, genre: 'Crime, Drama', year: 2023 },
  { id: 11, title: 'Past Lives', imageUrl: pastLivesPoster, rating: 8.1, genre: 'Drama, Romance', year: 2023 },
  { id: 12, title: 'The Zone of Interest', imageUrl: zoneOfInterestPoster, rating: 7.8, genre: 'Drama, History', year: 2023 },
  { id: 13, title: 'Anatomy of a Fall', imageUrl: anatomyOfAFallPoster, rating: 7.9, genre: 'Crime, Drama', year: 2023 },
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
          backgroundImage: `url(${heroBanner})`,
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
          <Box sx={{ 
            backgroundColor: 'rgba(255,255,255,0.7)', 
            p: 3, 
            borderRadius: 2,
            backdropFilter: 'blur(2px)',
            maxWidth: 'fit-content',
            margin: '0 auto',
            textAlign: 'center'
          }}>
            <Typography component="h1" variant="h3" color="white" gutterBottom sx={{ textShadow: '2px 2px 4px rgba(0,0,0,0.7)', textAlign: 'center' }} className="hero-text">
              Discover Your Next Favorite Movie
            </Typography>
            <Typography variant="h5" color="white" paragraph sx={{ textShadow: '1px 1px 3px rgba(0,0,0,0.7)', textAlign: 'center' }} className="hero-text">
              Personalized recommendations based on your taste
            </Typography>
            <Button variant="contained" size="large" sx={{ mt: 2 }}>
              Explore Now
            </Button>
          </Box>
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
        <Grid container spacing={4}>
          {newReleases.map((movie) => (
            <Grid item key={movie.id} xs={12} sm={6} md={3}>
              <MovieCard {...movie} />
            </Grid>
          ))}
        </Grid>
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