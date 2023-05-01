import React from 'react'
import TasksCard from './TasksCard'

export function TaskList() {
  return (
    <div className="grid grid-cols-3 gap-3">
      {
        //<h3>Task List</h3>
      }
      <TasksCard />
    </div>
  )
}
