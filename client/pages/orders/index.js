// const OrderIndex = ({ orders }) => {
//   return (
//     <ul>
//       {orders.map((order) => {
//         return (
//           <li key={order.id}>
//             {order.ticket.title} - {order.status}
//           </li>
//         );
//       })}
//     </ul>
//   );
// };

// OrderIndex.getInitialProps = async (context, client) => {
//   const { data } = await client.get('/api/orders');

//   return { orders: data };
// };

// export default OrderIndex;

// import { Box, Grid, Card, CardContent, Typography } from '@mui/material';

// const OrderIndex = ({ orders }) => {
//   return (
//     <Box sx={{ p: 3 }}>
//       <Typography variant="h4" sx={{ mb: 3, textAlign: 'center' }}>
//         Your Orders
//       </Typography>
//       <Grid container spacing={3}>
//         {orders.map((order) => (
//           <Grid item xs={12} sm={6} md={4} key={order.id}>
//             <Card sx={{ height: '100%' }}>
//               <CardContent>
//                 <Typography variant="h6" sx={{ mb: 1 }}>
//                   {order.ticket.title}
//                 </Typography>
//                 <Typography
//                   variant="body1"
//                   color={order.status === 'complete' ? 'success.main' : 'error.main'}
//                 >
//                   Status: {order.status}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// OrderIndex.getInitialProps = async (context, client) => {
//   const { data } = await client.get('/api/orders');
//   return { orders: data };
// };

// export default OrderIndex;


// import { Box, Grid, Card, CardContent, Typography } from '@mui/material';

// const OrderIndex = ({ orders }) => {
//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'created':
//         return 'warning.main'; // Yellow for "created"
//       case 'complete':
//         return 'success.main'; // Green for "complete"
//       default:
//         return 'error.main'; // Red for other statuses
//     }
//   };

//   return (
//     <Box sx={{ p: 3 }}>
//       <Typography variant="h4" sx={{ mb: 3, textAlign: 'center' }}>
//         Your Orders
//       </Typography>
//       <Grid container spacing={3}>
//         {orders.map((order) => (
//           <Grid item xs={12} sm={6} md={4} key={order.id}>
//             <Card sx={{ height: '100%' }}>
//               <CardContent>
//                 <Typography variant="h6" sx={{ mb: 1 }}>
//                   {order.ticket.title}
//                 </Typography>
//                 <Typography
//                   variant="body1"
//                   sx={{ color: getStatusColor(order.status) }}
//                 >
//                   Status: {order.status}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// OrderIndex.getInitialProps = async (context, client) => {
//   const { data } = await client.get('/api/orders');
//   return { orders: data };
// };

// export default OrderIndex;


// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import { Box, Grid } from '@mui/material';

// const OrderIndex = ({ orders }) => {
//   // Define a function to get background color based on status
//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'created':
//         return '#FFECB3'; // Light yellow (sun color)
//       case 'cancelled':
//         return '#FFCDD2'; // Light red
//       case 'completed':
//         return '#C8E6C9'; // Light green
//       default:
//         return '#E0E0E0'; // Default gray
//     }
//   };

//   return (
//     <Box sx={{ p: 3 }}>
//       <Typography variant="h4" sx={{ mb: 3, textAlign: 'center' }}>
//         Orders
//       </Typography>
//       <Grid container spacing={3}>
//         {orders.map((order) => (
//           <Grid item xs={12} sm={6} md={4} key={order.id}>
//             <Card
//               sx={{
//                 backgroundColor: getStatusColor(order.status),
//                 height: '100%',
//               }}
//             >
//               <CardContent>
//                 <Typography gutterBottom variant="h6" component="div">
//                   {order.ticket.title}
//                 </Typography>
//                 <Typography variant="body1" sx={{ mb: 1 }}>
//                   Status: {order.status}
//                 </Typography>
//                 <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//                   Ticket Price: ${order.ticket.price}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// // Fetch data for the orders
// OrderIndex.getInitialProps = async (context, client) => {
//   const { data } = await client.get('/api/orders');
//   return { orders: data };
// };

// export default OrderIndex;

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, Grid } from '@mui/material';

const OrderIndex = ({ orders }) => {
  // Define a function to get background color based on status
  const getStatusColor = (status) => {
    switch (status) {
      case 'created':
        return '#FFECB3'; // Light yellow (sun color)
      case 'cancelled':
        return '#FFCDD2'; // Light red
      case 'completed':
        return '#C8E6C9'; // Light green
      default:
        return '#E0E0E0'; // Default gray
    }
  };

  // Define a function to get display text for status
  const getStatusText = (status) => {
    switch (status) {
      case 'created':
        return 'Pending';
      case 'cancelled':
        return 'Cancelled';
      case 'completed':
        return 'Completed';
      default:
        return 'Unknown';
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" sx={{ mb: 3, textAlign: 'center' }}>
        Orders
      </Typography>
      <Grid container spacing={3}>
        {orders.map((order) => (
          <Grid item xs={12} sm={6} md={4} key={order.id}>
            <Card
              sx={{
                backgroundColor: getStatusColor(order.status),
                height: '100%',
              }}
            >
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {order.ticket.title}
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  Status: {getStatusText(order.status)}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Ticket Price: ${order.ticket.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

// Fetch data for the orders
OrderIndex.getInitialProps = async (context, client) => {
  const { data } = await client.get('/api/orders');
  return { orders: data };
};

export default OrderIndex;
