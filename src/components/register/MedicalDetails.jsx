import React, { useState } from 'react';
import { TextField, FormControlLabel, Checkbox, Typography, Box, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';

const MedicalDetails = () => {
  const { t } = useTranslation('register');
  const [allergies, setAllergies] = useState(false);
  const [chronicDiseases, setChronicDiseases] = useState(false);
  const [disabilities, setDisabilities] = useState(false);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>{t('studentNameMed')}</Typography>
      <TextField
        fullWidth
        variant="outlined"
        placeholder={t('enterStudentNameMed')}
      />

      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>{t('vaccinationsLabel')}</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <TextField label={t('tuberculosisVaccine')} variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField label={t('dtCoqPolioVaccine')} variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField label={t('measlesVaccine')} variant="outlined" fullWidth />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField label={t('yellowFeverVaccine')} variant="outlined" fullWidth />
        </Grid>
      </Grid>

      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>{t('allergiesLabel')}</Typography>
      <FormControlLabel
        control={<Checkbox checked={allergies} onChange={(e) => setAllergies(e.target.checked)} />}
        label={t('allergiesQuestion')}
      />
      {allergies && (
        <TextField
          fullWidth
          variant="outlined"
          placeholder={t('allergiesDetails')}
          sx={{ mt: 2 }}
        />
      )}

      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>{t('chronicDiseasesLabel')}</Typography>
      <FormControlLabel
        control={<Checkbox checked={chronicDiseases} onChange={(e) => setChronicDiseases(e.target.checked)} />}
        label={t('chronicDiseasesQuestion')}
      />
      {chronicDiseases && (
        <TextField
          fullWidth
          variant="outlined"
          placeholder={t('chronicDiseasesDetails')}
          sx={{ mt: 2 }}
        />
      )}

      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>{t('disabilitiesLabel')}</Typography>
      <FormControlLabel
        control={<Checkbox checked={disabilities} onChange={(e) => setDisabilities(e.target.checked)} />}
        label={t('disabilitiesQuestion')}
      />
      {disabilities && (
        <TextField
          fullWidth
          variant="outlined"
          placeholder={t('disabilitiesDetails')}
          sx={{ mt: 2 }}
        />
      )}

      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>{t('insuranceLabel')}</Typography>
      <TextField
        fullWidth
        variant="outlined"
        placeholder={t('insuranceCompany')}
        sx={{ mt: 2 }}
      />
      <TextField
        fullWidth
        variant="outlined"
        placeholder={t('insuranceCardNumber')}
        sx={{ mt: 2 }}
      />
      <TextField
        fullWidth
        variant="outlined"
        placeholder={t('physicianDetails')}
        sx={{ mt: 2 }}
      />
    </Box>
  );
};

export default MedicalDetails;
