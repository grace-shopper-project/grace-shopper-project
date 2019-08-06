import React from 'react'

const CartDropdown = props => {
  const inventory = []
  for (let i = 0; i < props.inventory; i++) {
    if (i < 10) {
      inventory.push(i + 1)
    }
  }
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        textAlign: 'center',
        alignItems: 'center'
      }}
    >
      <h5
        style={{
          marginBlockStart: '0vw',
          marginBlockEnd: '0vw'
        }}
      >
        Change Quantity:
      </h5>
      <div
        style={{
          width: '4vw',
          height: '2vw',
          marginLeft: '1vw'
        }}
        className="dropdown"
        type="submit"
      >
        <select
          style={{
            width: '4vw',
            height: '2vw'
          }}
          onChange={props.handleChange}
        >
          {inventory.map((num, idx) => {
            return (
              <option value={idx + 1} key={idx}>
                {num}
              </option>
            )
          })}
        </select>
      </div>
    </div>
  )
}

export default CartDropdown
