import Nav from './components/nav'
import Filter from './components/filter'
import data from './constants/test'
import DateTimeline from './components/dateTimeline'
import './css/App.css'

function HomePage() {

  return (
    <>
      <Nav {...data} />
      <div id="divider">
        <div id='task-container'>
          <Filter />
        </div>
        <div id='timeline-container'>
          <DateTimeline tasks={data.org.tasks}/>
        </div>
      </div>
    </>
  )
}

export default HomePage
