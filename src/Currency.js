import React, { useState } from "react"
import './Currency.css'


const Forms = () => {
  const [million, setMillion] = useState("")
  const [billion, setBillion] = useState("")
  const [listofcurrencyM, setListOfCurrencyM] = useState([])
  const [listofcurrencyB, setListOfCurrencyB] = useState([])

  const handleSubmitMToC = (e) => {
    e.preventDefault()
    if (million) {
      const mtoC = (million * 10 ** 6 * 73) / 10 ** 7
      const conversion = { million: mtoC }
      setListOfCurrencyM((listofcurrencyM) => {
        return [...listofcurrencyM, conversion]
      })
      setMillion("")
    } else {
      console.log("empty value")
    }
  }

  const handleSubmitBToC = (e) => {
    e.preventDefault()
    if (billion) {
      const btoC = (billion * 10 ** 9 * 73) / 10 ** 7
      const conversion = { billion: btoC }
      setListOfCurrencyB((listofcurrencyB) => {
        return [...listofcurrencyB, conversion]
      })
      setBillion("")
    } else {
      console.log("empty value")
    }
  }

  return (
    <>
      <article>
        {/* dollar million to crore */}
        <form onSubmit={handleSubmitMToC}>
          <div>
            <label htmlFor="million">Enter in $ Million:</label>
            <input type="number" id="million" name="million" value={million} onChange={(e) => setMillion(e.target.value)} />
            <button type="submit"> $ Million To ₹ </button>
          </div>
        </form>

        {listofcurrencyM.map((conversion, index) => {
          const { million } = conversion
          return (
            <div key={index}>
              <h1> ₹ {million} crore </h1>
            </div>
          )
        })}
        {/*end of dollar million to crore */}

        {/* dollar billion to crore */}
        <form onSubmit={handleSubmitBToC}>
          <div>
            <label htmlFor="billion">Enter in $ Billion:</label>
            <input type="number" id="billion" name="billion" value={billion} onChange={(e) => setBillion(e.target.value)} />
            <button type="submit"> $ Billion To ₹ </button>
          </div>
        </form>

        {listofcurrencyB.map((conversion, index) => {
          const { billion } = conversion
          return (
            <div key={index}>
              <h1> ₹ {billion} crore </h1>
            </div>
          )
        })}
        {/*end of dollar billion to crore */}
      </article>
    </>
  )
}

export default Forms
