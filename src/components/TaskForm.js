import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
class TaskForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            status: false
        }
    }
    onCloseForm = () => {
        this.props.onCloseForm();
    }
    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if(name==='status'){
            value=value==='true' ? true:false;
        }
        this.setState({
            [name]: value
        })
    }
    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.onClear(); 
        this.onCloseForm();
    }
    onClear=()=>{
        this.setState({
            name:'',
            status:false
        })
    }
    render() {
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title">Thêm công việc
                        <span
                            className="fa fa-times-circle text-right"
                            onClick={this.onCloseForm}>
                        </span>
                    </h3>
                </div>
                <div className="panel-body">

                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Tên:</label>
                            <input type="text"
                                className="form-control"
                                name="name"
                                value={this.state.name}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Trạng thái:</label>
                            <br />
                            <select
                                name="status"
                                className="form-control"
                                value={this.state.status}
                                onChange={this.onChange}
                            >
                                <option value={true}>Kích hoạt</option>
                                <option value={false}>Ẩn</option>
                            </select>
                            <br />
                            <br />
                            <div className="text-center">
                                <button type="submit" className="btn btn-warning">
                                    <span className="fa fa-plus mr-5"></span>Lưu lại
                                </button>&nbsp;
                                <button 
                                type="button" 
                                className="btn btn-danger"
                                onClick={this.onClear}
                                >
                                    <span className="fa fa-close mr-5"></span>Hủy bỏ
                                </button>&nbsp;
                            </div>
                        </div>

                    </form>

                </div>
            </div>

        );
    }
}

export default TaskForm;
