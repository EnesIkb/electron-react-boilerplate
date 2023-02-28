import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';

export default function CustomerList({customer}) {

    console.log(customer)
  return (
    <List
      sx={{
        width: '100%',
        paddingLeft:"30px",
        paddingRight:"30px",
        maxWidth: 360,
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 300,
        '& ul': { padding: 0 },
      }}
      subheader={<li />}

    >
      {["A", "B", "C", "D", "E"].map((sectionId) => (
        <li key={`section-${sectionId}`}>
          <ul>
            <ListSubheader style={{color:"grey", borderBottom:"solid 0.5px" ,borderColor:"grey"}}>{`${sectionId}`}</ListSubheader>
            {customer.map((item) => (
              <>
                {
                    item.firstName.charAt(0).toUpperCase() === sectionId && 
                    <ListItem key={item.id}>
                     <ListItemText primary={item.firstName + " " +item.lastName} />
                     </ListItem>

                }
              </>
            ))}
          </ul>
        </li>
      ))}
    </List>
  );
}