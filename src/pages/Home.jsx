import React from 'react'
import Button from '../components/ui/Button/Button'
import Checkbox from '../components/ui/Checkbox/Checkbox'

function Home() {
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
    </div>
  )
}

export default Home