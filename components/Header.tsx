import { NextPage } from "next"
import React, { useContext, useState } from "react"
import {
  MdMenu,
  MdSearch,
  MdClear,
  MdThumbUp,
  MdThumbDown,
  MdPlayCircle,
  MdArrowDownward,
  MdChevronRight,
} from "react-icons/md"
import { RadioContext } from "./Context/RadioContext"

const Header: NextPage = () => {
  const [searchMode, setSearchMode] = useState(false)
  const { selectedRadio, searchQuery, setSearchQuery } = useContext(RadioContext)

  const toggleSearchMode = () => {
    setSearchQuery("")
    setSearchMode(!searchMode)
  }

  return (
    <>
      <div className="flex w-full items-center p-3 relative justify-between bg-white">
        <div>
          <MdMenu size={40} color="#0C91D8" />
        </div>
        {selectedRadio && (
          <div className="flex justify-around items-center w-full mx-2 md:w-8/12 h-8">
            <MdThumbUp size={35} color="#F97537" />
            <MdPlayCircle size={35} />
            <MdThumbDown size={35} color="#0C91D8" />
            <MdChevronRight size={35} />
            <MdArrowDownward size={35} />
          </div>
        )}

        {searchMode && (
          <div className="translate-x-1/2 right-1/2 w-8/12 h-8 absolute">
            <input
              type="text"
              value={searchQuery}
              onChange={({ target }) => setSearchQuery(target.value)}
              className="w-full h-full rounded-md px-2 outline-none border-gray-400 border-b-2"
            />
          </div>
        )}
        <div onClick={toggleSearchMode}>
          {searchMode ? <MdClear size={40} /> : <MdSearch size={40} />}
        </div>
      </div>
      <div className="bg-[#EEEEEE] h-3 py-2 text-xs flex items-center justify-end">
        {selectedRadio?.name}
      </div>
    </>
  )
}

export default Header
