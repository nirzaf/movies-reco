import { ReactNode } from 'react';
import { Box, Container } from '@mui/material';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        width: '100%',
      }}
    >
      <Header />
      <Container 
        component="main" 
        sx={{ 
          flexGrow: 1, 
          py: { xs: 2, sm: 3, md: 4 },
          px: { xs: 2, sm: 3 },
          maxWidth: { sm: 'lg' },
          width: '100%'
        }}
      >
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export default Layout;