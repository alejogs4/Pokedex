import { useState, useEffect } from 'react'
import { REGEX_PASSWORDS } from '../../helpers/constants';
/**
 * Custom hook to reuse the logic to validate if one given input match with a regex
 * @param {InputData} inputData 
 * @param {String | RegExp} regex 
 */
function useRegexValidation(inputData, regex = REGEX_PASSWORDS) {
  const [isStrongEnough, setIsStrongEnough] = useState(false)
  const rgx = new RegExp(regex)

  useEffect(() => {
    setIsStrongEnough(rgx.test(inputData.value))
  }, [inputData.value])


  return {isStrongEnough, ...inputData}
}

export default useRegexValidation