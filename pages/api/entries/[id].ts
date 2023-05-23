import type { NextApiRequest, NextApiResponse } from 'next'
import mongoose, { Error } from 'mongoose'

import { db } from '../../../database'
import { Entry, IEntry } from '../../../models'

type Data =
| { message: string }
| IEntry

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { id } = req.query
  if (!mongoose.isValidObjectId) {
    return res.status(400).json({ message: `Invalid id: ${id}` })
  }

  switch (req.method) {
    case 'GET':
      return getEntry(req, res)
    case 'PUT':
      return updateEntry(req, res)
    default:
      return res.status(400).json({ message: 'Unexisting method: ' + req.method })
  }
}

const getEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { id } = req.query

  await db.connect()
  const entryInDB = await Entry.findById(id)
  await db.disconnect()
  if (!entryInDB) {
    return res.status(400).json({ message: `There's no entry with id: ${id}` })
  }
  return res.status(200).json(entryInDB)
}

const updateEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { id } = req.query

  await db.connect()
  const entryToObject = await Entry.findById(id)
  if (!entryToObject) {
    await db.disconnect()
    return res.status(400).json({ message: `There's no entry with id: ${id}` })
  }

  const {
    description = entryToObject.description,
    status = entryToObject.status
  } = req.body
  try {
    const updatedEntry = await Entry.findByIdAndUpdate(id, { description, status }, { runValidators: true, new: true })
    await db.disconnect()
    return res.status(200).json(updatedEntry!)
  } catch (error) {
    console.log(error)
    await db.disconnect()
    if (error instanceof Error.ValidationError) {
      res.status(400).json({ message: error.errors.status.message })
    }
    res.status(500).json({ message: 'Internal server error' })
  }
}

