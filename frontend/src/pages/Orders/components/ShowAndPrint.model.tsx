import { Dialog } from 'primereact/dialog'
import React from 'react'

const ShowAndPrintModel = ({ setVisible, visible }:any) => {
  return (
    <>
          <Dialog draggable={false} visible={visible} className=' w-[90%] mx-auto lg:mx-0 lg:w-1/2' onHide={() => setVisible(false)}>

          <h1>Order</h1>
</Dialog>
    </>
  )
}

export default ShowAndPrintModel