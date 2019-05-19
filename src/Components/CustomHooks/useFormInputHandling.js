import { useState } from 'react'
/**
 * Allow us to reuse the logic to handle inputs
 * @param {any} defaultValue 
 */
function useFormInputHandling(defaultValue) {
  const [ value, setValue ] =  useState(defaultValue)

  function onChange(e) {
    setValue(e.target.value)
  }

  return {value, onChange}
}

export default useFormInputHandling