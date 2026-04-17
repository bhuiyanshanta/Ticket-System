import React from 'react'

 function Navbar() {
  return (
    <div className="navbar max-w-300 mx-auto bg-white ">
  <div className="flex-1">
    <a className="btn ">CSTicket</a>
  </div>
  <div className="flex justify-between items-center mr-4">
          <ul className="flex space-x-4">
          <li>Home</li>
          <li>FAQ</li>
          <li>Changelog</li>
          <li>Blog</li>
          <li>Download</li>
          <li>Contact</li>
          <button className='blue '>New Ticket</button>
          </ul>
          
          
  </div>
</div>
  )
}
export default Navbar
