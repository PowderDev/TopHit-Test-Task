import { NextPage } from "next"
import React, { useCallback, useContext, useMemo } from "react"
import { Radio } from "../types"
import styles from "../styles/TileList.module.css"
import radioListStyles from "../styles/RadioList.module.css"
import { RadioContext } from "./Context/RadioContext"

interface Props {
  radios: Radio[]
}

const RadioList: NextPage<Props> = ({ radios }) => {
  const {
    setSelectedRadio,
    selectedRadio,
    selectedGenreId,
    selectedCountryId,
    searchQuery,
    myBestMode,
  } = useContext(RadioContext)

  const filterRadio = useCallback(
    (radio: Radio) => {
      return selectedGenreId ? selectedGenreId === radio.genreId : true
    },
    [selectedGenreId]
  )

  const markRadioByCountry = useCallback(
    (radio: Radio) => {
      if (!selectedCountryId) {
        radio.belongsSelectedCountry = true
      } else {
        radio.belongsSelectedCountry = radio.countryId === selectedCountryId
      }
      return radio
    },
    [selectedCountryId]
  )

  const filterBySearchQuery = useCallback(
    (radio: Radio) => {
      if (!searchQuery) return true
      else return radio.name.includes(searchQuery)
    },
    [searchQuery]
  )

  const modifiedRadios = useMemo(() => {
    if (myBestMode) {
      const parsedRadios: Radio[] = JSON.parse(localStorage.getItem("radios") || "[]")
      return parsedRadios
    } else {
      return radios.filter(filterRadio).filter(filterBySearchQuery).map(markRadioByCountry)
    }
  }, [myBestMode, radios, filterRadio, filterBySearchQuery, markRadioByCountry])

  return (
    <>
      {modifiedRadios?.length === 0 ? (
        <div className="mt-10 grid place-items-center w-full">
          <h2 className="text-2xl text-center">There is no radio with this parameters</h2>
        </div>
      ) : (
        <div className={radioListStyles.radioGrid + " w-full"}>
          {modifiedRadios.map((radio) => (
            <div
              key={radio.id}
              onClick={() => setSelectedRadio(radio)}
              className={
                styles.tile +
                " relative overflow-hidden " +
                (selectedRadio?.id === radio.id ? styles.activeRadio : "") +
                (!radio.belongsSelectedCountry ? styles.disabled : "")
              }
            >
              <img src={radio.image} className="absolute inset-0" />
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default RadioList
