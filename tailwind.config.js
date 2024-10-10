import process from 'node:process'
import {
  createTailwindConfig,
} from './app/common/tokens'

export default createTailwindConfig(process.env.NODE_ENV)
