import { Box, Typography, Grid, Paper, Card, CardContent, CardHeader, Button, Divider, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

// Mock data for streaming services
const streamingServices = [
  {
    id: 1,
    name: 'MovieFlix',
    logo: 'https://via.placeholder.com/150x50?text=MovieFlix',
    description: 'The ultimate streaming service for movie lovers with thousands of titles.',
    exclusiveContent: ['Stranger Things', 'The Crown', 'Money Heist'],
    categories: ['Movies', 'TV Shows', 'Documentaries', 'Anime'],
    plans: [
      { name: 'Basic', price: 8.99, quality: 'Good', resolution: '720p', devices: 1, downloadable: false },
      { name: 'Standard', price: 13.99, quality: 'Better', resolution: '1080p', devices: 2, downloadable: true },
      { name: 'Premium', price: 17.99, quality: 'Best', resolution: '4K+HDR', devices: 4, downloadable: true },
    ],
  },
  {
    id: 2,
    name: 'PrimeVideo',
    logo: 'https://via.placeholder.com/150x50?text=PrimeVideo',
    description: 'Thousands of movies and TV shows, including Amazon Originals.',
    exclusiveContent: ['The Boys', 'The Marvelous Mrs. Maisel', 'The Wheel of Time'],
    categories: ['Movies', 'TV Shows', 'Kids', 'Sports'],
    plans: [
      { name: 'Basic', price: 8.99, quality: 'Good', resolution: '720p', devices: 2, downloadable: true },
      { name: 'Premium', price: 14.99, quality: 'Best', resolution: '4K+HDR', devices: 3, downloadable: true },
    ],
  },
  {
    id: 3,
    name: 'HBOMax',
    logo: 'https://via.placeholder.com/150x50?text=HBOMax',
    description: 'Home to HBO series, blockbuster movies, and Max Originals.',
    exclusiveContent: ['Game of Thrones', 'Succession', 'The Last of Us'],
    categories: ['Movies', 'TV Shows', 'Originals', 'DC'],
    plans: [
      { name: 'With Ads', price: 9.99, quality: 'Good', resolution: '1080p', devices: 2, downloadable: false },
      { name: 'Ad-Free', price: 15.99, quality: 'Best', resolution: '4K+HDR', devices: 3, downloadable: true },
    ],
  },
];

// Comparison data
const comparisonData = {
  categories: ['Monthly Price', 'Content Library Size', '4K Streaming', 'Offline Downloads', 'Original Content', 'Ad-Free Option', 'Family Sharing'],
  services: [
    { name: 'MovieFlix', values: ['$8.99-$17.99', 'Large', true, true, 'Excellent', true, '4 profiles'] },
    { name: 'PrimeVideo', values: ['$8.99-$14.99', 'Medium', true, true, 'Good', true, '3 profiles'] },
    { name: 'HBOMax', values: ['$9.99-$15.99', 'Medium', true, true, 'Excellent', true, '5 profiles'] },
    { name: 'DisneyPlus', values: ['$7.99-$13.99', 'Medium', true, true, 'Good', false, '7 profiles'] },
    { name: 'AppleTV+', values: ['$6.99', 'Small', true, true, 'Good', true, '6 profiles'] },
  ],
};

const Streaming = () => {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Streaming Services
      </Typography>
      
      {/* Featured Service */}
      <Paper 
        sx={{
          p: 3,
          mb: 6,
          backgroundImage: 'linear-gradient(to right, #0f0c29, #302b63, #24243e)',
          color: 'white',
        }}
      >
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={8}>
            <Typography variant="h5" gutterBottom>
              {streamingServices[0].name}
            </Typography>
            <Typography variant="body1" paragraph>
              {streamingServices[0].description}
            </Typography>
            <Typography variant="body1" paragraph>
              Exclusive content: {streamingServices[0].exclusiveContent.join(', ')}
            </Typography>
            <Button variant="contained" color="primary" sx={{ mt: 2, bgcolor: 'white', color: 'primary.main' }}>
              Start Free Trial
            </Button>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box 
              component="img"
              src={streamingServices[0].logo}
              alt={streamingServices[0].name}
              sx={{ width: '100%', maxWidth: 200, display: 'block', mx: 'auto' }}
            />
          </Grid>
        </Grid>
      </Paper>
      
      {/* Subscription Plans */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Subscription Plans
        </Typography>
        <Grid container spacing={3}>
          {streamingServices[0].plans.map((plan) => (
            <Grid item key={plan.name} xs={12} sm={4}>
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
                <CardHeader
                  title={plan.name}
                  titleTypographyProps={{ align: 'center' }}
                  sx={{
                    backgroundColor: (theme) =>
                      plan.name === 'Premium' ? theme.palette.primary.main : 'transparent',
                    color: plan.name === 'Premium' ? 'white' : 'inherit',
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography component="h2" variant="h3" color="text.primary">
                      ${plan.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /mo
                    </Typography>
                  </Box>
                  <Divider />
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <CheckIcon color="success" />
                      </ListItemIcon>
                      <ListItemText primary={`${plan.quality} video quality`} />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckIcon color="success" />
                      </ListItemIcon>
                      <ListItemText primary={`Resolution: ${plan.resolution}`} />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckIcon color="success" />
                      </ListItemIcon>
                      <ListItemText primary={`Watch on ${plan.devices} device${plan.devices > 1 ? 's' : ''}`} />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        {plan.downloadable ? <CheckIcon color="success" /> : <CloseIcon color="error" />}
                      </ListItemIcon>
                      <ListItemText primary="Download videos" />
                    </ListItem>
                  </List>
                  <Button
                    fullWidth
                    variant={plan.name === 'Premium' ? 'contained' : 'outlined'}
                    sx={{ mt: 2 }}
                  >
                    Subscribe
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      
      {/* Service Comparison */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Service Comparison
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell>Feature</TableCell>
                {comparisonData.services.map((service) => (
                  <TableCell key={service.name} align="center">{service.name}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {comparisonData.categories.map((category, index) => (
                <TableRow key={category}>
                  <TableCell component="th" scope="row">
                    {category}
                  </TableCell>
                  {comparisonData.services.map((service) => (
                    <TableCell key={`${service.name}-${category}`} align="center">
                      {typeof service.values[index] === 'boolean' ? (
                        service.values[index] ? 
                          <CheckIcon color="success" /> : 
                          <CloseIcon color="error" />
                      ) : (
                        service.values[index]
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      
      {/* All Streaming Services */}
      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Available Streaming Services
        </Typography>
        <Grid container spacing={3}>
          {streamingServices.map((service) => (
            <Grid item key={service.id} xs={12}>
              <Paper sx={{ p: 3 }}>
                <Grid container spacing={3} alignItems="center">
                  <Grid item xs={12} sm={3}>
                    <Box 
                      component="img"
                      src={service.logo}
                      alt={service.name}
                      sx={{ width: '100%', maxWidth: 150, display: 'block', mx: 'auto' }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={9}>
                    <Typography variant="h6" gutterBottom>
                      {service.name}
                    </Typography>
                    <Typography variant="body2" paragraph>
                      {service.description}
                    </Typography>
                    <Typography variant="body2">
                      <strong>Categories:</strong> {service.categories.join(', ')}
                    </Typography>
                    <Typography variant="body2">
                      <strong>Starting at:</strong> ${Math.min(...service.plans.map(plan => plan.price))}/month
                    </Typography>
                    <Button variant="outlined" sx={{ mt: 2 }}>
                      View Details
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Streaming;