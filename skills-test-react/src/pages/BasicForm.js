import React from 'react';
import { Formik, Field, Form } from 'formik';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Delete from '@mui/icons-material/Delete';
import { AccountMenu } from '../layout';
import useTodoStore from '../store';

const BasicForm = () => {
  const { todos, addTodo, deleteTodo } = useTodoStore((state) => ({
    todos: state.todos,
    addTodo: state.addTodo,
    deleteTodo: state.deleteTodo,
  }));

  const handleSubmit = (values) => {
    addTodo(values.todo);
  };

  return (
    <Container maxWidth='sm'>
      <AccountMenu />
      <Box sx={{ my: 4 }}>
        <Typography
          variant='h4'
          component='h1'
          gutterBottom
          textTransform='uppercase'
        >
          Todo
        </Typography>
        <Formik
          initialValues={{
            todo: '',
          }}
          onSubmit={handleSubmit}
        >
          {({ handleChange, handleBlur }) => (
            <Form>
              <label htmlFor='todo'>Add ToDo </label>
              <Field
                id='todo'
                name='todo'
                placeholder='TextHere'
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Button type='submit'>Submit</Button>
            </Form>
          )}
        </Formik>

        <Grid container direction='column' spacing='8px'>
          {todos.map((todo, index) => {
            return (
              <Grid key={`${index}-${todo}`} container>
                <Typography>{todo}</Typography>
                <Button onClick={() => deleteTodo(index)}>
                  <Delete />
                </Button>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Container>
  );
};

export default BasicForm;
