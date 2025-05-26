import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPriorityFilter, selectPriorityFilter } from '../../features/todos/todosSlice';
import { Box, ButtonGroup, Button, Tooltip } from '@mui/material';
import { FlagOutlined, Flag } from '@mui/icons-material';

const priorityColors = {
  LOW: '#0288D1',
  MEDIUM: '#FFA000',
  HIGH: '#D32F2F',
  all: '#757575'
};

const PriorityFilter = () => {
  const priorityFilter = useSelector(selectPriorityFilter);
  const dispatch = useDispatch();

  const handleFilterChange = (newPriorityFilter) => {
    dispatch(setPriorityFilter(newPriorityFilter));
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
      <ButtonGroup variant="outlined" size="small" aria-label="filter todos by priority">
        <Tooltip title="All Priorities">
          <Button 
            onClick={() => handleFilterChange('all')}
            variant={priorityFilter === 'all' ? 'contained' : 'outlined'}
            sx={{ 
              minWidth: '40px',
              width: '40px',
              height: '40px',
              padding: 0,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: priorityFilter === 'all' ? 'white' : priorityColors.all,
              backgroundColor: priorityFilter === 'all' ? priorityColors.all : 'transparent'
            }}
          >
            <FlagOutlined fontSize="small" />
          </Button>
        </Tooltip>
        <Tooltip title="Low Priority">
          <Button 
            onClick={() => handleFilterChange('LOW')}
            variant={priorityFilter === 'LOW' ? 'contained' : 'outlined'}
            sx={{ 
              minWidth: '40px',
              width: '40px',
              height: '40px',
              padding: 0,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: priorityFilter === 'LOW' ? 'white' : priorityColors.LOW,
              backgroundColor: priorityFilter === 'LOW' ? priorityColors.LOW : 'transparent'
            }}
          >
            <Flag fontSize="small" />
          </Button>
        </Tooltip>
        <Tooltip title="Medium Priority">
          <Button 
            onClick={() => handleFilterChange('MEDIUM')}
            variant={priorityFilter === 'MEDIUM' ? 'contained' : 'outlined'}
            sx={{ 
              minWidth: '40px',
              width: '40px',
              height: '40px',
              padding: 0,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: priorityFilter === 'MEDIUM' ? 'white' : priorityColors.MEDIUM,
              backgroundColor: priorityFilter === 'MEDIUM' ? priorityColors.MEDIUM : 'transparent'
            }}
          >
            <Flag fontSize="small" />
          </Button>
        </Tooltip>
        <Tooltip title="High Priority">
          <Button 
            onClick={() => handleFilterChange('HIGH')}
            variant={priorityFilter === 'HIGH' ? 'contained' : 'outlined'}
            sx={{ 
              minWidth: '40px',
              width: '40px',
              height: '40px',
              padding: 0,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              color: priorityFilter === 'HIGH' ? 'white' : priorityColors.HIGH,
              backgroundColor: priorityFilter === 'HIGH' ? priorityColors.HIGH : 'transparent'
            }}
          >
            <Flag fontSize="small" />
          </Button>
        </Tooltip>
      </ButtonGroup>
    </Box>
  );
};

export default PriorityFilter; 