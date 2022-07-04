import { NextPage } from "next"
import React, { useContext } from "react"
import { Country } from "../types"
import styles from "../styles/TileList.module.css"
import { RadioContext } from "./Context/RadioContext"

interface Props {
  countries: Country[]
}

const CountryList: NextPage<Props> = ({ countries }) => {
  const { selectedCountryId, setSelectedCountryId } = useContext(RadioContext)

  const handleSelect = (id: number) => {
    if (id !== selectedCountryId) {
      setSelectedCountryId(id)
    } else {
      setSelectedCountryId(null)
    }
  }

  return (
    <div className="flex flex-col py-2 px-2 gap-2 overflow-y-auto gradient h-full overflow-x-hidden">
      {countries.map((country) => (
        <div
          key={country.id}
          className={
            styles.tile +
            " text-xs flex-col" +
            (selectedCountryId === country.id ? " bg-[#FCA42A]" : "")
          }
          onClick={() => handleSelect(country.id)}
        >
          {country.image && <img src={country.image} alt="flag" />}
          {country.name}
        </div>
      ))}
    </div>
  )
}

export default CountryList
