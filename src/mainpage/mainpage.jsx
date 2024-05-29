import CallToAction from '../calltoaction/calltoaction'
import Hero from '../hero/hero'
import './mainpagecss.css'
import { useCommandBar } from '../usecommandbar'

function MainPage() {
  useCommandBar()
  return (
    <>
      <Hero />
      <CallToAction />
    </>
  )
}

export default MainPage