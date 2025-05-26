import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTodo, updatePriority } from '../features/todos/todosSlice';
import { Button, TextField, Checkbox, Chip, Menu, MenuItem } from '@mui/material';
import { Card, CardContent } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon, Save as SaveIcon, Close as CloseIcon, Flag as FlagIcon } from '@mui/icons-material';

const priorityColors = {
  LOW: { bg: '#E5F6FD', color: '#0288D1', borderColor: '#B3E5FC' },
  MEDIUM: { bg: '#FFF8E1', color: '#FFA000', borderColor: '#FFECB3' },
  HIGH: { bg: '#FFEBEE', color: '#D32F2F', borderColor: '#FFCDD2' }
};

const TodoItem = ({ todo, onToggle, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);
  const [priorityMenuAnchor, setPriorityMenuAnchor] = useState(null);
  const dispatch = useDispatch();

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (newTitle.trim() !== '') {
      dispatch(updateTodo({ id: todo.id, title: newTitle.trim() }));
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setNewTitle(todo.title);
    setIsEditing(false);
  };

  const handlePriorityClick = (event) => {
    setPriorityMenuAnchor(event.currentTarget);
  };

  const handlePriorityClose = () => {
    setPriorityMenuAnchor(null);
  };

  const handlePriorityChange = (newPriority) => {
    dispatch(updatePriority({ id: todo.id, priority: newPriority }));
    handlePriorityClose();
  };

  const getPriorityColor = (priority) => {
    return priorityColors[priority] || priorityColors.MEDIUM;
  };

  return (
    <Card sx={{ 
      width: '100%',
      backgroundColor: todo.completed ? 'rgba(236, 253, 245, 0.6)' : 'rgba(255, 255, 255, 0.7)',
      backdropFilter: 'blur(8px)',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
      borderLeft: todo.completed ? '4px solid #10B981' : `4px solid ${getPriorityColor(todo.priority).borderColor}`,
      transition: 'all 0.2s ease'
    }}>
      <CardContent sx={{ padding: '12px !important' }}>
        {isEditing ? (
          <div style={{ display: 'flex', gap: '12px' }}>
            <TextField
              size="small"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              fullWidth
              variant="outlined"
              autoFocus
            />
            <Button 
              size="small" 
              variant="contained" 
              onClick={handleSave}
              sx={{ minWidth: '36px', p: 1 }}
            >
              <SaveIcon fontSize="small" />
            </Button>
            <Button 
              size="small" 
              variant="outlined" 
              onClick={handleCancel}
              sx={{ minWidth: '36px', p: 1 }}
            >
              <CloseIcon fontSize="small" />
            </Button>
          </div>
        ) : (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Checkbox
                checked={todo.completed}
                onChange={() => onToggle(todo.id, todo.completed)}
                size="small"
                color="primary"
              />
              <span style={{ 
                overflow: 'hidden', 
                textOverflow: 'ellipsis', 
                whiteSpace: 'nowrap',
                textDecoration: todo.completed ? 'line-through' : 'none',
                color: todo.completed ? 'rgba(107, 114, 128, 0.8)' : 'inherit'
              }}>
                {todo.title}
              </span>
            </div>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <Chip
                label={todo.priority}
                size="small"
                onClick={handlePriorityClick}
                icon={<FlagIcon fontSize="small" />}
                sx={{
                  backgroundColor: getPriorityColor(todo.priority).bg,
                  color: getPriorityColor(todo.priority).color,
                  borderColor: getPriorityColor(todo.priority).borderColor,
                  border: '1px solid',
                  '&:hover': {
                    backgroundColor: getPriorityColor(todo.priority).bg,
                    opacity: 0.9
                  }
                }}
              />
              <Menu
                anchorEl={priorityMenuAnchor}
                open={Boolean(priorityMenuAnchor)}
                onClose={handlePriorityClose}
              >
                <MenuItem onClick={() => handlePriorityChange('LOW')}>Low</MenuItem>
                <MenuItem onClick={() => handlePriorityChange('MEDIUM')}>Medium</MenuItem>
                <MenuItem onClick={() => handlePriorityChange('HIGH')}>High</MenuItem>
              </Menu>
              <Button 
                size="small" 
                variant="outlined" 
                onClick={handleEdit}
                sx={{ minWidth: '32px', width: '32px', height: '32px', padding: 0 }}
              >
                <EditIcon fontSize="small" />
              </Button>
              <Button 
                size="small" 
                variant="outlined" 
                onClick={() => onDelete(todo.id)}
                color="error"
                sx={{ minWidth: '32px', width: '32px', height: '32px', padding: 0 }}
              >
                <DeleteIcon fontSize="small" />
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default TodoItem;
