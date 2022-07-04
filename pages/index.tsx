import type { GetStaticProps, NextPage } from "next"
import CountryList from "../components/CountryList"
import GenreList from "../components/GenreList"
import Header from "../components/Header"
import RadioList from "../components/RadioList"
import { Country, Genre, Radio } from "../types"
import data from "../public/data.json"

interface Props {
  genres: Genre[]
  countries: Country[]
  radios: Radio[]
}

const Home: NextPage<Props> = ({ genres, countries, radios }) => {
  return (
    <div className="min-h-screen gradient">
      <Header />
      <GenreList genres={genres} />
      <div className="flex w-full gap-2">
        <CountryList countries={countries} />
        <RadioList radios={radios} />
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: data,
  }
}

export default Home
