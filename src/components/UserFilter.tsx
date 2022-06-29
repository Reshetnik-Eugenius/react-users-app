import React, { ChangeEvent } from 'react'
import PInput from './UI/input/PInput'
import PSelect from './UI/select/PSelect'

const UserFilter = ({filter, setFilter}:any) => {
  return (
    <div>
    <PInput style={{width: '20%'}}
        value={filter.query}
        onChange={(event: ChangeEvent<HTMLInputElement>) => setFilter({...filter, query: event.target.value})}
        placeholder="Search"
    />
    <PSelect 
        value={filter.sort}
        onChange={(selectedSort:any) => setFilter({...filter, sort: selectedSort})}
        defaultValue='sorting'
        options={[
            {value: 'name', name: 'By the name'},
            {value: 'email', name: 'By the email'},
        ]} 
    />
</div>
  )
}

export default UserFilter