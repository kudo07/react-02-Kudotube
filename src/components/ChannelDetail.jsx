import { useEffect, useState } from 'react';
import { fetchFromAPI } from '../utils/fetchFromApi';
import { Box } from '@mui/material';
import ChannelCard from './ChannelCard';
import Videos from './Videos';
import { useParams } from 'react-router-dom';

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);

      setChannelDetail(data?.items[0]);

      const videosData = await fetchFromAPI(
        `search?channelId=${id}&part=snippet%2Cid&order=date`
      );

      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            height: '300px',
            background:
              'linear-gradient(90deg, #f70000 0%, #e600ff 100%, #b300ff 100%)',
            zIndex: 10,
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>
      <Box p={2} display="flex">
        <Box sx={{ mr: { sm: '100px' } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};
export default ChannelDetail;
