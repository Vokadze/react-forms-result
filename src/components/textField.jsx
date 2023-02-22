import React, { useState } from 'react';
import PropTypes from "prop-types"

const TextField = (props) => {
   const { label, name, type, value, onChange, error } = props;

   const [showPassword, setShowPassword] = useState(false);
   const toggleShowPassword = () => {
      setShowPassword((prevState) => !prevState);
   };

   const getInputClasses = () => {
      return "form-control" + (error ? " is-invalid" : "");
   }

   return (
      <div className='mb-4'>
         <label htmlFor={name}>{label}</label>
         <div className='input-group has-validation'>
            <input
               type={showPassword ? "text" : type}
               id={name}
               value={value}
               onChange={onChange}
               name={name}
               className={getInputClasses()}
            />
            {type === "password" && (
               <button
                  type="button"
                  className='btn btn-outline-secondary'
                  onClick={toggleShowPassword}
               >
                  {showPassword ? "скрыть" : "Показать"} пароль
               </button>
            )}
            {error && <div className='invalid-feedback'>{error}</div>}
         </div>
      </div>
   );
}

TextField.defaultValues = {
   type: "text"
}

TextField.propTypes = {
   label: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   type: PropTypes.string,
   value: PropTypes.string.isRequired,
   onChange: PropTypes.func.isRequired,
   error: PropTypes.string
}

export default TextField;
