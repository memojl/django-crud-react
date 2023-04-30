import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navigation from "./components/Navigation"
import HomePage from "./pages/HomePage"
import {TasksPage} from "./pages/TasksPage"
import {TaskFormPage} from "./pages/TaskFormPage"
import { Toaster } from 'react-hot-toast'

function App(){
  return(
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tasks" element={<TasksPage />} />
        <Route path="/tasks-create" element={<TaskFormPage />} />
        <Route path="/tasks/:id" element={<TaskFormPage />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  )
}

export default App