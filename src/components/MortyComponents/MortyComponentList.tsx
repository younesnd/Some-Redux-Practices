import { fetchMorty} from '@/api/MortyApi/mortApifetch'
import MortyComponent from './MortyComponent'
import { useEffect,   } from 'react'
import { useImmer } from 'use-immer'

const useFetchMorty = () => {
  const [morty, setMorty] = useImmer<any>([
    { image: '', name: '', origin: '' },
    { image: '', name: '', origin: '' },
    { image: '', name: '', origin: '' },
    { image: '', name: '', origin: '' },
  ])
  //const [morty , setMorty]= useState<any>([])

  const [loading, setLoading] = useImmer(false)
  const initFetchMorty = async () => {
    setLoading(true)
    const response = await fetchMorty()
    setMorty((previosState: any) => [
      response[0].data,
      response[1].data,
      response[2].data,
      response[3].data,
    ])
    setLoading(false)
  }
  return {
    morty,
    loading,
    initFetchMorty,
  }
}
export default function MortyComponentList() {
  const { morty, loading, initFetchMorty } = useFetchMorty()

  useEffect(() => {
    initFetchMorty()
  }, [])

  return (
    <>
      <nav className='bg-slate-700 text-white flex items-center text-1xl ml-5 h-11 rounded text-left'>
        <span className='ml-5'> Rick and Morty</span>
      </nav>
      <h2 className='text-2xl text-black-700 text-left ml-10 mt-3 mb-3'>
        Characters
      </h2>
      <div className='container grid  md:grid-cols-4 gap-x-8 gap-y-8 '>
        {loading ? (
          <p>loading...</p>
        ) : (
          <MortyComponent
            name={morty[0].name}
            origin={morty[0].origin}
            image={morty[0].image}
          />
        )}
        {loading ? (
          <p>Loading...</p>
        ) : (
          <MortyComponent
            name={morty[1].name}
            origin={morty[1].origin}
            image={morty[1].image}
          />
        )}

        {loading ? (
          <p>Loading...</p>
        ) : (
          <MortyComponent
            name={morty[2].name}
            origin={morty[2].origin}
            image={morty[2].image}
          />
        )}

        {loading ? (
          <p>Loading...</p>
        ) : (
          <MortyComponent
            name={morty[3].name}
            origin={morty[3].origin}
            image={morty[3].image}
          />
        )}
      </div>
      <>
        <button
          onClick={initFetchMorty}
          className='mt-10 rounded bg-blue-800 text-blue-100 p-4'
        >
          Fetch Morty
        </button>
      </>
    </>
  )
}
