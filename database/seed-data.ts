interface SeedData {
  entries: SeedEntry[]
}

interface SeedEntry {
  description: string
  status: string,
  createdAt: number
}

export const seedData: SeedData = {
  entries: [
    {
      description: 'Pending card',
      status: 'pending',
      createdAt: Date.now()
    },
    {
      description: 'In Progress card',
      status: 'in-progress',
      createdAt: Date.now() - 1000000
    },
    {
      description: 'Finished card',
      status: 'finished',
      createdAt: Date.now() - 100000
    }
  ]
}
