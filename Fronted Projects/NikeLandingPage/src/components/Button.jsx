
const Button = ({ label, iconUrl, backgroundColor, textColor, borderColor,fullWidth}) => {
  return (
    <button className={`flex flex-row justify-center items-center gap-2 px-7 py-4 text-lg rounded-full font-montserrat leading-none border 
    ${fullWidth &&'w-full'}
    ${backgroundColor ?
       `${backgroundColor} ${textColor} ${borderColor}`
       : "bg-coral-red text-white border-coral-red"
      }
`}>
      {label}
      {iconUrl &&<img 
      src={iconUrl}
      className='h-5 w-5 rounded-full ml-2' 
      />}
    </button>
  )
}

export default Button
