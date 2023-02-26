import React, { useState, useEffect } from 'react'
import fetchCRUDApi from '@/api/CRUDApi/fetchCRUDApi'
import { CRUDapiResponse } from '@/api/CRUDApi/fetchCRUDApi'
import 'react-toastify/dist/ReactToastify.css'
import Modal from './ModalUser'
import { useImmer } from 'use-immer'

const useFetchCrud = () => {
  const [crudata, setCrudata] = useImmer<CRUDapiResponse[]>([])
  const initFetchCrud = async () => {
    const response = await fetchCRUDApi()
    setCrudata(response?.data)
  }
  return {
    crudata,
    setCrudata,
    initFetchCrud,
  }
}
const UserList = () => {

  const { crudata,setCrudata, initFetchCrud } = useFetchCrud()
useEffect(() => {
  initFetchCrud()
}, [])

  const [debut, setDebut] = useImmer(0)
  const [last, setLast] = useImmer(5)
  const [showModal, isShowModal] = useImmer(false)
  const [rowIdx, setRowIdx] = useImmer(0)
  const [rowIdxItem, setRowIdxItem] = useImmer(0)
  const [isEditing, setIsEditing] = useImmer(false)
  const handleNext = () => {
    setDebut(5)
    setLast(10)
  }
  const handlePrev = () => {
    setDebut(0)
    setLast(5)
  }

  const handleIndex = (rowIdx: number) => {
    setRowIdx(rowIdx - 1)
    isShowModal(true)
  }
  const handleItem = (rowIdx: number) => {
  setRowIdxItem(rowIdx)
  setIsEditing(true)
}

 const OnchangeItem =(e:React.ChangeEvent<HTMLInputElement>) => {
    //if (!rowIdxItem) return
    const index = rowIdxItem
    
    setCrudata((crudata) => {crudata[index].name= e.target.value})
    
 }

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg ">
      <table className=" w-4/5 text-sm text-left  dark:text-gray-400 mt-10 border rounded ">
        <thead className=" font-semibold text-warmGray-900  dark:bg-gray-700 ">
          <tr>
            <th scope="col" className="px-6 py-3 ">
              ID
            </th>
            <th scope="col" className="px-6 py-3 ">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              UserName
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3 text-left">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {crudata.slice(debut, last).map((item, index) => (
            <>
              <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700"></tr>

              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {item.id}
              </th>
              {isEditing ? (
                <td className="px-6 py-4">
                  <input className="px-6 py-4" value={item.name} onChange={OnchangeItem}/>
                </td>
              ) : (
                <td className="px-6 py-4 ">
                  <button className="hover:bg-gray-300 hover:h-full" onClick={()=> handleItem(index)}>
                    {item.name}
                  </button>
                </td>
              )}
              <td className="px-6 py-4">{item.username}</td>
              <td className="px-6 py-4">{item.email}</td>
              {showModal ? (
                <Modal
                  setShowModal={isShowModal}
                  crudata={crudata}
                  index={rowIdx}
                />
              ) : null}

              <button
                data-modal-target="staticModal"
                type="button"
                onClick={() => handleIndex(item.id)}
                className="px-3 py-2 mt-2 text-sm font-medium text-center text-white bg-green-800 rounded-lg hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                More ...
              </button>
            </>
          ))}
        </tbody>
      </table>

      <div className="flex space-x-8 items-end mt-4 mb-5 justify-end mr-56">
        <button
          onClick={handlePrev}
          className="px-4 py-2 text-sm font-medium w-24 ml-2 border rounded-lg hover:bg-green-700  hover:text-white"
        >
          Previous
        </button>

        <button
          className=" mb-5inline-flex items-center w-24 px-4 py-2 ml-3 text-sm font-medium border rounded-lg hover:bg-green-700 hover:text-white "
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default UserList
