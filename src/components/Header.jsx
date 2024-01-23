/* eslint-disable react/prop-types */


const Header = ({handleDarkMode}) => {
  return (
    <div className="header">
       <h1>Notes</h1>
       <button  onClick={ () => handleDarkMode(prev => !prev)} className="save">Toggle Mode</button>
    </div>
  )
}

export default Header
