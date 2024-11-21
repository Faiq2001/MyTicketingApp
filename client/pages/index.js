// import Link from 'next/link';

// const LandingPage = ({ currentUser, tickets }) => {
//   const ticketList = tickets.map((ticket) => {
//     return (
//       <tr key={ticket.id}>
//         <td>{ticket.title}</td>
//         <td>{ticket.price}</td>
//         <td>
//           <Link href="/tickets/[ticketId]" as={`/tickets/${ticket.id}`}>
//             View
//           </Link>
//         </td>
//       </tr>
//     );
//   });

//   return (
//     <div>
//       <h1>Tickets</h1>
//       <table className="table">
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>Price</th>
//             <th>Link</th>
//           </tr>
//         </thead>
//         <tbody>{ticketList}</tbody>
//       </table>
//     </div>
//   );
// };

// LandingPage.getInitialProps = async (context, client, currentUser) => {
//   const { data } = await client.get('/api/tickets');

//   return { tickets: data };
// };

// export default LandingPage;

import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

const LandingPage = ({ tickets }) => {
  return (
    <div>
      <h1>Tickets</h1>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 2,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {tickets.map((ticket) => (
          <Card
            key={ticket.id}
            variant="outlined"
            sx={{ minWidth: 275, maxWidth: 300, margin: 2 }}
          >
            <CardContent>
              {/* <Typography
                gutterBottom
                sx={{ color: 'text.secondary', fontSize: 14 }}
              >
                Ticket Title
              </Typography> */}
              <Typography variant="h5" component="div">
                {ticket.title}
              </Typography>
              <Typography
                sx={{ color: 'text.secondary', mb: 1.5 }}
                variant="body2"
              >
                Price: ${ticket.price}
              </Typography>
            </CardContent>
            <CardActions>
              <Link href="/tickets/[ticketId]" as={`/tickets/${ticket.id}`} passHref>
                <Button size="small" component="a">
                  View
                </Button>
              </Link>
            </CardActions>
          </Card>
        ))}
      </Box>
    </div>
  );
};

LandingPage.getInitialProps = async (context, client) => {
  const { data } = await client.get('/api/tickets');

  return { tickets: data };
};

export default LandingPage;
