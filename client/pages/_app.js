// import 'bootstrap/dist/css/bootstrap.css';
// import buildClient from '../api/build-client';
// import Header from '../components/header';

// const AppComponent = ({ Component, pageProps, currentUser }) => {
//   return (
//     <div>
//       <Header currentUser={currentUser} />
//       <div className="container">
//         <Component currentUser={currentUser} {...pageProps} />
//       </div>
//     </div>
//   );
// };

// AppComponent.getInitialProps = async (appContext) => {
//   const client = buildClient(appContext.ctx);
//   const { data } = await client.get('/api/users/currentuser');

//   let pageProps = {};
//   if (appContext.Component.getInitialProps) {
//     pageProps = await appContext.Component.getInitialProps(
//       appContext.ctx,
//       client,
//       data.currentUser
//     );
//   }

//   return {
//     pageProps,
//     ...data,
//   };
// };

// export default AppComponent;
// import 'bootstrap/dist/css/bootstrap.css';
// import { CssVarsProvider } from '@mui/joy/styles'; // Import CssVarsProvider
// import buildClient from '../api/build-client';
// import Header from '../components/header';

// const AppComponent = ({ Component, pageProps, currentUser }) => {
//   return (
//     <CssVarsProvider>
//       {/* Wrap your app in CssVarsProvider */}
//       <div>
//         <Header currentUser={currentUser} />
//         <div className="container">
//           <Component currentUser={currentUser} {...pageProps} />
//         </div>
//       </div>
//     </CssVarsProvider>
//   );
// };

// AppComponent.getInitialProps = async (appContext) => {
//   const client = buildClient(appContext.ctx);
//   const { data } = await client.get('/api/users/currentuser');

//   let pageProps = {};
//   if (appContext.Component.getInitialProps) {
//     pageProps = await appContext.Component.getInitialProps(
//       appContext.ctx,
//       client,
//       data.currentUser
//     );
//   }

//   return {
//     pageProps,
//     ...data,
//   };
// };

// export default AppComponent;

// import 'bootstrap/dist/css/bootstrap.css';
// import { ThemeProvider, createTheme } from '@mui/material/styles'; // Use ThemeProvider for Material UI
// import buildClient from '../api/build-client';
// import Header from '../components/header';

// // Create a theme for Material UI (optional to customize)
// const theme = createTheme();

// const AppComponent = ({ Component, pageProps, currentUser }) => {
//   return (
//       <ThemeProvider theme={theme}>
//         {/* Wrap Material UI components in ThemeProvider */}
//         <div>
//           <Header currentUser={currentUser} />
//           <div className="container">
//             <Component currentUser={currentUser} {...pageProps} />
//           </div>
//         </div>
//       </ThemeProvider>
//   );
// };

// AppComponent.getInitialProps = async (appContext) => {
//   const client = buildClient(appContext.ctx);
//   const { data } = await client.get('/api/users/currentuser');

//   let pageProps = {};
//   if (appContext.Component.getInitialProps) {
//     pageProps = await appContext.Component.getInitialProps(
//       appContext.ctx,
//       client,
//       data.currentUser
//     );
//   }

//   return {
//     pageProps,
//     ...data,
//   };
// };

// export default AppComponent;

// import 'bootstrap/dist/css/bootstrap.css';
// import { ThemeProvider, createTheme } from '@mui/material/styles'; // Material UI
// import { CssVarsProvider } from '@mui/joy/styles'; // Joy UI
// import buildClient from '../api/build-client';
// import DrawerAppBar from '../components/header';
// import { useRouter } from 'next/router';

// const theme = createTheme(); // You can customize your Material UI theme here

// const AppComponent = ({ Component, pageProps, currentUser }) => {
//   const router = useRouter();
//   const isAuthPage = router.pathname.startsWith('/auth'); // Check if it's the signin/signup page

//   return (
//     <ThemeProvider theme={theme}>
//       <div>
//         <DrawerAppBar currentUser={currentUser} />

//         <div className="container">
//           {/* Conditionally wrap authentication pages with CssVarsProvider */}
//           {isAuthPage ? (
//             <CssVarsProvider>
//               <Component currentUser={currentUser} {...pageProps} />
//             </CssVarsProvider>
//           ) : (
//             <Component currentUser={currentUser} {...pageProps} />
//           )}
//         </div>
//       </div>
//     </ThemeProvider>
//   );
// };

// AppComponent.getInitialProps = async (appContext) => {
//   const client = buildClient(appContext.ctx);
//   const { data } = await client.get('/api/users/currentuser');

//   let pageProps = {};
//   if (appContext.Component.getInitialProps) {
//     pageProps = await appContext.Component.getInitialProps(
//       appContext.ctx,
//       client,
//       data.currentUser
//     );
//   }

//   return {
//     pageProps,
//     ...data,
//   };
// };

// export default AppComponent;

import 'bootstrap/dist/css/bootstrap.css';
import { ThemeProvider, createTheme } from '@mui/material/styles'; // Material UI
import { CssVarsProvider } from '@mui/joy/styles'; // Joy UI
import createCache from '@emotion/cache'; // Emotion for styling
import { CacheProvider } from '@emotion/react'; // Emotion cache provider
import { CssBaseline } from '@mui/material'; // CSS baseline for Material UI
import buildClient from '../api/build-client';
import DrawerAppBar from '../components/header';
import { useRouter } from 'next/router';

// Create a Material UI theme
const theme = createTheme();

// Create Emotion cache with proper server-side injection order
const muiCache = createCache({
  key: 'mui',
  prepend: true, // Ensures styles are injected in the correct order
});

const AppComponent = ({ Component, pageProps, currentUser }) => {
  const router = useRouter();
  const isAuthPage = router.pathname.startsWith('/auth'); // Check if it's an auth page

  return (
    <CacheProvider value={muiCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline /> {/* Apply Material UI baseline styles */}
        <div>
          {/* Include your custom AppBar */}
          <DrawerAppBar currentUser={currentUser} />

          <div className="container">
            {/* Conditionally wrap authentication pages with CssVarsProvider */}
            {isAuthPage ? (
              <CssVarsProvider>
                <Component currentUser={currentUser} {...pageProps} />
              </CssVarsProvider>
            ) : (
              <Component currentUser={currentUser} {...pageProps} />
            )}
          </div>
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
};

AppComponent.getInitialProps = async (appContext) => {
  const client = buildClient(appContext.ctx);
  const { data } = await client.get('/api/users/currentuser');

  let pageProps = {};
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(
      appContext.ctx,
      client,
      data.currentUser
    );
  }

  return {
    pageProps,
    ...data,
  };
};

export default AppComponent;
