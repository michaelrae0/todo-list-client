import { connect } from 'react-redux'

import TaskList from '../../components/TaskList'

const mapStateToProps = state => {
  return {
    lists: state.lists
  }
}

export default connect(
  mapStateToProps
)(TaskList)