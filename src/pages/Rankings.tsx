import { useState } from 'react';
import { Box, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Rating, Button, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

// Mock data for movies
const moviesData = [
  { id: 1, rank: 1, title: 'The Shawshank Redemption', userScore: 9.5, globalScore: 9.3, genre: 'Drama', year: 1994 },
  { id: 2, rank: 2, title: 'The Godfather', userScore: 9.0, globalScore: 9.2, genre: 'Crime, Drama', year: 1972 },
  { id: 3, rank: 3, title: 'The Dark Knight', userScore: 9.2, globalScore: 9.0, genre: 'Action, Crime, Drama', year: 2008 },
  { id: 4, rank: 4, title: 'The Godfather: Part II', userScore: 8.8, globalScore: 9.0, genre: 'Crime, Drama', year: 1974 },
  { id: 5, rank: 5, title: '12 Angry Men', userScore: 8.7, globalScore: 9.0, genre: 'Crime, Drama', year: 1957 },
  { id: 6, rank: 6, title: "Schindler's List", userScore: 8.9, globalScore: 8.9, genre: 'Biography, Drama, History', year: 1993 },
  { id: 7, rank: 7, title: 'The Lord of the Rings: The Return of the King', userScore: 9.1, globalScore: 8.9, genre: 'Action, Adventure, Drama', year: 2003 },
  { id: 8, rank: 8, title: 'Pulp Fiction', userScore: 8.6, globalScore: 8.8, genre: 'Crime, Drama', year: 1994 },
  { id: 9, rank: 9, title: 'The Lord of the Rings: The Fellowship of the Ring', userScore: 8.8, globalScore: 8.8, genre: 'Action, Adventure, Drama', year: 2001 },
  { id: 10, rank: 10, title: 'The Good, the Bad and the Ugly', userScore: 8.5, globalScore: 8.8, genre: 'Western', year: 1966 },
];

// Genre options for filter
const genreOptions = [
  'All Genres',
  'Action',
  'Adventure',
  'Animation',
  'Biography',
  'Comedy',
  'Crime',
  'Drama',
  'Fantasy',
  'History',
  'Horror',
  'Mystery',
  'Romance',
  'Sci-Fi',
  'Thriller',
  'Western',
];

// Year range options for filter
const yearOptions = [
  'All Years',
  '2020s',
  '2010s',
  '2000s',
  '1990s',
  '1980s',
  '1970s',
  'Pre-1970s',
];

// Rating options for filter
const ratingOptions = [
  'All Ratings',
  '9.0 & Up',
  '8.0 - 8.9',
  '7.0 - 7.9',
  'Below 7.0',
];

const Rankings = () => {
  const [genre, setGenre] = useState('All Genres');
  const [year, setYear] = useState('All Years');
  const [rating, setRating] = useState('All Ratings');
  const [sortBy, setSortBy] = useState('rank'); // 'rank', 'title', 'userScore', 'globalScore', 'year'
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  // Handle filter changes
  const handleGenreChange = (event: SelectChangeEvent) => {
    setGenre(event.target.value);
  };

  const handleYearChange = (event: SelectChangeEvent) => {
    setYear(event.target.value);
  };

  const handleRatingChange = (event: SelectChangeEvent) => {
    setRating(event.target.value);
  };

  // Handle sorting
  const handleSort = (column: string) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortOrder('asc');
    }
  };

  // Apply filters and sorting to the data
  const filteredAndSortedMovies = [...moviesData]
    .filter((movie) => {
      // Apply genre filter
      if (genre !== 'All Genres' && !movie.genre.includes(genre)) {
        return false;
      }
      
      // Apply year filter
      if (year !== 'All Years') {
        const decade = parseInt(year);
        if (decade) {
          const startYear = decade;
          const endYear = decade + 9;
          if (movie.year < startYear || movie.year > endYear) {
            return false;
          }
        } else if (year === 'Pre-1970s' && movie.year >= 1970) {
          return false;
        }
      }
      
      // Apply rating filter
      if (rating !== 'All Ratings') {
        if (rating === '9.0 & Up' && movie.globalScore < 9.0) {
          return false;
        } else if (rating === '8.0 - 8.9' && (movie.globalScore < 8.0 || movie.globalScore >= 9.0)) {
          return false;
        } else if (rating === '7.0 - 7.9' && (movie.globalScore < 7.0 || movie.globalScore >= 8.0)) {
          return false;
        } else if (rating === 'Below 7.0' && movie.globalScore >= 7.0) {
          return false;
        }
      }
      
      return true;
    })
    .sort((a, b) => {
      // Apply sorting
      let comparison = 0;
      if (sortBy === 'rank') {
        comparison = a.rank - b.rank;
      } else if (sortBy === 'title') {
        comparison = a.title.localeCompare(b.title);
      } else if (sortBy === 'userScore') {
        comparison = b.userScore - a.userScore;
      } else if (sortBy === 'globalScore') {
        comparison = b.globalScore - a.globalScore;
      } else if (sortBy === 'year') {
        comparison = b.year - a.year;
      }
      
      return sortOrder === 'asc' ? comparison : -comparison;
    });

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Movie Rankings
      </Typography>
      
      {/* Filters */}
      <Paper sx={{ p: 2, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Filters
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel id="genre-label">Genre</InputLabel>
              <Select
                labelId="genre-label"
                value={genre}
                label="Genre"
                onChange={handleGenreChange}
              >
                {genreOptions.map((option) => (
                  <MenuItem key={option} value={option}>{option}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel id="year-label">Year</InputLabel>
              <Select
                labelId="year-label"
                value={year}
                label="Year"
                onChange={handleYearChange}
              >
                {yearOptions.map((option) => (
                  <MenuItem key={option} value={option}>{option}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel id="rating-label">Rating</InputLabel>
              <Select
                labelId="rating-label"
                value={rating}
                label="Rating"
                onChange={handleRatingChange}
              >
                {ratingOptions.map((option) => (
                  <MenuItem key={option} value={option}>{option}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Paper>
      
      {/* Rankings Table */}
      <TableContainer component={Paper} sx={{ mt: 3, overflowX: 'auto' }}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell 
                onClick={() => handleSort('rank')}
                sx={{ cursor: 'pointer', fontWeight: 'bold' }}
              >
                Rank {sortBy === 'rank' && (sortOrder === 'asc' ? '↑' : '↓')}
              </TableCell>
              <TableCell 
                onClick={() => handleSort('title')}
                sx={{ cursor: 'pointer', fontWeight: 'bold' }}
              >
                Title {sortBy === 'title' && (sortOrder === 'asc' ? '↑' : '↓')}
              </TableCell>
              <TableCell 
                onClick={() => handleSort('userScore')}
                align="center"
                sx={{ cursor: 'pointer', fontWeight: 'bold' }}
              >
                Your Rating {sortBy === 'userScore' && (sortOrder === 'asc' ? '↑' : '↓')}
              </TableCell>
              <TableCell 
                onClick={() => handleSort('globalScore')}
                align="center"
                sx={{ cursor: 'pointer', fontWeight: 'bold' }}
              >
                Global Rating {sortBy === 'globalScore' && (sortOrder === 'asc' ? '↑' : '↓')}
              </TableCell>
              <TableCell 
                onClick={() => handleSort('year')}
                align="center"
                sx={{ cursor: 'pointer', fontWeight: 'bold' }}
              >
                Year {sortBy === 'year' && (sortOrder === 'asc' ? '↑' : '↓')}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredAndSortedMovies.map((movie) => (
              <TableRow key={movie.id}>
                <TableCell>{movie.rank}</TableCell>
                <TableCell>{movie.title}</TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Rating value={movie.userScore / 2} precision={0.5} readOnly size="small" />
                    <Typography variant="body2" sx={{ ml: 1 }}>
                      {movie.userScore.toFixed(1)}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Rating value={movie.globalScore / 2} precision={0.5} readOnly size="small" />
                    <Typography variant="body2" sx={{ ml: 1 }}>
                      {movie.globalScore.toFixed(1)}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell>{movie.year}</TableCell>
                <TableCell>{movie.genre}</TableCell>
                <TableCell>
                  <Button 
                    variant="contained" 
                    size="small" 
                    component={Link} 
                    to={`/movie/${movie.id}`}
                  >
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Rankings;