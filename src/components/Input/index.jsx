import { text } from "@fortawesome/fontawesome-svg-core";

const Input = ({id,placeholder,type,name, onChange}) => {
  return (
    <div>
    <input
      id={id}
      type={text}
      placeholder={placeholder} 
      onChange={onChange}
    />
      <label htmlFor={id}>{name}</label>
    </div>
  )
}

export default Input;