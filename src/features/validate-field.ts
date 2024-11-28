import { REGEX } from '../shared/constants/constants'

export default function validateField(value: string, field: string): boolean {
  return !value.match(REGEX[field])
}
