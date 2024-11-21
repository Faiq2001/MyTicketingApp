// import { useState, useEffect } from 'react';
// import Router from 'next/router';
// import useRequest from '../../hooks/use-request';

// export default () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const { doRequest, errors } = useRequest({
//     url: '/api/users/signup',
//     method: 'post',
//     body: {
//       email,
//       password
//     },
//     onSuccess: () => Router.push('/')
//   });

//   const onSubmit = async event => {
//     event.preventDefault();

//     await doRequest();
//   };

//   return (
//     <form onSubmit={onSubmit}>
//       <h1>Sign Up</h1>
//       <div className="form-group">
//         <label>Email Address</label>
//         <input
//           value={email}
//           onChange={e => setEmail(e.target.value)}
//           className="form-control"
//         />
//       </div>
//       <div className="form-group">
//         <label>Password</label>
//         <input
//           value={password}
//           onChange={e => setPassword(e.target.value)}
//           type="password"
//           className="form-control"
//         />
//       </div>
//       {errors}
//       <button className="btn btn-primary">Sign Up</button>
//     </form>
//   );
// };

import React, { useState } from 'react';
import Router from 'next/router';
import useRequest from '../../hooks/use-request';
import { CssBaseline } from '@mui/joy';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { doRequest, errors } = useRequest({
    url: '/api/users/signup',
    method: 'post',
    body: {
      email,
      password,
    },
    onSuccess: () => Router.push('/'),
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    await doRequest();
  };

  return (
    <main>
      <CssBaseline />
      <Sheet
        sx={{
          width: 300,
          mx: 'auto',
          my: 4,
          py: 3,
          px: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          borderRadius: 'sm',
          boxShadow: 'md',
        }}
        variant="outlined"
      >
        <Typography level="h4" component="h1">
          <b>Sign Up</b>
        </Typography>
        <Typography level="body-sm">Create a new account.</Typography>
        <form onSubmit={onSubmit}>
          <FormControl>
            <FormLabel>Email Address</FormLabel>
            <Input
              name="email"
              type="email"
              placeholder="johndoe@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>Password</FormLabel>
            <Input
              name="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          {errors && (
            <Typography level="body-sm" color="danger">
              {errors}
            </Typography>
          )}
          <Button sx={{ mt: 2 }} type="submit">
            Sign Up
          </Button>
        </form>
        <Typography
          endDecorator={<Link href="/auth/signin">Sign in</Link>}
          sx={{ fontSize: 'sm', alignSelf: 'center' }}
        >
          Already have an account?
        </Typography>
      </Sheet>
    </main>
  );
};

export default Signup;

// import React, { useState } from 'react';
// import Router from 'next/router';
// import useRequest from '../../hooks/use-request';
// import { CssBaseline } from '@mui/joy';
// import { Snackbar, Button, Alert } from '@mui/material';  // Correct Snackbar import
// import Sheet from '@mui/joy/Sheet';
// import Typography from '@mui/joy/Typography';
// import FormControl from '@mui/joy/FormControl';
// import FormLabel from '@mui/joy/FormLabel';
// import Input from '@mui/joy/Input';
// import Link from '@mui/joy/Link';

// const Signup = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const { doRequest, errors } = useRequest({
//     url: '/api/users/signup',
//     method: 'post',
//     body: {
//       email,
//       password,
//     },
//     onSuccess: () => Router.push('/'),  // Redirect on successful signup
//   });

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     await doRequest();  // Trigger the request
//   };

//   return (
//     <main>
//       <CssBaseline />
//       <Sheet
//         sx={{
//           width: 300,
//           mx: 'auto',
//           my: 4,
//           py: 3,
//           px: 2,
//           display: 'flex',
//           flexDirection: 'column',
//           gap: 2,
//           borderRadius: 'sm',
//           boxShadow: 'md',
//         }}
//         variant="outlined"
//       >
//         <Typography level="h4" component="h1">
//           <b>Sign Up</b>
//         </Typography>
//         <Typography level="body-sm">Create a new account.</Typography>
//         <form onSubmit={onSubmit}>
//           <FormControl>
//             <FormLabel>Email Address</FormLabel>
//             <Input
//               name="email"
//               type="email"
//               placeholder="johndoe@email.com"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </FormControl>
//           <FormControl>
//             <FormLabel>Password</FormLabel>
//             <Input
//               name="password"
//               type="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </FormControl>

//           {/* Display errors in Snackbar if any */}
//           {errors && (
//             <Snackbar
//               open={true}  // Ensure Snackbar is open when there's an error
//               autoHideDuration={6000}  // Hide after 6 seconds
//               onClose={() => {}}
//             >
//               <Alert severity="error" sx={{ width: '100%' }}>
//                 {errors}  {/* Assuming errors is a string */}
//               </Alert>
//             </Snackbar>
//           )}

//           <Button sx={{ mt: 2 }} type="submit">
//             Sign Up
//           </Button>
//         </form>

//         <Typography
//           endDecorator={<Link href="/auth/signin">Sign in</Link>}
//           sx={{ fontSize: 'sm', alignSelf: 'center' }}
//         >
//           Already have an account?
//         </Typography>
//       </Sheet>
//     </main>
//   );
// };

// export default Signup;
