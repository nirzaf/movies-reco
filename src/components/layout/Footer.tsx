import { Box, Container, Typography, Link as MuiLink, Grid, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) => theme.palette.grey[900],
        color: 'white',
        borderTop: '1px solid rgba(255, 255, 255, 0.3)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="flex-start">
          <Grid item xs={12} sm={4} sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              MovieReco
            </Typography>
            <Typography variant="body2">
              Your ultimate movie recommendation platform
            </Typography>
            <Typography variant="body2" sx={{ mt: 2 }}>
              © {new Date().getFullYear()} MovieReco. All rights reserved.
            </Typography>
          </Grid>
          
          <Grid item xs={12} sm={4} sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <MuiLink href="/" color="inherit" sx={{ mb: 1, '&:hover': { color: 'primary.main' } }}>
                Home
              </MuiLink>
              <MuiLink href="/rankings" color="inherit" sx={{ mb: 1, '&:hover': { color: 'primary.main' } }}>
                Rankings
              </MuiLink>
              <MuiLink href="/streaming" color="inherit" sx={{ mb: 1, '&:hover': { color: 'primary.main' } }}>
                Streaming
              </MuiLink>
              <MuiLink href="/profile" color="inherit" sx={{ mb: 1, '&:hover': { color: 'primary.main' } }}>
                Profile
              </MuiLink>
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={4} sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
            <Typography variant="h6" gutterBottom fontWeight="bold">
              Connect With Us
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'flex-start' }, mb: 2 }}>
              <IconButton color="inherit" aria-label="Facebook" sx={{ mr: 1, '&:hover': { color: '#4267B2' } }}>
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="Twitter" sx={{ mr: 1, '&:hover': { color: '#1DA1F2' } }}>
                <TwitterIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="Instagram" sx={{ mr: 1, '&:hover': { color: '#C13584' } }}>
                <InstagramIcon />
              </IconButton>
            </Box>
            <Typography variant="body2">
              Contact: info@moviereco.com
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;