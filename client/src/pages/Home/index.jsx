import { useMutation } from '@apollo/client'
import React from 'react'
import { UPDATE_BOOK } from '../../utils/mutations'

function Home() {
  const [updateBook] = useMutation(UPDATE_BOOK);
  
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
      console.log(err);
    }
  }
  return (
    <div>
      Home
    </div>
  )
}

export default Home