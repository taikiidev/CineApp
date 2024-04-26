import { useState } from "react"

import Header from "./components/Header/Header"
import Form from "./components/Form/Form"
import { Outlet } from "react-router-dom"

const App = () => {
  const [user, setUser] = useState()


  const submitForm = (user) => {
    setUser(user)
  }

  return (
    <div className="box-border h-screen flex flex-col justify-start items-center">
      <Header user={user?.name} />
      { !!user && <Outlet/> }
      { !!user || <Form onSubmit={submitForm} /> }
    </div>
  )
}

export default App
