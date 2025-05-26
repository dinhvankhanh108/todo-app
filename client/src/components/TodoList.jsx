import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos, toggleTodo, deleteTodo, selectTodos, selectStatus, selectError } from '../features/todos/todosSlice';
import TodoItem from './TodoItem';
import { Card, CardContent } from './ui/card';
import { Loader2, AlertCircle, ClipboardList } from 'lucide-react';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTodos());
    }
  }, [status, dispatch]);

  const handleToggle = (id, completed) => {
    dispatch(toggleTodo({ id, completed: !completed }));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  let content;

  if (status === 'loading') {
    content = (
      <div className="flex justify-center items-center p-10 animate-pulse">
        <Loader2 className="h-8 w-8 text-primary animate-spin mr-3" />
        <span className="text-base text-muted-foreground">Loading tasks...</span>
      </div>
    );
  } else if (status === 'succeeded') {
    content = (
      <div className="flex flex-row gap-4 overflow-x-auto pb-2">
        {todos.length > 0 ? (
          todos.map((todo, ) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={handleToggle}
              onDelete={handleDelete}
            />
          ))
        ) : (
          <Card className="border-dashed border-2 bg-background/50 backdrop-blur-sm animate-fade-in w-full">
            <CardContent className="flex flex-col items-center justify-center p-10 text-center">
              <ClipboardList className="h-12 w-12 text-muted-foreground mb-3 opacity-70" />
              <p className="text-muted-foreground text-lg font-medium">No tasks found</p>
              <p className="text-sm text-muted-foreground mt-2">Add a new task to get started</p>
            </CardContent>
          </Card>
        )}
      </div>
    );
  } else if (status === 'failed') {
    content = (
      <Card className="border-destructive/50 bg-destructive/10 backdrop-blur-sm animate-fade-in">
        <CardContent className="flex items-center p-6 text-destructive">
          <AlertCircle className="h-6 w-6 mr-3" />
          <span className="font-medium">{error}</span>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="mt-4">
      {content}
    </div>
  );
};

export default TodoList;
