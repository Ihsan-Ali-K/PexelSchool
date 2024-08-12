import React, { useState, useEffect } from 'react';
import { FormControlLabel, Checkbox, Box } from '@mui/material';

const CompleteForm = ({ onAgreedChange }) => {
  const [agreed, setAgreed] = useState(false);

  const handleCheckboxChange = (event) => {
    setAgreed(event.target.checked);
  };

  useEffect(() => {
    onAgreedChange(agreed);
  }, [agreed, onAgreedChange]);

  return (
    <Box sx={{ p: 3 }}>
      <FormControlLabel
        control={<Checkbox checked={agreed} onChange={handleCheckboxChange} />}
        label="Please click the finish button if you agree to the terms and conditions"
      />
    </Box>
  );
};

export default CompleteForm;
