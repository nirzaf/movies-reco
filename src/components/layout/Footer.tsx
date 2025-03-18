import { Box, Container, Typography, Link as MuiLink, Grid, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) => theme.palette.grey[900],
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              MovieReco
            </Typography>
            <Typography variant="body2">
              Your ultimate movie recommendation platform
            </Typography>
            <Typography variant="body2" sx={{ mt: 2 }}>
              © {new Date().getFullYear()} MovieReco. All rights reserved.
            </Typography>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Typography variant="body2">
              <MuiLink href="/" color="inherit" sx={{ display: 'block', mb: 1 }}>
                Home
              </MuiLink>
              <MuiLink href="/rankings" color="inherit" sx={{ display: 'block', mb: 1 }}>
                Rankings
              </MuiLink>
              <MuiLink href="/streaming" color="inherit" sx={{ display: 'block', mb: 1 }}>
                Streaming
              </MuiLink>
              <MuiLink href="/profile" color="inherit" sx={{ display: 'block', mb: 1 }}>
                Profile
              </MuiLink>
            </Typography>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Connect With Us
            </Typography>
            <Box>
              <IconButton color="inherit" aria-label="Facebook">
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="Twitter">
                <TwitterIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="Instagram">
                <InstagramIcon />
              </IconButton>
            </Box>
            <Typography variant="body2" sx={{ mt: 2 }}>
              Contact: info@moviereco.com
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;