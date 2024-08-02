import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import FeatureIcon1 from '@mui/icons-material/Star';
import FeatureIcon2 from '@mui/icons-material/CheckCircle';
import FeatureIcon3 from '@mui/icons-material/ThumbUp';

const Home = () => {
  return (
    <Container>
      <Box mt={4} mb={4} textAlign="center">
        <Typography variant="h2" gutterBottom>Welcome to Our Website</Typography>
        <Typography variant="h6">
          We are dedicated to providing the best service to our customers. Explore our features and see what we can offer you!
        </Typography>
      </Box>

      <Box mb={4}>
        <Typography variant="h4" gutterBottom>Introduction</Typography>
        <Typography>
          Our company has been at the forefront of innovation since its inception. We specialize in offering top-quality products and services that meet the needs of our diverse clientele. Our team of experts works tirelessly to ensure customer satisfaction and to continuously improve our offerings.
        </Typography>
      </Box>

      <Box mb={4}>
        <Typography variant="h4" gutterBottom>Features</Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <FeatureIcon1 style={{ fontSize: 50, marginBottom: '10px' }} />
              <Typography variant="h6" gutterBottom>Feature One</Typography>
              <Typography align="center">
                Our first feature is designed to provide exceptional value to our customers by offering unmatched quality and reliability.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <FeatureIcon2 style={{ fontSize: 50, marginBottom: '10px' }} />
              <Typography variant="h6" gutterBottom>Feature Two</Typography>
              <Typography align="center">
                The second feature focuses on user-friendliness and ease of use, ensuring that our products are accessible to everyone.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <FeatureIcon3 style={{ fontSize: 50, marginBottom: '10px' }} />
              <Typography variant="h6" gutterBottom>Feature Three</Typography>
              <Typography align="center">
                Our third feature is all about performance and efficiency, helping you achieve your goals faster and more effectively.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box mb={4} textAlign="center">
        <Typography variant="h4" gutterBottom>Get Started Today!</Typography>
        <Typography variant="h6" mb={2}>
          Join us and experience the difference. Click the button below to sign up and start your journey with us.
        </Typography>
        <Button variant="contained" color="primary" size="large">Sign Up Now</Button>
      </Box>
    </Container>
  );
};

export default Home;
