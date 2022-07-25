import React from "react"

const LinearSearch = props => {
  const { array, seekElement } = props
  let result
  array.forEach((element, index) => {
    if (element === seekElement) {
      result = index
    }
  })

  console.log("result: ", typeof result)

  return Number.isInteger(result) ? (
    <>
      <h1>index of array = {result}</h1>
      <h1>seekElement = {seekElement}</h1>
    </>
  ) : (
    <h3>failed</h3>
  )
}

export default LinearSearch
