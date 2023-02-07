import { useState } from 'react'

const Company = (props) => {
  const { item, onSave } = props
  const [name, setName] = useState(item.name)
  const [employees, setEmployees] = useState(item.employees)
  const [revenue, setRevenue] = useState(item.revenue)
  const [isEditing, setIsEditing] = useState(false)
  
  if (isEditing){
    return (
      <div>
        Name
        <input type="text" id="name" name="name" onChange={(evt) => setName(evt.target.value)} value={name} />
        with  
        <input type="text" id="employees" name="employees" onChange={(evt) => setEmployees(evt.target.value)} value={employees} />
        employees
        <input type="text" id="revenue" name="revenue" onChange={(evt) => setRevenue(evt.target.value)} value={revenue} />
        revenue
        <input type="button" value="save" onClick={() => {
            onSave(item.id, {
              name,
              employees,
              revenue
            })
            setIsEditing(false)
          }
        } />
        <input type="button" value="cancel" onClick={() => setIsEditing(false)} />						
      </div>
    )
  }
  else{
    return (
      <div>
        Name {item.name} with {item.employees} employees {item.revenue} revenue
        <input type="button" value="edit" onClick={() => setIsEditing(true)} />        
      </div>
    )
  }
}

export default Company
