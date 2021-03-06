import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { AC_LIST_PAYMENT, AC_ADD_PAYMENT, AC_VIEW_PAYMENT, AC_HANDLE_INPUT_CHANGE } from '../actions/payment';
import { Redirect } from 'react-router-dom';
// import swal from 'sweetalert';
class viewPayment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: '',
            modeError: false,
            modeCountError: false,
            name: '',
            nameError: false,
            nameCountError: false,
            status: '',
            statusError: false,
            editStatus:false
        }
        this.validation = this.validation.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.back=this.back.bind(this)
    }

    validation() {
        const name = this.props.paymentReducer.paymentInfo.name;
        const mode = this.props.paymentReducer.paymentInfo.mode;
        const status = this.props.paymentReducer.paymentInfo.status;
        const id = this.props.paymentReducer.paymentInfo.id;
        let formData = {
            name : name,
            mode : mode,
            status : status,
            id : id
        }
        this.props.AC_ADD_PAYMENT(formData);
    }

    handleInputChange(event) {
        let name = event.target.id;
        let value = event.target.value;
        this.props.AC_HANDLE_INPUT_CHANGE(name,value);
    }
    componentWillMount() {
        let paymentId = this.props.match.params.id;
        let formData = {id:paymentId}
        this.props.AC_VIEW_PAYMENT(formData);
    }
    back(){
        this.setState({ editStatus: true })
      }
    render() {
        if (this.state.editStatus) {
            return <Redirect to='/listPayment' />
          }
        const name = this.props.paymentReducer.paymentInfo.name;
        const mode = this.props.paymentReducer.paymentInfo.mode;
        const status = this.props.paymentReducer.paymentInfo.status;
        return (
            <div className="container-fluid" style={{ width: '60%' }}>
            <h3 class="page-title"><span class="page-title-icon bg-gradient-primary text-white me-2" style={{ marginLeft: '10rem', marginTop: '3rem' }}><i class="mdi mdi-comment-plus-outline"></i></span>View Payment</h3>
                <div className="row">
                    <div className="col-md-6 grid-margin stretch-card2">
                        <div className="card">
                            <div className="card-body">
                                <form className="forms-sample" id="editFaq">
                                    <div className="form-group">
                                        <label for="exampleInputUsername1">Payment</label>
                                        <input type="text" autoComplete='off' placeholder="Payment" id="name" value={name} onChange={this.handleInputChange} style={{ borderColor: this.state.color0 }} className="form-control" disabled/>
                                        {this.state.paymentError ? <label className="mt-2" style={{ color: 'red' }}>Payment is required</label> : ""}
                                        {this.state.paymentCountError ? <label className="mt-2" style={{ color: 'red' }}>Payment should be atleast 3 characters</label> : ""}

                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputUsername1">Mode</label>
                                        <input type="text" autoComplete='off' placeholder="mode" id="mode" value={mode} onChange={this.handleInputChange} style={{ borderColor: this.state.color1 }} className="form-control" disabled/>
                                        {this.state.modeError ? <label className="mt-2" style={{ color: 'red' }}>mode is required</label> : ""}
                                        {this.state.modeCountError ? <label className="mt-2" style={{ color: 'red' }}>mode should be atleast 2 characters</label> : ""}

                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputUsername1">Status</label>
                                        <select className="form-control" id="status" style={{ outline: this.state.color2 }} onChange={this.handleInputChange} disabled>
                                            <option value="">Select Status</option>
                                            <option value="true" selected={status == true}>Active</option>
                                            <option value="false" selected={status == false}>Inactive</option>
                                        </select>
                                        {this.state.statusError ? <label className="mt-2" style={{ color: 'red' }}>Status is required</label> : ""}
                                    </div>
                                    <button type="button" className="btn btn-submit btn-gradient-primary me-2" style={{
                                        backgroundColor: 'blue',
                                        color: 'white',
                                        borderRadius:'2rem'
                                    }} onClick={this.back}>Back</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        paymentReducer: state.PAYMENT_Reducer
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ AC_LIST_PAYMENT, AC_ADD_PAYMENT, AC_VIEW_PAYMENT,AC_HANDLE_INPUT_CHANGE }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(viewPayment);