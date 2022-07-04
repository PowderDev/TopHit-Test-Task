import type { GetStaticProps, NextPage } from "next"
import CountryList from "../components/CountryList"
import GenreList from "../components/GenreList"
import Header from "../components/Header"
import RadioList from "../components/RadioList"
import { Country, Genre, Radio } from "../types"

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
  const res = await fetch("https://top-hit-test-task-ne71nen89-powderdev.vercel.app/api/data")
  const data = await res.json()

  return {
    props: data,
  }
}

export default Home
