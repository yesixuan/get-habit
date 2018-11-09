import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import RestoreIcon from '@material-ui/icons/Restore'
import AddToPhotos from '@material-ui/icons/AddToPhotos'
import ThumbUpAlt from '@material-ui/icons/ThumbUpAlt'
import style from './index.module.styl'
import Recent from "../recent"
import Plan from "../plan"
import Achieve from "../achieve"

const styles = {
  root: {
    width: 500,
  },
}

class Layout extends React.Component {
  state = {
    value: 0,
  }

  handleChange = (event, value) => {
    const links = [ '/', '/index/plan', '/index/achieve' ]
    this.setState({ value })
    this.props.history.push(links[value])
  }

  render() {
    const { value } = this.state
    const { match } = this.props

    return (
      <div className={style.wrapper}>
        <article className={style.content}>
          <Switch>
            <Route path={`${match.path}`} exact component={Recent} />
            <Route path={`${match.path}/plan`} component={Plan} />
            <Route path={`${match.path}/achieve`} component={Achieve} />
          </Switch>
        </article>
        <BottomNavigation
          value={value}
          onChange={this.handleChange}
          showLabels
          className=''
        >
          <BottomNavigationAction label="recent" icon={<RestoreIcon />} />
          <BottomNavigationAction label="plan" icon={<AddToPhotos />} />
          <BottomNavigationAction label="achieve" icon={<ThumbUpAlt />} />
        </BottomNavigation>
      </div>
    )
  }
}

export default withRouter(withStyles(styles)(Layout))
