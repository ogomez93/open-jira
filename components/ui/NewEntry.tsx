import { FC } from 'react'
import { Box, Button, TextField } from '@mui/material'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

export const NewEntry: FC = () => {
  return (
    <Box sx={{ marginBottom: 2, paddingX: 1 }}>
      <Button
        startIcon={<AddCircleOutlineOutlinedIcon />}
        fullWidth
        variant='outlined'
      >
        Add task
      </Button>

      <TextField
        fullWidth
        sx={{ marginTop: 2, marginBottom: 1 }}
        placeholder='New entry'
        autoFocus
        multiline
        label='New Entry'
        helperText='Enter a value'
      />
      <Box display='flex' justifyContent='space-between'>
        <Button
          variant='outlined'
          color='secondary'
          endIcon={<SaveOutlinedIcon />}
        >
          Save
        </Button>
        <Button
          variant='text'
        >
          Cancel
        </Button>
      </Box>
    </Box>
  )
}
