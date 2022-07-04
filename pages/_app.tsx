import "../styles/globals.css"
import type { AppProps } from "next/app"
import { useDeferredValue, useState } from "react"
import { Radio } from "../types"
import { RadioContext } from "../components/Context/RadioContext"
import Head from "next/head"

function MyApp({ Component, pageProps }: AppProps) {
  const [selectedRadio, setSelectedRadio] = useState<null | Radio>(null)
  const [selectedGenreId, setSelectedGenreId] = useState<null | number>(null)
  const [selectedCountryId, setSelectedCountryId] = useState<null | number>(null)
  const [myBestMode, setMyBestMode] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const query = useDeferredValue(searchQuery)

  const handleRadioSelection = (radio: Radio) => {
    const radios = localStorage.getItem("radios")
    if (radios) {
      const parsedRadios: Radio[] = JSON.parse(radios)
      const filteredRadios = parsedRadios.filter((r) => r.id === radio.id)
      if (filteredRadios.length == 0) {
        localStorage.setItem("radios", JSON.stringify(parsedRadios.concat(radio)))
      }
    } else {
      localStorage.setItem("radios", JSON.stringify([radio]))
    }
    setSelectedRadio(radio)
  }

  return (
    <>
      <Head>
        <title>TopHit test task</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content='Test task for "TopHit" completed by Makarov Timur' />
        <meta name="keywords" content="Test-task, TopHit, @MakarovDev" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      </Head>

      <RadioContext.Provider
        value={{
          selectedRadio,
          setSelectedRadio: handleRadioSelection,
          selectedGenreId,
          setSelectedGenreId,
          selectedCountryId,
          setSelectedCountryId,
          searchQuery: query,
          setSearchQuery,
          myBestMode,
          setMyBestMode,
        }}
      >
        <Component {...pageProps} />
      </RadioContext.Provider>
    </>
  )
}

export default MyApp
