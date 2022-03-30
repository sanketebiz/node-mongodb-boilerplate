import { Demo } from '../models/demo'

const getAllDemo = () => {
  return Demo.find()
}

export { getAllDemo }
