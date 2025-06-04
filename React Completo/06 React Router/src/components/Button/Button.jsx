

export const Button = ({ children, ...props }) => {

  return (
    <button 
    className="Button" 
    style={{margin: '0 0.5rem'}}
    {...props}
    >
        {children}
    </button>
  )
}