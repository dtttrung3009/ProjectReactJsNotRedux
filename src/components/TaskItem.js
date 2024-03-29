import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
class TaskItem extends React.Component {
  onUpdateStatus=()=>{
   this.props.onUpdateStatus(this.props.task.id);
  }
  render() {
    var {task, index}= this.props;
    return (
        <tr>
            <td>{index+1}</td>
            <td>{task.name}</td>
            <td className="text-center">
              <span 
              className={task.status===true ? 'label label-danger':'label label-success'}
              onClick={this.onUpdateStatus}
              >
                {task.status===true ? 'Kích hoạt': 'Ẩn'}
              </span>
            </td>
            <td className="text-center">
              <button type="button" className="btn btn-warning">
                <span className="fa fa-pencil mr-5"></span>Sửa
              </button>
              &nbsp;
              <button type="button" className="btn btn-danger">
                <span className="fa fa-trash mr-5"></span>Xóa
              </button>
            </td>
          </tr>
    );
  }
}

export default TaskItem;
