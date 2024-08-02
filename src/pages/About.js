import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import HistoryIcon from '@mui/icons-material/History';
import MissionIcon from '@mui/icons-material/Flag';
import TeamIcon from '@mui/icons-material/Group';

const About = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>About Us</Typography>

      <Box mb={4}>
        <Box display="flex" alignItems="center" mb={2}>
          <HistoryIcon style={{ marginRight: '10px' }} />
          <Typography variant="h5">Our History</Typography>
        </Box>
        <Typography>
          Founded in 2010, our company has grown from a small startup to a leading player in the industry. We started with a vision to innovate and provide top-notch services to our clients. Over the years, we have expanded our offerings and grown our team, always staying true to our core values.
        </Typography>
      </Box>

      <Box mb={4}>
        <Box display="flex" alignItems="center" mb={2}>
          <MissionIcon style={{ marginRight: '10px' }} />
          <Typography variant="h5">Our Mission</Typography>
        </Box>
        <Typography>
          Our mission is to deliver high-quality products that bring value to our customers. We strive for excellence in everything we do and are committed to continuous improvement. Our goal is to be the best in the industry, setting standards for others to follow.
        </Typography>
      </Box>

      <Box mb={4}>
        <Box display="flex" alignItems="center" mb={2}>
          <TeamIcon style={{ marginRight: '10px' }} />
          <Typography variant="h5">Our Team</Typography>
        </Box>
        <Typography>
          Our team is composed of highly skilled professionals with diverse backgrounds and expertise. We believe that our people are our greatest asset, and we foster a collaborative and inclusive work environment. Meet some of our key team members below:
        </Typography>
        <Grid container spacing={2} mt={2}>
          <Grid item xs={12} sm={6} md={4}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Avatar alt="John Doe" src="/path/to/image.jpg" style={{ width: 100, height: 100 }} />
              <Typography variant="h6">John Doe</Typography>
              <Typography variant="body2">CEO</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Avatar alt="Jane Smith" src="/path/to/image.jpg" style={{ width: 100, height: 100 }} />
              <Typography variant="h6">Jane Smith</Typography>
              <Typography variant="body2">CTO</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Avatar alt="Alice Johnson" src="/path/to/image.jpg" style={{ width: 100, height: 100 }} />
              <Typography variant="h6">Alice Johnson</Typography>
              <Typography variant="body2">COO</Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default About;
