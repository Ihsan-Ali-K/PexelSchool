import React, { useState } from 'react';
import { TextField, FormControl, InputLabel, Select, MenuItem, FormControlLabel, Checkbox, Typography, Box, Grid } from '@mui/material';

const MedicalDetalis = () => {
  const [allergies, setAllergies] = useState(false);
  const [chronicDiseases, setChronicDiseases] = useState(false);
  const [disabilities, setDisabilities] = useState(false);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>STUDENT’S NAME:</Typography>
      <TextField fullWidth variant="outlined" placeholder="Enter student's name" />

      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>Vaccinations:</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <TextField label="TUBERCULOSE (BCG)" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField label="DT.COQ.POLIO" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField label="ROUGEOLE" variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField label="FIÈVRE JAUNE (YELLOW FEVER)" variant="outlined" fullWidth />
        </Grid>
      </Grid>

      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>Allergies:</Typography>
      <FormControlLabel
        control={<Checkbox checked={allergies} onChange={(e) => setAllergies(e.target.checked)} />}
        label="Does the child have any allergies?"
      />
      {allergies && (
        <TextField
          fullWidth
          variant="outlined"
          placeholder="If yes, which one?"
          sx={{ mt: 2 }}
        />
      )}

      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>Chronic Diseases:</Typography>
      <FormControlLabel
        control={<Checkbox checked={chronicDiseases} onChange={(e) => setChronicDiseases(e.target.checked)} />}
        label="Does the child have any chronic disease?"
      />
      {chronicDiseases && (
        <TextField
          fullWidth
          variant="outlined"
          placeholder="If yes, which one?"
          sx={{ mt: 2 }}
        />
      )}

      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>Disabilities:</Typography>
      <FormControlLabel
        control={<Checkbox checked={disabilities} onChange={(e) => setDisabilities(e.target.checked)} />}
        label="Does your child have any disability?"
      />
      {disabilities && (
        <TextField
          fullWidth
          variant="outlined"
          placeholder="If yes, which one?"
          sx={{ mt: 2 }}
        />
      )}

      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>Insurance:</Typography>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Insurance Company"
        sx={{ mt: 2 }}
      />
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Insurance Card Number"
        sx={{ mt: 2 }}
      />
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Child’s Physician name and phone number"
        sx={{ mt: 2 }}
      />
    </Box>
  );
};

export default MedicalDetalis;
