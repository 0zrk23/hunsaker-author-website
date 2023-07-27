import { useMutation, useQuery } from '@apollo/client'
import React from 'react'
import { GET_BOOKS } from '../../utils/queries'
import { UPDATE_BOOK } from '../../utils/mutations'

function Home() {
  const [updateBook,{loading,data,error}] = useMutation(UPDATE_BOOK);
  
  const handleUpdate = async (event) => {
    event.preventDefault();
    try{
      const {data} = await updateBook({
        variables:{
          _id: "64bff2040b8dacda123bbcbc",
          title: `num: ${Math.random()}`
        }
      })
      console.log(data);
    } catch (err) {
      console.log(error);
    }
  }

  return (
    <div>
      {/* Books container */}
      Home
      <button onClick={handleUpdate}>test</button>
    </div>
  )
}

export default Home