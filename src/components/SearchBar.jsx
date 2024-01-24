import { IconButton, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const onhandleClick = (e) => {
    e.preventDefault();
    if (searchTerm) {
      // console.log('search', searchTerm);
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  };
  return (
    <Paper
      component="form"
      onSubmit={onhandleClick}
      sx={{
        borderRadius: 20,
        border: '1px solid black',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 },
        position: 'sticky',
      }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <IconButton>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
