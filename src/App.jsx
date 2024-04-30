import { useState } from "react"

import Header from "./components/Header/Header"
import Form from "./components/Form/Form"
import { Outlet } from "react-router-dom"

const App = () => {
  const [user, setUser] = useState()


  const submitForm = (userName) => {
    setUser(userName)
  }

  return (
    <div className="box-border h-screen flex flex-col justify-start items-center">
      <Header user={user} />
      { !!user && <Outlet/> }
      { !!user || <Form onSubmit={submitForm} /> }
    </div>
  )
}

export default App
