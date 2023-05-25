import { ChangeEvent, useMemo, useState } from 'react'
import { GetServerSideProps, NextPage } from 'next'

import {
  Button, Card, CardActions, CardContent, CardHeader, FormControl, FormControlLabel,
  FormLabel, Grid, IconButton, Radio, RadioGroup, TextField, capitalize
} from '@mui/material'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'

import { Layout } from '../../components/layouts'
import { Entry, EntryStatus } from '../../interfaces/entries'
import { dbEntries } from '../../database'

const validStatuses: EntryStatus[] = ['pending', 'in-progress', 'finished']

interface Props {
  entry: Entry
}

const EntryPage: NextPage<Props> = ({ entry }) => {
  const [inputValue, setInputValue] = useState<string>(entry.description)
  const [status, setStatus] = useState<EntryStatus>(entry.status)
  const [touched, setTouched] = useState<boolean>(false)

  const isNotValid = useMemo(() => inputValue.length <= 0 && touched, [inputValue, touched])

  const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setInputValue(e.target.value)

  const handleStatusChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setStatus(e.target.value as EntryStatus)

  const handleSave = () => {
    if (inputValue.length === 0) return

    // todo: persist the data
  }

  return (
    <Layout title={`${inputValue.substring(0, 20)}...`}>
      <Grid container justifyContent='center' sx={{ marginTop: 2 }}>
        <Grid item xs={12} sm={8} md={6}>
          <Card>
            <CardHeader title={`Entry: ${inputValue}`} subheader={`Created ${entry.createdAt} minutes ago`} />

            <CardContent>
              <TextField
                sx={{ marginTop: 2, marginBottom: 1 }}
                fullWidth
                autoFocus
                multiline
                placeholder='New entry'
                label='New entry'
                value={inputValue}
                onBlur={() => setTouched(true)}
                onChange={handleDescriptionChange}
                helperText={isNotValid && 'Enter a value'}
                error={isNotValid}
              />

              <FormControl>
                <FormLabel>Status:</FormLabel>

                <RadioGroup
                  row
                  onChange={handleStatusChange}
                  value={status}
                >
                  {
                    validStatuses.map(option => (
                      <FormControlLabel
                        key={option}
                        control={<Radio />}
                        label={capitalize(option)}
                        value={option}
                      />
                    ))
                  }
                </RadioGroup>
              </FormControl>
            </CardContent>

            <CardActions>
              <Button
                startIcon={<SaveOutlinedIcon />}
                variant='outlined'
                fullWidth
                onClick={handleSave}
                disabled={inputValue.length <= 0}
              >
                Save
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

      <IconButton sx={{ position: 'fixed', bottom: 30, right: 30, backgroundColor: 'error.dark' }}>
        <DeleteOutlinedIcon />
      </IconButton>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params as { id: string }

  const entry = await dbEntries.getEntryById(id)

  if (!entry) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }
  
  return {
    props: {
      entry
    }
  }
}

export default EntryPage
