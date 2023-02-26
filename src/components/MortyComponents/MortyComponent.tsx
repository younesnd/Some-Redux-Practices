import MortyComponentList from './MortyComponentList'

export default function MortyComponent(props: any) {
  return (
    <>
      <div className='container flex flex-col justify-center gap-8 items-center overflow-hidden shadow-lg'>
        <img
          className=' rounded h-48 w-52 object-cover'
          src={props.image}
          alt={props.name}
        />
        <></>
        <span className='mt-0 text-slate-900 text-xl'>{props.name}</span>
        <span className='mb-5'>Origin: {props.origin.name}</span>
      </div>
    </>
  )
}
