import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Task = ({ task }) => {
  return (
    <Card>
      <CardContent>
        <div>{JSON.stringify(task)}</div>
      </CardContent>
    </Card>
  );
};

export default Task;