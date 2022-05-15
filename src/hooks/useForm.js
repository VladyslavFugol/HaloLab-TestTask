import { useState } from 'react'

const checkingValidate = (validations, values) => {
  const errors = validations
    .map(validation => validation(values))
    .filter(validation => typeof validation === 'object')

  return {
    isValid: errors.length === 0,
    errors: errors.reduce((errors, error) => ({ ...errors, ...error }), {})
  }
}

function useForm(initialValues = {}, validations = [], onSubmit = () => {
}) {
  const [values, setValues] = useState(initialValues)
  const [isValid, setValid] = useState(true)
  const [isBlur, setBlur] = useState(false)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})

  const onChange = (event) => {
    const newValues = { ...values, [event.target.name]: event.target.value }
    const { isValid, errors } = checkingValidate(validations, newValues)
    setValues(newValues)
    setErrors(errors)
    setValid(isValid)
    setTouched({ ...touched, [event.target.name]: true })
  }

  const onBlur = (event) => {
    const { isValid, errors } = checkingValidate(validations, values)

    setErrors(errors)
    setBlur(true)
    setValid(isValid)
    setTouched({ ...touched, [event.target.name]: true })
  }

  const submitHandler = (event) => {
    event.preventDefault()

    const { isValid, errors } = checkingValidate(validations, values)
    setValid(isValid)

    if (isValid) {
      onSubmit(values)
    } else {
      setErrors(errors)
    }
  }

  return {
    values,
    isValid,
    isBlur,
    errors,
    touched,
    onBlur,
    onChange,
    submitHandler
  }
}

export default useForm
