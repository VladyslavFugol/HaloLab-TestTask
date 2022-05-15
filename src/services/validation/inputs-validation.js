export const lettersValidation = (value) => {
  const regExp = /^[a-zа-яё\s]+$/iu

  if (value.trim().length <= 0) {
    return { name: 'This field in required' }
  }

  if (!regExp.test(value)) {
    return { name: 'Only letters allowed' }
  }

  return true
}

export const numbersValidation = (value) => {
  const regExp = /[a-zA-Z]+/g

  if (value.trim().length <= 0) {
    return { number: 'This field in required' }
  }

  if (regExp.test(value)) {
    return { number: 'Only numbers allowed' }
  } else if (value.trim().length !== 12) {
    return { number: 'Should contain 12 characters' }
  }
}
