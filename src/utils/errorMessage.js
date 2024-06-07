const errorMessage = (apiErrorMessage) => {
    const errorMapping = {
      'auth/user-not-found': 'User not found. Please check your email and try again.',
      'auth/wrong-password': 'Incorrect password. Please try again.',
      'auth/invalid-email': 'Invalid email address. Please enter a valid email.',
      'auth/email-already-in-use': 'This email is already in use. Please use a different email.',
      'auth/weak-password': 'The password is too weak. Please enter a stronger password.',
      'auth/invalid-credential': 'Invalid credentials. Please check your credentials.',
      // Add more mappings as needed
      'default': 'An unknown error occurred. Please try again later.'
    };
  
    return errorMapping[apiErrorMessage] || errorMapping['default'];
  };

  export default errorMessage;