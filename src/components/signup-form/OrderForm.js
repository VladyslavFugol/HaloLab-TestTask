import { lettersValidation, numbersValidation } from 'services/validation/inputs-validation'
import Input from '../form-components/input/Input'
import useForm from 'hooks/useForm'
import styles from './OrderForm.module.scss'

function OrderForm({ closeModal }) {
  const initialValues = { name: '', number: '' }

  const validations = [
    ({ name }) => lettersValidation(name),
    ({ number }) => numbersValidation(number)
  ]

  const onSubmit = (values) => {
    closeModal()
    console.log(values)
    alert('Form successfully submitted')
  }

  const {
    values,
    errors,
    touched,
    isValid,
    onBlur,
    onChange,
    submitHandler
  } = useForm(initialValues, validations, onSubmit)

  return (
    <form onSubmit={submitHandler}>
      <Input
        name='name'
        placeholder='Name'
        value={values.name}
        errors={errors.name}
        touched={touched.name}
        onChange={onChange}
        onBlur={onBlur}
      />
      <Input
        name='number'
        placeholder='Number'
        value={values.number}
        errors={errors.number}
        touched={touched.number}
        onChange={onChange}
        onBlur={onBlur}
      />
      <button
        style={{backgroundColor: !isValid ? 'gray' : '#4BCFA0'}}
        className={styles.button}
        disabled={!isValid}>Order
      </button>
    </form>
  )
}

export default OrderForm
