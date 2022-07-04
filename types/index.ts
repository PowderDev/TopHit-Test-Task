interface Default {
  id: number
  name: string
  image: string
}

export type Genre = Omit<Default, "image">
export type Country = Default

export interface Radio extends Default {
  genreId: number
  countryId: number
  belongsSelectedCountry?: boolean
}

export interface RadioContext {
  selectedRadio: null | Radio
  setSelectedRadio: (radio: Radio) => void
  selectedGenreId: null | number
  setSelectedGenreId: (id: number | null) => void
  selectedCountryId: null | number
  setSelectedCountryId: (id: number | null) => void
  searchQuery: string
  setSearchQuery: (query: string) => void
  myBestMode: boolean
  setMyBestMode: (mode: boolean) => void
}
