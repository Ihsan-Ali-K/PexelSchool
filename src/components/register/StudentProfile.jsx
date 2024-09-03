import React, { useState } from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Box,
} from '@mui/material';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import { useTranslation } from 'react-i18next';

const StudentProfile = () => {
  const {t} = useTranslation('register')
  const [startDate, setStartDate] = useState(new Date());
  const [gender, setGender] = useState('');
  const [grade, setGrade] = useState('');
  const [status, setStatus] = useState('');

  return (
    <Box sx={{ p: 3, zIndex: 0 }}  >
      <Typography variant="h6" gutterBottom>
        {t('studentProfileTitle')}
      </Typography>

      <TextField
        id="student-name"
        label={t('studentNameLabel')}
        fullWidth
        variant="outlined"
        sx={{ mb: 2 }}
      />

      <Typography variant="subtitle1" gutterBottom>
        {t('dobLabel')}
      </Typography>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        customInput={<TextField fullWidth variant="outlined" />}
      />

      <FormControl fullWidth sx={{ mb: 2, mt: 2 }}  >
        <InputLabel id="gender-select-label">{t('genderLabel')}</InputLabel>
        <Select
          labelId="gender-select-label"
          id="gender-select"
          value={gender}
          label={t('genderLabel')}
          onChange={(e) => setGender(e.target.value)}
        >
          <MenuItem value="Male">{t('Male')}</MenuItem>
          <MenuItem value="Female">{t('Female')}</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel id="grade-select-label">{t('selectGradeLabel')}</InputLabel>
        <Select
          labelId="grade-select-label"
          id="grade-select"
          value={grade}
          label={t('selectGradeLabel')}
          onChange={(e) => setGrade(e.target.value)}
        >
          <MenuItem value="PreSchool">{t('PreSchool')}</MenuItem>
          <MenuItem value="Kindergarten">{t('Kindergarten')}</MenuItem>
          <MenuItem value="Grade 1">{t('Grade 1')}</MenuItem>
          <MenuItem value="Grade 2">{t('Grade 2')}</MenuItem>
          <MenuItem value="Grade 3">{t('Grade 3')}</MenuItem>
          <MenuItem value="Grade 4">{t('Grade 4')}</MenuItem>
          <MenuItem value="Grade 5">{t('Grade 5')}</MenuItem>
          <MenuItem value="Grade 6">{t('Grade 6')}</MenuItem>
          <MenuItem value="Elementary">{t('Elementary')}</MenuItem>
        </Select>
      </FormControl>

      <TextField
        id="previous-school"
        label={t('previousSchoolLabel')}
        fullWidth
        variant="outlined"
        sx={{ mb: 2 }}
      />

      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel id="previous-grade-select-label">{t('selectPreviousGradeLabel')}</InputLabel>
        <Select
          labelId="previous-grade-select-label"
          id="previous-grade-select"
          value={grade}
          label={t('selectPreviousGradeLabel')}
          onChange={(e) => setGrade(e.target.value)}
        >
          <MenuItem value="PreSchool">{t('PreSchool')}</MenuItem>
          <MenuItem value="Kindergarten">{t('Kindergarten')}</MenuItem>
          <MenuItem value="Grade 1">{t('Grade 1')}</MenuItem>
          <MenuItem value="Grade 2">{t('Grade 2')}</MenuItem>
          <MenuItem value="Grade 3">{t('Grade 3')}</MenuItem>
          <MenuItem value="Grade 4">{t('Grade 4')}</MenuItem>
          <MenuItem value="Grade 5">{t('Grade 5')}</MenuItem>
          <MenuItem value="Grade 6">{t('Grade 6')}</MenuItem>
          <MenuItem value="Elementary">{t('Elementary')}</MenuItem>
        </Select>
      </FormControl>

      <TextField
        id="parent-guardian"
        label={t('parentGuardianLabel')}
        fullWidth
        variant="outlined"
        sx={{ mb: 2 }}
      />

      <TextField
        id="home-address"
        label={t('homeAddressLabel')}
        fullWidth
        variant="outlined"
        sx={{ mb: 2 }}
      />

      <TextField
        id="home-phone"
        label={t('homePhoneLabel')}
        fullWidth
        variant="outlined"
        sx={{ mb: 2 }}
      />

      <TextField
        id="email-address"
        label={t('emailLabel')}
        fullWidth
        variant="outlined"
        sx={{ mb: 2 }}
      />

      <TextField
        id="business-address"
        label={t('businessAddressLabel')}
        fullWidth
        variant="outlined"
        sx={{ mb: 2 }}
      />

      <TextField
        id="occupation"
        label={t('occupationLabel')}
        fullWidth
        variant="outlined"
        sx={{ mb: 2 }}
      />

      <TextField
        id="work-phone"
        label={t('workPhoneLabel')}
        fullWidth
        variant="outlined"
        sx={{ mb: 2 }}
      />

      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel id="status-select-label">{t('selectParentStatusLabel')}</InputLabel>
        <Select
          labelId="status-select-label"
          id="status-select"
          value={status}
          label={t('selectParentStatusLabel')}
          onChange={(e) => setStatus(e.target.value)}
        >
          <MenuItem value="Married">{t('Married')}</MenuItem>
          <MenuItem value="Living Together">{t('Living Together')}</MenuItem>
          <MenuItem value="Separated">{t('Separated')}</MenuItem>
          <MenuItem value="Widowed">{t('Widowed')}</MenuItem>
        </Select>
      </FormControl>

      <TextField
        id="emergency-contact"
        label={t('emergencyContactLabel')}
        fullWidth
        variant="outlined"
        sx={{ mb: 2 }}
      />

      <TextField
        id="relationship"
        label={t('relationshipLabel')}
        fullWidth
        variant="outlined"
        sx={{ mb: 2 }}
      />
    </Box>
  );
};

export default StudentProfile;
