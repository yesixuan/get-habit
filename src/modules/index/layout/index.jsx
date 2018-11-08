import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import RestoreIcon from '@material-ui/icons/Restore'
import FavoriteIcon from '@material-ui/icons/Favorite'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import style from './index.module.styl'
import Main from "../main"
import Sub from "../sub"

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
    this.setState({ value })
    if (value === 0) {
      this.props.history.replace('/')
    }
    if (value === 1) {
      this.props.history.push('/index/saga')
    }
  }

  render() {
    const { value } = this.state
    const { match } = this.props

    return (
      <div className={style.wrapper}>
        <article className={style.content}>
          <Switch>
            <Route path={`${match.path}`} exact component={Main} />
            <Route path={`${match.path}/saga`} component={Sub} />
          </Switch>
        </article>
        <BottomNavigation
          value={value}
          onChange={this.handleChange}
          showLabels
          className=''
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
        </BottomNavigation>
      </div>
    )
  }
}

export default withRouter(withStyles(styles)(Layout))
