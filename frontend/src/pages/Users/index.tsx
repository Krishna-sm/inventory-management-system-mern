 
import React, { useState, useEffect } from 'react';
import { TreeTable } from 'primereact/treetable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button'; 
import BredCrums from '../../components/BredCrums';
import { FaPlus } from "react-icons/fa6";
import { TreeNode } from 'primereact/treenode';
const UserPage = () => {

  const nodes: TreeNode []= [
    {
      key: '0',
      label: 'Documents',
      data: {
        name:'krishna',
        size:'M',
        "type":"Ma"
      },
      icon: 'pi pi-fw pi-inbox',
      
    },
    {
      key: '0',
      label: 'Documents',
      data: {
        name: 'krishna',
        size: 'M',
        "type": "Ma"
      },
      icon: 'pi pi-fw pi-inbox',

    },
    {
      key: '0',
      label: 'Documents',
      data: {
        name: 'krishna',
        size: 'M',
        "type": "Ma"
      },
      icon: 'pi pi-fw pi-inbox',

    },
    {
      key: '0',
      label: 'Documents',
      data: {
        name: 'krishna',
        size: 'M',
        "type": "Ma"
      },
      icon: 'pi pi-fw pi-inbox',

    },
  ]
  return (



    <>  
        <BredCrums PageLink='/user' PageName='Users' /> 

      <TreeTable value={nodes} className='text-black' tableStyle={{ minWidth: '50rem' }}>
        <Column field="name" header="Name" expander></Column>
        <Column field="size" header="Size"></Column>
        <Column field="type" header="Type"></Column>
      </TreeTable>

    </>

  )
}

export default UserPage