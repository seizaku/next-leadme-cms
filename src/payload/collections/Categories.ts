import type { CollectionConfig } from 'payload/types'

import { admins } from '../access/admins'

const Categories: CollectionConfig = {
  access: {
    delete: admins,
    read: () => true,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
  ],
  slug: 'categories',
}

export default Categories
