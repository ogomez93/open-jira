import { ChangeEvent, FC, useContext, useState } from 'react'
import { Box, Button } from '@mui/material'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined'

import { EntriesContext } from '../../context/entries'
import { UIContext } from '../../context/ui'

import { NewEntryForm } from './NewEntryForm'

export const NewEntry: FC = () => {
  const [inputValue, setInputValue] = useState('')
  const [isTouched, setIsTouched] = useState(false)

  const { addEntry } = useContext(EntriesContext)
  const { isAddingEntry, setIsAddingEntry } = useContext(UIContext)

  const handleCancel = () => {
    setIsAddingEntry(false)
    setIsTouched(false)
  }
  const closeForm = () => {
    handleCancel()
    setInputValue('')
  }
  const handleSave = () => {
    if (inputValue.length === 0) return

    addEntry(inputValue)
    closeForm()
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setInputValue(e.target.value)
  const handleBlur = () => setIsTouched(true)

  return (
    <Box sx={{ marginBottom: 2, paddingX: 1 }}>
      { isAddingEntry
          ? <NewEntryForm
              inputValue={inputValue}
              isTouched={isTouched}
              handleBlur={handleBlur}
              handleCancel={handleCancel}
              handleChange={handleChange}
              handleSave={handleSave}
            />
          : (
            <Button
              startIcon={<AddCircleOutlineOutlinedIcon />}
              fullWidth
              variant='outlined'
              onClick={() => setIsAddingEntry(true)}
            >
              Add task
            </Button>
          )
      }
    </Box>
  )
}
