import { ChangeEvent, FC } from 'react'
import { Box, Button, TextField } from '@mui/material'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined'

interface Props {
  inputValue: string
  isTouched: boolean
  handleBlur: () => void
  handleCancel: () => void
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  handleSave: () => void
}

export const NewEntryForm: FC<Props> = props => {
  const { inputValue, isTouched, handleChange, handleBlur, handleCancel, handleSave } = props

  return (
    <>
      <TextField
        autoFocus
        fullWidth
        multiline
        error={isTouched && inputValue.length <= 0}
        helperText='Enter a value'
        label='New Entry'
        placeholder='New entry'
        sx={{ marginTop: 2, marginBottom: 1 }}
        value={inputValue}
        onBlur={handleBlur}
        onChange={handleChange}
      />
      <Box display='flex' justifyContent='space-between'>
        <Button
          variant='text'
          onClick={handleCancel}
        >
          Cancel
        </Button>
        <Button
          color='secondary'
          endIcon={<SaveOutlinedIcon />}
          variant='outlined'
          onClick={handleSave}
        >
          Save
        </Button>
      </Box>
    </>
  )
}
