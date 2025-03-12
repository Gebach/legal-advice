import { REGEX } from '../shared/constants/constants'

export default function validateField(value: string | boolean, field: string): boolean {
  return typeof value === 'boolean' ? !value : !value.match(REGEX[field])
}
