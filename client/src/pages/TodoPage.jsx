import React from 'react';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import TodoFilter from '../components/TodoFilter';
import PriorityFilter from '../components/filters/PriorityFilter';
import SearchTodo from '../components/SearchTodo';
import { Container, Paper, Typography, Box, Divider } from '@mui/material';

const TodoPage = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper 
        elevation={2} 
        sx={{ 
          p: 3, 
          bgcolor: 'rgba(255, 255, 255, 0.8)', 
          backdropFilter: 'blur(10px)',
          borderRadius: 2
        }}
      >
        <Box textAlign="center" mb={3}>
          <Typography 
            variant="h4" 
            component="h1"
            fontWeight="bold"
            sx={{
              background: 'linear-gradient(to right, #3b82f6, #4f46e5)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              mb: 1
            }}
          >
            Tasks
          </Typography>
        </Box>
        <TodoForm />
        <hr />
        <SearchTodo />
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 2 }}>
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            Filter by Status
          </Typography>
          <TodoFilter />
          <Divider sx={{ width: '100%', my: 2 }} />
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            Filter by Priority
          </Typography>
          <PriorityFilter />
        </Box>
        <TodoList />
      </Paper>
    </Container>
  );
};

export default TodoPage;