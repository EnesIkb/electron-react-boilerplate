import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { ButtonBase } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';


export default function OneCarBox() {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <Card sx={{ display: 'flex' }}>
      <ButtonBase onClick={() => navigate("/car/view")}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Audi
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            A7
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
Probefahrt
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: "70%" }}
        src= {require("../../images/2023.png")}
        alt="Live from space album "
      />
      </ButtonBase>
    </Card>

  );
}