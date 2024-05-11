 
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button'; 
import BredCrums from '../../components/BredCrums';
const UserPage = () => {
  const data = [
    {
      key: '0', 
      icon: 'pi pi-fw pi-cog',
      data: {
        name: 'Applications',
        size: '100kb',
        type: 'Folder'
      },
       
    },
    {
      key: '1',
      data: {
        name: 'Cloud',
        size: '20kb',
        type: 'Folder'
      },
     
    },
    
    
  ]
  return (
    <>  
        <BredCrums PageLink='/user' PageName='Users' /> 
      <TreeTable value={data}   tableStyle={{ minWidth: '50rem' }}>
        <Column field="name" header="Name" ></Column>
        <Column field="size" header="Size"></Column>
        <Column field="type" header="Type"></Column>
        {/* <Column body={actionTemplate} headerClassName="w-10rem" /> */}
      </TreeTable>
    
    </>
  )
}

export default UserPage