import { Card, CardContent } from '@mui/material';
import { Typography } from '@mui/material';
import React from 'react'
import { useLocation } from 'react-router-dom';

const CustomerOver = (props) => {
    const locatio = useLocation();

    return ( 
        <>
             <Card sx={{ minWidth: 766, width:"500px" }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        </Typography>
        <Typography variant="h5" component="div">
        
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
     
    </Card>
        </>
     );
}
 
export default CustomerOver;