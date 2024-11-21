// import { useState } from 'react';
// import Router from 'next/router';
// import useRequest from '../../hooks/use-request';

// const NewTicket = () => {
//   const [title, setTitle] = useState('');
//   const [price, setPrice] = useState('');
//   const { doRequest, errors } = useRequest({
//     url: '/api/tickets',
//     method: 'post',
//     body: {
//       title,
//       price,
//     },
//     onSuccess: () => Router.push('/'),
//   });

//   const onSubmit = (event) => {
//     event.preventDefault();

//     doRequest();
//   };

//   const onBlur = () => {
//     const value = parseFloat(price);

//     if (isNaN(value)) {
//       return;
//     }

//     setPrice(value.toFixed(2));
//   };

//   return (
//     <div>
//       <h1>Create a Ticket</h1>
//       <form onSubmit={onSubmit}>
//         <div className="form-group">
//           <label>Title</label>
//           <input
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="form-control"
//           />
//         </div>
//         <div className="form-group">
//           <label>Price</label>
//           <input
//             value={price}
//             onBlur={onBlur}
//             onChange={(e) => setPrice(e.target.value)}
//             className="form-control"
//           />
//         </div>
//         {errors}
//         <button className="btn btn-primary">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default NewTicket;

import React, { useState } from 'react';
import Router from 'next/router';
import useRequest from '../../hooks/use-request';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';

const NewTicket = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const { doRequest, errors } = useRequest({
    url: '/api/tickets',
    method: 'post',
    body: {
      title,
      price,
    },
    onSuccess: () => Router.push('/'),
  });

  const onSubmit = (event) => {
    event.preventDefault();
    doRequest();
  };

  const onBlur = () => {
    const value = parseFloat(price);
    if (!isNaN(value)) {
      setPrice(value.toFixed(2));
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 400,
        margin: 'auto',
        mt: 4,
        p: 3,
        boxShadow: 3,
        borderRadius: 2,
        bgcolor: 'background.paper',
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom align="center">
        Create a Ticket
      </Typography>
      <form onSubmit={onSubmit}>
        <Box sx={{ mb: 2 }}>
          <TextField
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
            required
          />
        </Box>
        <Box sx={{ mb: 2 }}>
          <TextField
            label="Price"
            value={price}
            onBlur={onBlur}
            onChange={(e) => setPrice(e.target.value)}
            fullWidth
            required
            type="number"
          />
        </Box>
        {errors && (
          <Box sx={{ mb: 2 }}>
            <Alert severity="error">{errors}</Alert>
          </Box>
        )}
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default NewTicket;
