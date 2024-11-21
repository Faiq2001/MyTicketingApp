// import { useEffect, useState } from 'react';
// import StripeCheckout from 'react-stripe-checkout';
// import Router from 'next/router';
// import useRequest from '../../hooks/use-request';

// const OrderShow = ({ order, currentUser }) => {
//   const [timeLeft, setTimeLeft] = useState(0);
//   const { doRequest, errors } = useRequest({
//     url: '/api/payments',
//     method: 'post',
//     body: {
//       orderId: order.id,
//     },
//     onSuccess: () => Router.push('/orders'),
//   });

//   useEffect(() => {
//     const findTimeLeft = () => {
//       const msLeft = new Date(order.expiresAt) - new Date();
//       setTimeLeft(Math.round(msLeft / 1000));
//     };

//     findTimeLeft();
//     const timerId = setInterval(findTimeLeft, 1000);

//     return () => {
//       clearInterval(timerId);
//     };
//   }, [order]);

//   if (timeLeft < 0) {
//     return <div>Order Expired</div>;
//   }

//   return (
//     <div>
//       Time left to pay: {timeLeft} seconds
//       <StripeCheckout
//         token={({ id }) => doRequest({ token: id })}
//         stripeKey="pk_test_JMdyKVvf8EGTB0Fl28GsN7YY"
//         amount={order.ticket.price * 100}
//         email={currentUser.email}
//       />
//       {errors}
//     </div>
//   );
// };

// OrderShow.getInitialProps = async (context, client) => {
//   const { orderId } = context.query;
//   const { data } = await client.get(`/api/orders/${orderId}`);

//   return { order: data };
// };

// export default OrderShow;

// import { useEffect, useState } from 'react';
// import StripeCheckout from 'react-stripe-checkout';
// import Router from 'next/router';
// import useRequest from '../../hooks/use-request';
// import { Box, Typography, Card, Button, Divider, CircularProgress } from '@mui/material';

// const OrderShow = ({ order, currentUser }) => {
//   const [timeLeft, setTimeLeft] = useState(0);
//   const { doRequest, errors } = useRequest({
//     url: '/api/payments',
//     method: 'post',
//     body: {
//       orderId: order.id,
//     },
//     onSuccess: () => Router.push('/orders'),
//   });

//   useEffect(() => {
//     const findTimeLeft = () => {
//       const msLeft = new Date(order.expiresAt) - new Date();
//       setTimeLeft(Math.round(msLeft / 1000));
//     };

//     findTimeLeft();
//     const timerId = setInterval(findTimeLeft, 1000);

//     return () => {
//       clearInterval(timerId);
//     };
//   }, [order]);

//   if (timeLeft < 0) {
//     return (
//       <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//         <Typography variant="h4" color="error">
//           Order Expired
//         </Typography>
//       </Box>
//     );
//   }

//   return (
//     <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', p: 2 }}>
//       <Card sx={{ width: '100%', maxWidth: 600, p: 3, textAlign: 'center' }}>
//         <Typography variant="h5" sx={{ mb: 2 }}>
//           Time left to pay: {timeLeft} seconds
//         </Typography>

//         <Divider sx={{ my: 2 }} />

//         <Typography variant="h6" sx={{ mb: 3 }}>
//           Complete your payment for order #{order.id}
//         </Typography>

//         <StripeCheckout
//           token={({ id }) => doRequest({ token: id })}
//           stripeKey="pk_test_JMdyKVvf8EGTB0Fl28GsN7YY"
//           amount={order.ticket.price * 100}
//           email={currentUser.email}
//           name="Payment for Ticket"
//         />

//         {errors && (
//           <Typography color="error" sx={{ mt: 2 }}>
//             {errors}
//           </Typography>
//         )}
//       </Card>

//       {/* Loading indicator while processing */}
//       {/* Replace CircularProgress with your actual loading state if applicable */}
//       {/* You can show a loading indicator based on the state of doRequest */}
//     </Box>
//   );
// };

// OrderShow.getInitialProps = async (context, client) => {
//   const { orderId } = context.query;
//   const { data } = await client.get(`/api/orders/${orderId}`);

//   return { order: data };
// };

// export default OrderShow;



// import { useEffect, useState } from 'react';
// import StripeCheckout from 'react-stripe-checkout';
// import Router from 'next/router';
// import useRequest from '../../hooks/use-request';
// import { Box, Typography, Card, Button, Divider, CircularProgress } from '@mui/material';

// const OrderShow = ({ order, currentUser }) => {
//   const [timeLeft, setTimeLeft] = useState(0);
//   const { doRequest, errors } = useRequest({
//     url: '/api/payments',
//     method: 'post',
//     body: {
//       orderId: order.id,
//     },
//     onSuccess: () => Router.push('/orders'),
//   });

//   useEffect(() => {
//     const findTimeLeft = () => {
//       const msLeft = new Date(order.expiresAt) - new Date();
//       setTimeLeft(Math.round(msLeft / 1000));
//     };

//     findTimeLeft();
//     const timerId = setInterval(findTimeLeft, 1000);

//     return () => {
//       clearInterval(timerId);
//     };
//   }, [order]);

//   if (timeLeft < 0) {
//     return (
//       <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//         <Typography variant="h4" color="error">
//           Order Expired
//         </Typography>
//       </Box>
//     );
//   }

//   return (
//     <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', p: 2 }}>
//       <Card sx={{ width: '100%', maxWidth: 600, p: 3, textAlign: 'center' }}>
//         <Typography variant="h5" sx={{ mb: 2 }}>
//           Time left to pay: {timeLeft} seconds
//         </Typography>

//         <Divider sx={{ my: 2 }} />

//         <Typography variant="h6" sx={{ mb: 3 }}>
//           Continue buying ticket: {order.ticket.name}
//         </Typography>

//         <StripeCheckout
//           token={({ id }) => doRequest({ token: id })}
//           stripeKey="pk_test_JMdyKVvf8EGTB0Fl28GsN7YY"
//           amount={order.ticket.price * 100}
//           email={currentUser.email}
//           name="Payment for Ticket"
//         />

//         {errors && (
//           <Typography color="error" sx={{ mt: 2 }}>
//             {errors}
//           </Typography>
//         )}
//       </Card>

//       {/* Loading indicator while processing */}
//       {/* Replace CircularProgress with your actual loading state if applicable */}
//       {/* You can show a loading indicator based on the state of doRequest */}
//     </Box>
//   );
// };

// OrderShow.getInitialProps = async (context, client) => {
//   const { orderId } = context.query;
//   const { data } = await client.get(`/api/orders/${orderId}`);

//   return { order: data };
// };

// export default OrderShow;


import { useEffect, useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import Router from 'next/router';
import useRequest from '../../hooks/use-request';
import { Box, Typography, Card, Button, Divider, CircularProgress } from '@mui/material';

const OrderShow = ({ order, currentUser }) => {
  const [timeLeft, setTimeLeft] = useState(0);
  const { doRequest, errors } = useRequest({
    url: '/api/payments',
    method: 'post',
    body: {
      orderId: order.id,
    },
    onSuccess: () => Router.push('/orders'),
  });

  useEffect(() => {
    const findTimeLeft = () => {
      const msLeft = new Date(order.expiresAt) - new Date();
      setTimeLeft(Math.round(msLeft / 1000));
    };

    findTimeLeft();
    const timerId = setInterval(findTimeLeft, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [order]);

  if (timeLeft < 0) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
        <Typography variant="h4" color="error">
          Order Expired
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh', p: 2 }}>
      <Card sx={{ width: '100%', maxWidth: 600, p: 3, textAlign: 'center' }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Time left to pay: {timeLeft} seconds
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Typography variant="h6" sx={{ mb: 3 }}>
          Continue buying ticket: {order.ticket.name}
        </Typography>

        <StripeCheckout
          token={({ id }) => doRequest({ token: id })}
          stripeKey="pk_test_JMdyKVvf8EGTB0Fl28GsN7YY"
          amount={order.ticket.price * 100}
          email={currentUser.email}
          name="Payment for Ticket"
        />

        {errors && (
          <Typography color="error" sx={{ mt: 2 }}>
            {errors}
          </Typography>
        )}
      </Card>
    </Box>
  );
};

OrderShow.getInitialProps = async (context, client) => {
  const { orderId } = context.query;
  const { data } = await client.get(`/api/orders/${orderId}`);

  return { order: data };
};

export default OrderShow;




/*--------------- Part-1 -------------*/

// import React, { useEffect, useState } from 'react';
// import Router from 'next/router';
// import useRequest from '../../hooks/use-request';
// import Card from '@mui/joy/Card';
// import CardActions from '@mui/joy/CardActions';
// import CardContent from '@mui/joy/CardContent';
// import Checkbox from '@mui/joy/Checkbox';
// import Divider from '@mui/joy/Divider';
// import FormControl from '@mui/joy/FormControl';
// import FormLabel from '@mui/joy/FormLabel';
// import Input from '@mui/joy/Input';
// import Typography from '@mui/joy/Typography';
// import Button from '@mui/joy/Button';
// import InfoOutlined from '@mui/icons-material/InfoOutlined';
// import CreditCardIcon from '@mui/icons-material/CreditCard';

// const OrderShow = ({ order, currentUser }) => {
//   const [timeLeft, setTimeLeft] = useState(0);
//   const [cardNumber, setCardNumber] = useState('');
//   const [expiryDate, setExpiryDate] = useState('');
//   const [cvc, setCvc] = useState('');
//   const [cardHolderName, setCardHolderName] = useState('');
//   const { doRequest, errors } = useRequest({
//     url: '/api/payments',
//     method: 'post',
//     body: {
//       orderId: order.id,
//     },
//     onSuccess: () => Router.push('/orders'),
//   });

//   useEffect(() => {
//     const findTimeLeft = () => {
//       const msLeft = new Date(order.expiresAt) - new Date();
//       setTimeLeft(Math.round(msLeft / 1000));
//     };

//     findTimeLeft();
//     const timerId = setInterval(findTimeLeft, 1000);

//     return () => {
//       clearInterval(timerId);
//     };
//   }, [order]);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     doRequest();
//   };

//   if (timeLeft < 0) {
//     return <div>Order Expired</div>;
//   }

//   return (
//     <div>
//       <Typography level="h5" sx={{ mb: 2, textAlign: 'center' }}>
//         Time left to pay: {timeLeft} seconds
//       </Typography>
//       <Card
//         variant="outlined"
//         sx={{
//           maxHeight: 'max-content',
//           maxWidth: 500,
//           mx: 'auto',
//           overflow: 'auto',
//           resize: 'horizontal',
//           p: 3,
//         }}
//       >
//         <Typography level="h4" startDecorator={<InfoOutlined />} gutterBottom>
//           Add Payment Details
//         </Typography>
//         <Divider inset="none" />
//         <form onSubmit={handleSubmit}>
//           <CardContent
//             sx={{
//               display: 'grid',
//               gridTemplateColumns: 'repeat(2, minmax(80px, 1fr))',
//               gap: 1.5,
//             }}
//           >
//             <FormControl sx={{ gridColumn: '1/-1' }}>
//               <FormLabel>Card number</FormLabel>
//               <Input
//                 value={cardNumber}
//                 onChange={(e) => setCardNumber(e.target.value)}
//                 endDecorator={<CreditCardIcon />}
//                 required
//               />
//             </FormControl>
//             <FormControl>
//               <FormLabel>Expiry date</FormLabel>
//               <Input
//                 value={expiryDate}
//                 onChange={(e) => setExpiryDate(e.target.value)}
//                 placeholder="MM/YY"
//                 required
//               />
//             </FormControl>
//             <FormControl>
//               <FormLabel>CVC/CVV</FormLabel>
//               <Input
//                 value={cvc}
//                 onChange={(e) => setCvc(e.target.value)}
//                 placeholder="123"
//                 endDecorator={<InfoOutlined />}
//                 required
//               />
//             </FormControl>
//             <FormControl sx={{ gridColumn: '1/-1' }}>
//               <FormLabel>Card holder name</FormLabel>
//               <Input
//                 value={cardHolderName}
//                 onChange={(e) => setCardHolderName(e.target.value)}
//                 placeholder="Enter cardholder's full name"
//                 required
//               />
//             </FormControl>
//             <Checkbox label="Save card" sx={{ gridColumn: '1/-1', my: 1 }} />
//           </CardContent>
//           {errors && (
//             <Typography level="body2" color="error" sx={{ mt: 1 }}>
//               {errors}
//             </Typography>
//           )}
//           <CardActions sx={{ gridColumn: '1/-1', justifyContent: 'center' }}>
//             <Button type="submit" variant="solid" color="primary">
//               Add card
//             </Button>
//           </CardActions>
//         </form>
//       </Card>
//     </div>
//   );
// };

// OrderShow.getInitialProps = async (context, client) => {
//   const { orderId } = context.query;
//   const { data } = await client.get(`/api/orders/${orderId}`);

//   return { order: data };
// };

// export default OrderShow;

// import React, { useEffect, useState } from 'react';
// import Router from 'next/router';
// import { CssVarsProvider } from '@mui/joy/styles'; // Import the provider
// import Card from '@mui/joy/Card';
// import CardActions from '@mui/joy/CardActions';
// import CardContent from '@mui/joy/CardContent';
// import Checkbox from '@mui/joy/Checkbox';
// import Divider from '@mui/joy/Divider';
// import FormControl from '@mui/joy/FormControl';
// import FormLabel from '@mui/joy/FormLabel';
// import Input from '@mui/joy/Input';
// import Typography from '@mui/joy/Typography';
// import Button from '@mui/joy/Button';
// import InfoOutlined from '@mui/icons-material/InfoOutlined';
// import CreditCardIcon from '@mui/icons-material/CreditCard';
// import useRequest from '../../hooks/use-request';

// const OrderShow = ({ order, currentUser }) => {
//   const [timeLeft, setTimeLeft] = useState(0);
//   const [cardNumber, setCardNumber] = useState('');
//   const [expiryDate, setExpiryDate] = useState('');
//   const [cvc, setCvc] = useState('');
//   const [cardHolderName, setCardHolderName] = useState('');
//   const { doRequest, errors } = useRequest({
//     url: '/api/payments',
//     method: 'post',
//     body: { orderId: order.id },
//     onSuccess: () => Router.push('/orders'),
//   });

//   useEffect(() => {
//     const findTimeLeft = () => {
//       const msLeft = new Date(order.expiresAt) - new Date();
//       setTimeLeft(Math.round(msLeft / 1000));
//     };

//     findTimeLeft();
//     const timerId = setInterval(findTimeLeft, 1000);

//     return () => {
//       clearInterval(timerId);
//     };
//   }, [order]);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     doRequest();
//   };

//   if (timeLeft < 0) {
//     return <div>Order Expired</div>;
//   }

//   return (
//     <CssVarsProvider>
//       <div>
//         <Typography level="h5" sx={{ mb: 2, textAlign: 'center' }}>
//           Time left to pay: {timeLeft} seconds
//         </Typography>
//         <Card
//           variant="outlined"
//           sx={{
//             maxHeight: 'max-content',
//             maxWidth: 500,
//             mx: 'auto',
//             overflow: 'auto',
//             resize: 'horizontal',
//             p: 3,
//           }}
//         >
//           <Typography level="h4" startDecorator={<InfoOutlined />} gutterBottom>
//             Add Payment Details
//           </Typography>
//           <Divider inset="none" />
//           <form onSubmit={handleSubmit}>
//             <CardContent
//               sx={{
//                 display: 'grid',
//                 gridTemplateColumns: 'repeat(2, minmax(80px, 1fr))',
//                 gap: 1.5,
//               }}
//             >
//               <FormControl sx={{ gridColumn: '1/-1' }}>
//                 <FormLabel>Card number</FormLabel>
//                 <Input
//                   value={cardNumber}
//                   onChange={(e) => setCardNumber(e.target.value)}
//                   endDecorator={<CreditCardIcon />}
//                   required
//                 />
//               </FormControl>
//               <FormControl>
//                 <FormLabel>Expiry date</FormLabel>
//                 <Input
//                   value={expiryDate}
//                   onChange={(e) => setExpiryDate(e.target.value)}
//                   placeholder="MM/YY"
//                   required
//                 />
//               </FormControl>
//               <FormControl>
//                 <FormLabel>CVC/CVV</FormLabel>
//                 <Input
//                   value={cvc}
//                   onChange={(e) => setCvc(e.target.value)}
//                   placeholder="123"
//                   endDecorator={<InfoOutlined />}
//                   required
//                 />
//               </FormControl>
//               <FormControl sx={{ gridColumn: '1/-1' }}>
//                 <FormLabel>Card holder name</FormLabel>
//                 <Input
//                   value={cardHolderName}
//                   onChange={(e) => setCardHolderName(e.target.value)}
//                   placeholder="Enter cardholder's full name"
//                   required
//                 />
//               </FormControl>
//               <Checkbox label="Save card" sx={{ gridColumn: '1/-1', my: 1 }} />
//             </CardContent>
//             {errors && (
//               <Typography level="body2" color=".." sx={{ mt: 1 }}>
//                 {errors}
//               </Typography>
//             )}
//             <CardActions sx={{ gridColumn: '1/-1', justifyContent: 'center' }}>
//               <Button type="submit" variant="solid" color="primary">
//                 Add card
//               </Button>
//             </CardActions>
//           </form>
//         </Card>
//       </div>
//     </CssVarsProvider>
//   );
// };

// OrderShow.getInitialProps = async (context, client) => {
//   const { orderId } = context.query;
//   const { data } = await client.get(`/api/orders/${orderId}`);

//   return { order: data };
// };

// export default OrderShow;

// import React, { useEffect, useState } from 'react';
// import Router from 'next/router';
// import { CssVarsProvider } from '@mui/joy/styles';
// import Card from '@mui/joy/Card';
// import CardActions from '@mui/joy/CardActions';
// import CardContent from '@mui/joy/CardContent';
// import Checkbox from '@mui/joy/Checkbox';
// import Divider from '@mui/joy/Divider';
// import FormControl from '@mui/joy/FormControl';
// import FormLabel from '@mui/joy/FormLabel';
// import Input from '@mui/joy/Input';
// import Typography from '@mui/joy/Typography';
// import Button from '@mui/joy/Button';
// import InfoOutlined from '@mui/icons-material/InfoOutlined';
// import CreditCardIcon from '@mui/icons-material/CreditCard';
// import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
// import useRequest from '../../hooks/use-request';

// const OrderShow = ({ order, currentUser }) => {
//   const [timeLeft, setTimeLeft] = useState(0);
//   const [cardHolderName, setCardHolderName] = useState('');
//   const { doRequest, errors } = useRequest({
//     url: '/api/payments',
//     method: 'post',
//     body: { orderId: order.id },
//     onSuccess: () => Router.push('/orders'),
//   });

//   const stripe = useStripe();
//   const elements = useElements();

//   useEffect(() => {
//     const findTimeLeft = () => {
//       const msLeft = new Date(order.expiresAt) - new Date();
//       setTimeLeft(Math.round(msLeft / 1000));
//     };

//     findTimeLeft();
//     const timerId = setInterval(findTimeLeft, 1000);

//     return () => {
//       clearInterval(timerId);
//     };
//   }, [order]);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
    
//     if (!stripe || !elements) return;

//     // Get the card element
//     const cardElement = elements.getElement(CardElement);

//     // Create a payment method with Stripe
//     const { token, error } = await stripe.createToken(cardElement);

//     if (error) {
//       // Handle error
//       console.error(error);
//       return;
//     }

//     // Proceed to make the request with the token
//     doRequest({
//       body: {
//         orderId: order.id,
//         token: token.id,
//         cardHolderName,
//       }
//     });
//   };

//   if (timeLeft < 0) {
//     return <div>Order Expired</div>;
//   }

//   return (
//     <CssVarsProvider>
//       <div>
//         <Typography level="h5" sx={{ mb: 2, textAlign: 'center' }}>
//           Time left to pay: {timeLeft} seconds
//         </Typography>
//         <Card
//           variant="outlined"
//           sx={{
//             maxHeight: 'max-content',
//             maxWidth: 500,
//             mx: 'auto',
//             overflow: 'auto',
//             resize: 'horizontal',
//             p: 3,
//           }}
//         >
//           <Typography level="h4" startDecorator={<InfoOutlined />} gutterBottom>
//             Add Payment Details
//           </Typography>
//           <Divider inset="none" />
//           <form onSubmit={handleSubmit}>
//             <CardContent
//               sx={{
//                 display: 'grid',
//                 gridTemplateColumns: 'repeat(2, minmax(80px, 1fr))',
//                 gap: 1.5,
//               }}
//             >
//               <FormControl sx={{ gridColumn: '1/-1' }}>
//                 <FormLabel>Card holder name</FormLabel>
//                 <Input
//                   value={cardHolderName}
//                   onChange={(e) => setCardHolderName(e.target.value)}
//                   placeholder="Enter cardholder's full name"
//                   required
//                 />
//               </FormControl>
//               <FormControl sx={{ gridColumn: '1/-1' }}>
//                 <FormLabel>Card Details</FormLabel>
//                 <CardElement
//                   options={{
//                     style: {
//                       base: {
//                         fontSize: '16px',
//                         color: '#424770',
//                         letterSpacing: '0.025em',
//                         backgroundColor: 'white',
//                         fontFamily: 'Arial, sans-serif',
//                         '::placeholder': {
//                           color: '#aab7c4',
//                         },
//                       },
//                       invalid: {
//                         color: '#9e2146',
//                       },
//                     },
//                   }}
//                 />
//               </FormControl>
//               <Checkbox label="Save card" sx={{ gridColumn: '1/-1', my: 1 }} />
//             </CardContent>
//             {errors && (
//               <Typography level="body2" color="error" sx={{ mt: 1 }}>
//                 {errors}
//               </Typography>
//             )}
//             <CardActions sx={{ gridColumn: '1/-1', justifyContent: 'center' }}>
//               <Button type="submit" variant="solid" color="primary" disabled={!stripe}>
//                 Pay Now
//               </Button>
//             </CardActions>
//           </form>
//         </Card>
//       </div>
//     </CssVarsProvider>
//   );
// };

// OrderShow.getInitialProps = async (context, client) => {
//   const { orderId } = context.query;
//   const { data } = await client.get(`/api/orders/${orderId}`);

//   return { order: data };
// };

// export default OrderShow;

// import React, { useEffect, useState } from 'react';
// import Router from 'next/router';
// import { CssVarsProvider } from '@mui/joy/styles';
// import { Card, CardActions, CardContent, Divider, FormControl, FormLabel, Input, Typography, Button } from '@mui/joy';
// import { InfoOutlined, CreditCardIcon } from '@mui/icons-material';
// import useRequest from '../../hooks/use-request';
// import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'; // Import Stripe hooks
// import { loadStripe } from '@stripe/stripe-js'; // Import the loadStripe function

// // Load your Stripe public key
// const stripePromise = loadStripe('your-public-stripe-key-here');

// const OrderShow = ({ order, currentUser }) => {
//   const [timeLeft, setTimeLeft] = useState(0);
//   const { doRequest, errors } = useRequest({
//     url: '/api/payments',
//     method: 'post',
//     body: { orderId: order.id },
//     onSuccess: () => Router.push('/orders'),
//   });

//   const stripe = useStripe();
//   const elements = useElements();

//   useEffect(() => {
//     const findTimeLeft = () => {
//       const msLeft = new Date(order.expiresAt) - new Date();
//       setTimeLeft(Math.round(msLeft / 1000));
//     };

//     findTimeLeft();
//     const timerId = setInterval(findTimeLeft, 1000);

//     return () => {
//       clearInterval(timerId);
//     };
//   }, [order]);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (!stripe || !elements) {
//       // Make sure Stripe.js has loaded
//       return;
//     }

//     const cardElement = elements.getElement(CardElement);

//     // Create a payment method with the card details
//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: 'card',
//       card: cardElement,
//     });

//     if (error) {
//       console.log(error);
//     } else {
//       // Send paymentMethod.id to your server to create a payment intent or process the payment
//       doRequest();
//     }
//   };

//   if (timeLeft < 0) {
//     return <div>Order Expired</div>;
//   }

//   return (
//     <CssVarsProvider>
//       <div>
//         <Typography level="h5" sx={{ mb: 2, textAlign: 'center' }}>
//           Time left to pay: {timeLeft} seconds
//         </Typography>
//         <Card variant="outlined" sx={{ maxHeight: 'max-content', maxWidth: 500, mx: 'auto', overflow: 'auto', resize: 'horizontal', p: 3 }}>
//           <Typography level="h4" startDecorator={<InfoOutlined />} gutterBottom>
//             Add Payment Details
//           </Typography>
//           <Divider inset="none" />
//           <form onSubmit={handleSubmit}>
//             <CardContent sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(80px, 1fr))', gap: 1.5 }}>
//               <FormControl sx={{ gridColumn: '1/-1' }}>
//                 <FormLabel>Card Details</FormLabel>
//                 <CardElement options={{ hidePostalCode: true }} />
//               </FormControl>
//             </CardContent>
//             {errors && (
//               <Typography level="body2" color="error" sx={{ mt: 1 }}>
//                 {errors}
//               </Typography>
//             )}
//             <CardActions sx={{ gridColumn: '1/-1', justifyContent: 'center' }}>
//               <Button type="submit" variant="solid" color="primary" disabled={!stripe}>
//                 Add card
//               </Button>
//             </CardActions>
//           </form>
//         </Card>
//       </div>
//     </CssVarsProvider>
//   );
// };

// OrderShow.getInitialProps = async (context, client) => {
//   const { orderId } = context.query;
//   const { data } = await client.get(`/api/orders/${orderId}`);
//   return { order: data };
// };

// export default OrderShow;
