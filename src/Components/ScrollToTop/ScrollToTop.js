import { useEffect } from 'react'
import { withRouter } from 'react-router-dom';

function ScrollToTop(props) {
  useEffect(() => {
    document.getElementById('root').scrollIntoView(true)
  })
return props.children
}

export default withRouter(ScrollToTop);