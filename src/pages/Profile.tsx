import { Box, Typography, Grid, Paper, Avatar, Tabs, Tab, List, ListItem, Divider, Button, TextField, Switch, FormControlLabel } from '@mui/material';
import { useState } from 'react';
import MovieCard from '../components/common/MovieCard';

// Import movie poster images
import shawshankPoster from '../assets/images/movie-posters/shawshank.svg';
import darkKnightPoster from '../assets/images/movie-posters/dark-knight.svg';
import oppenheimerPoster from '../assets/images/movie-posters/oppenheimer.svg';
import barbiePoster from '../assets/images/movie-posters/barbie.svg';
import godfatherPoster from '../assets/images/movie-posters/godfather.svg';
import poorThingsPoster from '../assets/images/movie-posters/poor-things.svg';

// Import user profile image
import userProfileAvatar from '../assets/images/profiles/user-profile.svg';

// Mock user data
const userData = {
  username: 'MovieLover42',
  avatar: userProfileAvatar,
  memberSince: 'January 2022',
  watchedMovies: 127,
  reviews: 48,
  watchlist: 23,
};

// Mock watch history data
const watchHistoryData = [
  { id: 1, title: 'The Shawshank Redemption', imageUrl: shawshankPoster, rating: 9.3, genre: 'Drama', year: 1994, watchedDate: '2023-12-15' },
  { id: 3, title: 'The Dark Knight', imageUrl: darkKnightPoster, rating: 9.0, genre: 'Action, Crime, Drama', year: 2008, watchedDate: '2023-12-10' },
  { id: 5, title: 'Oppenheimer', imageUrl: oppenheimerPoster, rating: 8.4, genre: 'Biography, Drama', year: 2023, watchedDate: '2023-12-05' },
  { id: 8, title: 'Barbie', imageUrl: barbiePoster, rating: 7.0, genre: 'Adventure, Comedy', year: 2023, watchedDate: '2023-11-28' },
];

// Mock reviews data
const reviewsData = [
  { id: 1, movieId: 1, movieTitle: 'The Shawshank Redemption', rating: 9.5, date: '2023-12-15', content: 'One of the best movies ever made. The story, acting, and direction are all perfect.' },
  { id: 2, movieId: 3, movieTitle: 'The Dark Knight', rating: 9.0, date: '2023-12-10', content: 'Heath Ledger\'s performance as the Joker is legendary. A masterpiece of the superhero genre.' },
  { id: 3, movieId: 5, movieTitle: 'Oppenheimer', rating: 8.5, date: '2023-12-05', content: 'Nolan delivers again with this historical drama. Cillian Murphy is outstanding as Oppenheimer.' },
];

// Mock watchlist data
const watchlistData = [
  { id: 2, title: 'The Godfather', imageUrl: godfatherPoster, rating: 9.2, genre: 'Crime, Drama', year: 1972 },
  { id: 4, title: 'Pulp Fiction', imageUrl: shawshankPoster, rating: 8.8, genre: 'Crime, Drama', year: 1994 },
  { id: 6, title: 'Poor Things', imageUrl: poorThingsPoster, rating: 8.2, genre: 'Comedy, Drama, Sci-Fi', year: 2023 },
];

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`profile-tabpanel-${index}`}
      aria-labelledby={`profile-tab-${index}`}
      style={{ width: '100%' }}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: { xs: 2, sm: 3 }, width: '100%', maxWidth: '100%' }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const Profile = () => {
  const [tabValue, setTabValue] = useState(0);
  const [editMode, setEditMode] = useState(false);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  return (
    <Box>
      {/* Profile Header */}
      <Paper sx={{ p: 3, mb: 4 }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} sm={3} md={2}>
            <Avatar
              src={userData.avatar}
              alt={userData.username}
              sx={{ width: 120, height: 120, mx: 'auto' }}
            />
          </Grid>
          <Grid item xs={12} sm={9} md={10}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
              <Typography variant="h4" component="h1">
                {userData.username}
              </Typography>
              <Button variant="outlined" onClick={toggleEditMode}>
                {editMode ? 'Save Profile' : 'Edit Profile'}
              </Button>
            </Box>
            <Typography variant="body1" color="text.secondary" gutterBottom>
              Member since: {userData.memberSince}
            </Typography>
            <Grid container spacing={2} sx={{ mt: 1 }}>
              <Grid item xs={4}>
                <Typography variant="h6">{userData.watchedMovies}</Typography>
                <Typography variant="body2" color="text.secondary">Watched</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h6">{userData.reviews}</Typography>
                <Typography variant="body2" color="text.secondary">Reviews</Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="h6">{userData.watchlist}</Typography>
                <Typography variant="body2" color="text.secondary">Watchlist</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      {/* Profile Content */}
      <Box sx={{ width: '100%', overflow: 'hidden' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={tabValue} onChange={handleTabChange} aria-label="profile tabs" variant="fullWidth" sx={{ minHeight: 48 }}>
            <Tab label="Watch History" />
            <Tab label="My Reviews" />
            <Tab label="Watchlist" />
            <Tab label="Account Settings" />
          </Tabs>
        </Box>

        {/* Watch History Tab */}
        <TabPanel value={tabValue} index={0}>
          <Typography variant="h6" gutterBottom>Recently Watched</Typography>
          <Grid container spacing={3}>
            {watchHistoryData.map((movie) => (
              <Grid item key={movie.id} xs={12} sm={6} md={3}>
                <Box sx={{ position: 'relative', width: '100%' }}>
                  <MovieCard {...movie} />
                  <Typography 
                    variant="caption" 
                    sx={{ 
                      position: 'absolute', 
                      top: 8, 
                      right: 8, 
                      bgcolor: 'rgba(0,0,0,0.7)', 
                      color: 'white',
                      px: 1,
                      py: 0.5,
                      borderRadius: 1
                    }}
                  >
                    Watched: {new Date(movie.watchedDate).toLocaleDateString()}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </TabPanel>

        {/* My Reviews Tab */}
        <TabPanel value={tabValue} index={1}>
          <Typography variant="h6" gutterBottom>Your Reviews</Typography>
          <Grid container spacing={3}>
            {reviewsData.map((review) => (
              <Grid item key={review.id} xs={12}>
                <Paper key={review.id} sx={{ mb: 2, p: 2, width: '100%' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                    <Typography variant="h6">{review.movieTitle}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      {new Date(review.date).toLocaleDateString()}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Typography variant="body2" sx={{ mr: 1 }}>Your rating:</Typography>
                    <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                      {review.rating.toFixed(1)}/10
                    </Typography>
                  </Box>
                  <Typography variant="body1">{review.content}</Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                    <Button size="small" color="primary">Edit</Button>
                    <Button size="small" color="error" sx={{ ml: 1 }}>Delete</Button>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </TabPanel>

        {/* Watchlist Tab */}
        <TabPanel value={tabValue} index={2}>
          <Typography variant="h6" gutterBottom>Movies to Watch</Typography>
          <Grid container spacing={3}>
            {watchlistData.map((movie) => (
              <Grid item key={movie.id} xs={12} sm={6} md={3}>
                <Box sx={{ position: 'relative', width: '100%' }}>
                  <MovieCard {...movie} />
                  <Button 
                    size="small" 
                    variant="contained" 
                    color="error"
                    sx={{ 
                      position: 'absolute', 
                      top: 8, 
                      right: 8,
                      minWidth: 'auto',
                      width: 30,
                      height: 30,
                      borderRadius: '50%'
                    }}
                  >
                    ×
                  </Button>
                </Box>
              </Grid>
            ))}
          </Grid>
        </TabPanel>

        {/* Account Settings Tab */}
        <TabPanel value={tabValue} index={3}>
          <Grid container spacing={4} sx={{ width: '100%' }}>
            {/* Personal Information */}
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>Personal Information</Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Username"
                      defaultValue={userData.username}
                      disabled={!editMode}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email"
                      type="email"
                      defaultValue="user@example.com"
                      disabled={!editMode}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Password"
                      type="password"
                      defaultValue="********"
                      disabled={!editMode}
                    />
                  </Grid>
                </Grid>
              </Paper>
            </Grid>

            {/* Preferences */}
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>Preferences</Typography>
                <List>
                  <ListItem>
                    <FormControlLabel
                      control={<Switch defaultChecked disabled={!editMode} />}
                      label="Email notifications for new recommendations"
                    />
                  </ListItem>
                  <Divider />
                  <ListItem>
                    <FormControlLabel
                      control={<Switch defaultChecked disabled={!editMode} />}
                      label="Show content based on my watch history"
                    />
                  </ListItem>
                  <Divider />
                  <ListItem>
                    <FormControlLabel
                      control={<Switch disabled={!editMode} />}
                      label="Hide my activity from other users"
                    />
                  </ListItem>
                  <Divider />
                  <ListItem>
                    <FormControlLabel
                      control={<Switch defaultChecked disabled={!editMode} />}
                      label="Dark mode"
                    />
                  </ListItem>
                </List>
              </Paper>
            </Grid>
          </Grid>
        </TabPanel>
      </Box>
    </Box>
  );
};

export default Profile;