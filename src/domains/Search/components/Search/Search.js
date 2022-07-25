import { LinearSearch } from "../"
import React from "react"

// TODO: write list from worse to better Algorithm
const Search = () => {
  const array = [10, 14, 19, 26, 27, 31, 33, 35, 42, 44]
  const seekElement = 10
  return <LinearSearch array={array} seekElement={seekElement} />
}

export default Search
