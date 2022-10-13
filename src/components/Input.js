import React from 'react'

const Input = () => {
  return (
    <>
        <div className="input-field col s6">
          <input placeholder="Placeholder" id="first_name" type="text" class="validate" />
            <label htmlFor="first_name">First Name</label>
        </div>
    </>
  )
}

export default Input