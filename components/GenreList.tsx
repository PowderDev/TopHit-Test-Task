import { NextPage } from "next"
import React, { useContext } from "react"
import { Genre } from "../types"
import styles from "../styles/TileList.module.css"
import { RadioContext } from "./Context/RadioContext"

interface Props {
  genres: Genre[]
}

const GenreList: NextPage<Props> = ({ genres }) => {
  const { selectedGenreId, setSelectedGenreId, myBestMode, setMyBestMode } =
    useContext(RadioContext)

  const handleSelect = (id: number) => {
    if (id !== selectedGenreId) {
      setSelectedGenreId(id)
    } else {
      setSelectedGenreId(null)
    }
  }

  return (
    <div className="flex items-center">
      <div
        onClick={() => setMyBestMode(!myBestMode)}
        className={styles.tile + " bg-[#F97537] font-semibold text-white mt-1 ml-2"}
      >
        My Best
      </div>
      <div className={`flex py-2 px-2 gap-4 overflow-x-auto`}>
        {genres.map((genre) => (
          <div
            key={genre.id}
            onClick={() => handleSelect(genre.id)}
            className={styles.tile + (selectedGenreId === genre.id ? " bg-[#FCA42A]" : "")}
          >
            {genre.name}
          </div>
        ))}
      </div>
    </div>
  )
}

export default GenreList
