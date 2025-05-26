import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchTerm, selectSearchTerm } from '../features/todos/todosSlice';
import { TextField, InputAdornment, Box } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

const SearchTodo = () => {
  const searchTerm = useSelector(selectSearchTerm);
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  return (
    <Box sx={{ mb: 2 }}>
      <TextField
        fullWidth
        size="small"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search tasks..."
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon fontSize="small" color="action" />
            </InputAdornment>
          ),
        }}
        sx={{
          '& .MuiOutlinedInput-root': {
            bgcolor: 'rgba(255, 255, 255, 0.7)',
            '&:hover fieldset': {
              borderColor: 'primary.main',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'primary.main',
              boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)',
            },
          }
        }}
      />
    </Box>
  );
};

export default SearchTodo; 