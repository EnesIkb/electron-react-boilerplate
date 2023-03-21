import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Fahrzeugschein() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <h6 style={{ color: 'green' }}>Zulassungsbescheinigung Teil I</h6>
        <h6 style={{ fontSize: '10px', alignSelf: 'center', color: 'green' }}>
          (Fahrzeugschein)
        </h6>
        <TextField
          id="outlined-basic"
          label="Nr."
          variant="outlined"
          style={{ marginTop: '5%' }}
          size="small"
        />
        <TextField
          id="outlined-basic"
          label="A Amtliches Kennzeichen"
          variant="outlined"
          style={{ marginTop: '10%' }}
          size="small"
        />
        <h5
          style={{
            fontSize: '10px',
            alignSelf: 'center',
            color: 'green',
            marginTop: '3%',
          }}
        >
          C1.1 Name oder Firmenname
        </h5>
        <h6 style={{ fontSize: '15px', alignSelf: 'center', marginTop: '-3%' }}>
          Ilkbay
        </h6>
        <h5
          style={{
            fontSize: '10px',
            alignSelf: 'center',
            color: 'green',
            marginTop: '5%',
          }}
        >
          C1.2 Vorname(n)
        </h5>
        <h6 style={{ fontSize: '15px', alignSelf: 'center', marginTop: '-3%' }}>
          Enes
        </h6>
        <h5
          style={{
            fontSize: '10px',
            alignSelf: 'center',
            color: 'green',
            marginTop: '5%',
          }}
        >
          C1.3 Anschrift
        </h5>
        <h6 style={{ fontSize: '15px', alignSelf: 'center', marginTop: '-3%' }}>
          Römerstr. 341
        </h6>
        <h6
          style={{
            fontSize: '15px',
            alignSelf: 'center',
            marginTop: '-3%',
            arginTop: '5%',
          }}
        >
          47178 Duisburg
        </h6>
        <h5
          style={{
            fontSize: '10px',
            alignSelf: 'center',
            color: 'green',
            marginTop: '10%',
          }}
        >
          X-Nächste HU
        </h5>
        <TextField
          id="outlined-basic"
          label="Monat und Jahr"
          variant="outlined"
          style={{}}
          size="small"
        />
      </Grid>
      <Grid item xs={4}>
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <TextField
              id="outlined-basic"
              label="B"
              variant="outlined"
              inputProps={{ style: { fontSize: 10 } }}
              InputLabelProps={{ style: { fontSize: 10, color: 'green' } }}
              size="small"
              type="date"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="outlined-basic"
              label="2.1"
              variant="outlined"
              inputProps={{ style: { fontSize: 10 } }}
              InputLabelProps={{ style: { fontSize: 10, color: 'green' } }}
              size="small"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              id="outlined-basic"
              label="2.2"
              variant="outlined"
              inputProps={{ style: { fontSize: 10 } }}
              InputLabelProps={{ style: { fontSize: 10, color: 'green' } }}
              size="small"
            />
          </Grid>

          <Grid container spacing={2} style={{ marginLeft: '0%' }}>
            <Grid item xs={5} md={6}>
              <TextField
                id="outlined-basic"
                label="J"
                variant="outlined"
                inputProps={{ style: { fontSize: 10 } }}
                InputLabelProps={{ style: { fontSize: 10, color: 'green' } }}
                style={{ marginTop: '10%' }}
                size="small"
              />
            </Grid>
            <Grid item xs={5} md={6}>
              <TextField
                id="outlined-basic"
                label="4"
                variant="outlined"
                inputProps={{ style: { fontSize: 10 } }}
                InputLabelProps={{ style: { fontSize: 10, color: 'green' } }}
                style={{ marginTop: '10%' }}
                size="small"
              />
            </Grid>
          </Grid>

          <TextField
            id="outlined-basic"
            label="D.1"
            variant="outlined"
            inputProps={{ style: { fontSize: 10 } }}
            InputLabelProps={{ style: { fontSize: 10, color: 'green' } }}
            size="small"
            style={{ marginTop: '4%', marginLeft: '5%', width: '100%' }}
          />

<TextField
          id="filled-multiline-flexible"
          label="D.2"
          multiline
          maxRows={4}
          variant="outlined"
          style={{ marginTop: '4%', marginLeft: '5%', width: '100%' }}
          inputProps={{ style: { fontSize: 10 } }}
            InputLabelProps={{ style: { fontSize: 10, color: 'green' } }}
        />
        </Grid>
      </Grid>
      <Grid item xs={4}>
        <Item>xs=4</Item>
      </Grid>
    </Grid>
  );
}
