import { Box, Stack } from '@mui/material';
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';
import Loader from './Loader';

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return <Loader />;
  return (
    <Stack
      direction={direction || 'row'}
      flexWrap="wrap"
      flexDirection={'row'}
      // justifyContent="space-around"
      alignItems="start"
      gap={2}
    >
      {videos
        .map((item, idx) => (
          <Box key={idx}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channelDetail={item} />}
          </Box>
        ))
        .slice(0, 25)}
    </Stack>
  );
};

export default Videos;
