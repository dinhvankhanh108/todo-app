import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todos/todosSlice';
import { Button, TextField, Paper, Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';

const TodoForm = () => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('MEDIUM');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() !== '') {
      dispatch(addTodo({ title: title.trim(), priority }));
      setTitle('');
      setPriority('MEDIUM');
    }
  };

  return (
    <Paper 
      elevation={0} 
      sx={{ 
        p: 2, 
        bgcolor: 'rgba(255, 255, 255, 0.7)', 
        backdropFilter: 'blur(8px)',
        borderRadius: 2,
        mb: 2
      }}
    >
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <TextField
            size="small"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Add a new task..."
            fullWidth
            sx={{
              '& .MuiOutlinedInput-root': {
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
          <FormControl size="small" sx={{ minWidth: '140px', flexShrink: 0 }}>
            <InputLabel id="priority-label">Priority</InputLabel>
            <Select
              labelId="priority-label"
              value={priority}
              label="Priority"
              onChange={(e) => setPriority(e.target.value)}
            >
              <MenuItem value="LOW">Low</MenuItem>
              <MenuItem value="MEDIUM">Medium</MenuItem>
              <MenuItem value="HIGH">High</MenuItem>
            </Select>
          </FormControl>
          <Button 
            type="submit" 
            variant="contained" 
            color="primary"
            startIcon={<AddIcon />}
            sx={{ 
              px: 2,
              flexShrink: 0,
              background: 'linear-gradient(to right, #3b82f6, #4f46e5)',
              '&:hover': {
                background: 'linear-gradient(to right, #2563eb, #4338ca)',
              },
              boxShadow: '0 2px 8px rgba(59, 130, 246, 0.3)'
            }}
          >
            Add
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default TodoForm;
