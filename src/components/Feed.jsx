import { Box, Stack, Typography } from '@mui/material';
import Sidebar from './Sidebar';
import { useEffect, useState } from 'react';
/* useEffect is run when the page is render */

import { fetchFromAPI } from '../utils/fetchFromApi';
import Videos from './Videos';

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      // setVideos(null);
      try {
        // setVideos(null);
        const data = await fetchFromAPI(
          `search?part=snippet&q=${selectedCategory}`
        );
        setVideos(data.items);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [selectedCategory]);
  // --

  return (
    // instant return
    <Stack sx={{ flexDirection: { sx: 'column', md: 'row' } }}>
      <Box
        sx={{
          height: { sx: 'auto', md: 'auto' },

          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: 'red' }}
        >
          Copyright © 2024 KudoMedia
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: 'auto', flex: 1, overflow: 'auto' }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: 'white' }}
        >
          {selectedCategory} <span style={{ color: '#FC1503' }}>videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
