import React, { useState } from 'react';
import Button from '../components/ui/Button/Button';
import Checkbox from '../components/ui/Checkbox/Checkbox';
import Card from '../components/ui/Card/Card';
import Badge from '../components/ui/Badge/Badge';
import Input from '../components/ui/Input/Input';
import Dropdown from '../components/ui/Dropdown/Dropdown';
import Modal from '../components/ui/Modal/Modal';

function Components() {
  const [modalOpen, setModalOpen] = useState(true)

  return (
    <div>
        <Button label={'Hello'} onClick={() => {}} type={'primary'}/>
        <Button label={'Hello'} onClick={() => {}} type={'dark'}/>
        <Button label={'Hello'} onClick={() => {}} type={'outlined'}/>
        <Button label={'Hello'} onClick={() => {}} type={'outlined-dark'}/>
        <Button label={'Hello'} onClick={() => {}} type={'outlined-primary'}/>
        <h1>Make Learning Easy and Fun</h1>
        <h2>Make Learning Easy and Fun</h2>
        <h3>Make Learning Easy and Fun</h3>
        <h4>Make Learning Easy and Fun</h4>
        <h5>Make Learning Easy and Fun</h5>

        <Checkbox label={'Checkbox'}/>

        <Card size={'default'}  children={<h1>Hello</h1>}/>
        <Card size={'square'}  children={<h1>Hello</h1>}/>
        <Card size={'small'}  children={<h1>Hello</h1>}/>
        <Card size={'medium'}  children={<h1>Hello</h1>}/>
        <Card size={'large'}  children={<h1>Hello</h1>}/>
        <Badge type={'trending'}/>
        <Badge type={'verified'}/>
        <Badge type={'soon'}/>
        <Badge type={'new'}/>

        <br />
        <br />
        <br />

        <Input label={'Name' } type={'text'}/>

        <br />

        <Dropdown label={'family'} />

        <br />
        <br />
        <br />

       {modalOpen && <Modal content={<h1>Hello!, this is a modal</h1>} name={'example'} closeModal={() => setModalOpen(false)}/>}


    </div>
  )
}

export default Components