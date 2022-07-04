import { createContext } from "react"
import { RadioContext as RadioContextType } from "../../types"

export const RadioContext = createContext<RadioContextType>({
  selectedRadio: null,
  setSelectedRadio: (radio) => {},
  selectedGenreId: null,
  setSelectedGenreId: (id) => {},
  selectedCountryId: null,
  setSelectedCountryId: (id) => {},
  searchQuery: "",
  setSearchQuery: (query: string) => {},
  myBestMode: false,
  setMyBestMode: (mode: boolean) => {},
})
