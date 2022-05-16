import { ReactComponent as ErrorIcon } from 'assets/error-icon.svg'
import styles from './Input.module.scss'
import loader from '../../loader/Loader';

function Input(props) {
  const {
    name,
    value,
    placeholder,
    errors,
    touched,
    onChange,
    onBlur,
  } = props

  console.log(touched)

  const isErrors = (touched && errors)

  return (
    <div className={styles.container}>
      <label
        className={styles.label}
        style={{ border: isErrors ? '1px solid red' : '' }}
      >
        <input
          type='text'
          className={styles.input}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={event => onChange(event)}
          onBlur={event => onBlur(event)}
        />
        {isErrors && <div className={styles.image}><ErrorIcon/></div>}
      </label>
      {isErrors && <span className={styles.error}>{errors}</span>}
    </div>
  )
}

export default Input
