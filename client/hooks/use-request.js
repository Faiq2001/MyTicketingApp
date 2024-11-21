import axios from 'axios';
import { useState } from 'react';

export default ({ url, method, body, onSuccess }) => {
  const [errors, setErrors] = useState(null);

  const doRequest = async (props = {}) => {
    try {
      setErrors(null);
      const response = await axios[method](url, { ...body, ...props });

      if (onSuccess) {
        onSuccess(response.data);
      }

      return response.data;
    } catch (err) {
      setErrors(
        <div className="alert alert-danger">
          <h4>Ooops....</h4>
          <ul className="my-0">
            {err.response?.data?.errors?.map((err) => (
              <li key={err.message}>{err.message}</li>
            ))}
          </ul>
        </div>
      );
    }
  };

  return { doRequest, errors };
};

// import { useState } from 'react';
// import axios from 'axios';
// import { Snackbar, Button, Alert } from '@mui/material';  // Import Snackbar, Button, and Alert from MUI

// export default ({ url, method, body, onSuccess }) => {
//   const [errors, setErrors] = useState(null);  // State to hold error message
//   const [open, setOpen] = useState(false);     // State to control Snackbar visibility

//   const doRequest = async (props = {}) => {
//     try {
//       setErrors(null);  // Clear previous errors
//       const response = await axios[method](url, { ...body, ...props });

//       if (onSuccess) {
//         onSuccess(response.data);  // If successful, call onSuccess
//       }

//       return response.data;
//     } catch (err) {
//       // If an error occurs, set the error and open the Snackbar
//       setErrors(
//         <Alert severity="error">
//           <h4>Ooops....</h4>
//           <ul>
//             {err.response?.data?.errors?.map((error) => (
//               <li key={error.message}>{error.message}</li>
//             ))}
//           </ul>
//         </Alert>
//       );
//       setOpen(true);  // Show the Snackbar on error
//     }
//   };

//   const handleCloseSnackbar = () => {
//     setOpen(false);  // Close the Snackbar
//   };

//   const handleUndo = () => {
//     // Implement undo functionality if needed (e.g., reattempt the request or restore a previous state)
//     setOpen(false);  // Close the Snackbar when Undo is clicked
//   };

//   return {
//     doRequest,
//     errors,
//     snackbarProps: {
//       open,
//       autoHideDuration: 6000,
//       onClose: handleCloseSnackbar,
//       message: 'An error occurred!',
//       action: (
//         <Button color="inherit" size="small" onClick={handleUndo}>
//           Undo
//         </Button>
//       ),
//     },
//   };
// };
