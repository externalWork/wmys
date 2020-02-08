import { useEffect } from 'react'
import { withRouter } from 'react-router-dom';

function ScrollToTop(props) {
  console.log(props)
  useEffect(() => {
    console.log(11112, props)
    document.getElementById('root').scrollIntoView(true)
  })
return props.children
}

export default withRouter(ScrollToTop);