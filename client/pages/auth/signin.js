// import { useState, useEffect } from 'react';
// import Router from 'next/router';
// import useRequest from '../../hooks/use-request';

// export default () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const { doRequest, errors } = useRequest({
//     url: '/api/users/signin',
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
//       <h1>Sign In</h1>
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
//       <button className="btn btn-primary">Sign In</button>
//     </form>
//   );
// };


import * as React from 'react';
import { useState } from 'react';
import Router from 'next/router';
import { useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import CssBaseline from '@mui/joy/CssBaseline';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import useRequest from '../../hooks/use-request';

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return <Button variant="soft">Change mode</Button>;
  }

  return (
    <Select
      variant="soft"
      value={mode}
      onChange={(event, newMode) => {
        setMode(newMode);
      }}
      sx={{ width: 'max-content' }}
    >
      <Option value="system">System</Option>
      <Option value="light">Light</Option>
      <Option value="dark">Dark</Option>
    </Select>
  );
}

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { doRequest, errors } = useRequest({
    url: '/api/users/signin',
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
      <ModeToggle />
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
        <form onSubmit={onSubmit}>
          <Typography level="h4" component="h1">
            <b>Welcome!</b>
          </Typography>
          <Typography level="body-sm">Sign in to continue.</Typography>

          <FormControl>
            <FormLabel>Email</FormLabel>
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
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>

          {errors}

          <Button type="submit" sx={{ mt: 1 }}>
            Log in
          </Button>
        </form>

        <Typography
          endDecorator={<Link href="/auth/signup">Sign up</Link>}
          sx={{ fontSize: 'sm', alignSelf: 'center' }}
        >
          Don&apos;t have an account?
        </Typography>
      </Sheet>
    </main>
  );
}
