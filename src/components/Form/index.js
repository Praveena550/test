import React from 'react';
import './style.css'

class FormDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
            company: "",
            address: "",
            tab_s: "1",
            form_errors: {},
            c_err : {}
        }
    }

    FormValidation = () => {

        let fields = this.state.user;
        let form_errors = {};

        let formIsValid = true;
        if (!fields["fname"]) {
            formIsValid = false;
            form_errors["fname"] = "First Name cannot be empty";
        } else {
            formIsValid = true;
            form_errors["fname"] = "";
        }
        if (!fields["lname"]) {
            formIsValid = false;
            form_errors["lname"] = "Last Name cannot be empty";
        } else {
            formIsValid = true;
            form_errors["lname"] = "";
        }

        if (!fields["email"]) {
            formIsValid = false;
            form_errors["email"] = "Email cannot be empty";
        } else {
            formIsValid = true;
            form_errors["email"] = "";
        }
        this.setState({ form_errors: form_errors });


        return formIsValid;

    }

    companyValidation = () => {


        let c_err = {};

        let formIsValid = true;
        if (!this.state.company) {
            formIsValid = false;
            c_err["company"] = "Company cannot be empty";
        } else {
            formIsValid = true;
            c_err["company"] = "";
        }
        if (!this.state.address) {
            formIsValid = false;
            c_err["address"] = "Address cannot be empty";
        } else {
            formIsValid = true;
            c_err["address"] = "";
        }

        this.setState({ c_err: c_err });


        return formIsValid;

    }

    PrevTab = () => {
        if (this.state.tab_s === "2") {
            this.setState({
                tab_s: "1"
            })
        }
        if (this.state.tab_s === "3") {
            this.setState({
                tab_s: "2"
            })
        }
    }

    NextTab = () => {

        if (this.state.tab_s === "1") {

            if (this.FormValidation() === true) {
                this.setState({
                    tab_s: "2"
                })
            }
        }
        if (this.state.tab_s === "2") {
            if (this.companyValidation() === true) {
                this.setState({
                    tab_s: "3"
                })
            }
        }
    }

    Savepersonal = (value, e) => {

        let user = this.state.user;
        user[value] = e.target.value;
        this.setState({ user });

    }
    Savecompany = (value, e) => {

        let company = this.state.company;
        this.setState({ company: e.target.value });

    }
    SaveAd = (e) => {
        let address = this.state.address;
        this.setState({ address: e.target.value });
    }


    render() {
        return (
            <div className='OuterDiv'>

                <div className='mainDiv'>
                    {/* Tab1 */}
                    {this.state.tab_s === 1 || this.state.tab_s === '1' ?
                        <form className='form_outer'>
                            <div className='each_elm'>
                                <label className='label' for="firstname"><b>Firstname</b></label>
                                <input id={this.state.form_errors["fname"] ? "err_id" : ""} className='inp_fld' onChange={this.Savepersonal.bind(this, 'fname')} value={this.state.user.fname} name="fname" type="text" placeholder="Firstname" />
                            </div>

                            <div className='each_elm'>
                                <label className='label' for="lastname"><b>Lastname</b></label>
                                <input id={this.state.form_errors["lname"] ? "err_id" : ""} className='inp_fld' onChange={this.Savepersonal.bind(this, 'lname')} value={this.state.user.lname} name="lname" type="text" placeholder="Lastname" />
                            </div>
                            <div className='each_elm'>
                                <label className='label' for="email"><b>Email</b></label>
                                <input id={this.state.form_errors["email"] ? "err_id" : ""} className='inp_fld' type="text" placeholder="email" onChange={this.Savepersonal.bind(this, 'email')} value={this.state.user.email} name="email" />
                            </div>

                        </form>
                        : ""}
                    {/* Tab2 */}
                    {this.state.tab_s === 2 || this.state.tab_s === '2' ?
                        <form className='form_outer'>
                            <div className='each_elm'>
                                <label className='label' for="company"><b>Company name</b></label>
                                <input id={this.state.c_err["company"] ? "err_id" : ""} className='inp_fld' onChange={this.Savecompany.bind(this, 'company')} value={this.state.company} type="text" placeholder="Company" name="company" />
                            </div>
                            <div className='each_elm'>
                                <label className='label' for="address"><b>Address</b></label>
                                <textarea id={this.state.c_err["address"] ? "err_id" : ""} className='inp_fld' onChange={this.SaveAd.bind(this)} value={this.state.address}  ></textarea>
                            </div>

                        </form>
                        : ""}

                    {/* Tab 3 */}
                    {this.state.tab_s === '3' ?
                        <div>
                            <div className='each_elm'>
                                <b className='label'> Firstname : </b>
                                <span className='inp_vw'>{this.state.user.fname}</span>
                            </div>
                            <div className='each_elm'>
                                <b className='label'> Lastname : </b>
                                <span className='inp_vw'>{this.state.user.lname}</span>
                            </div>
                            <div className='each_elm'>
                                <b className='label'> Email : </b>
                                <span className='inp_vw'>{this.state.user.email}</span>
                            </div>
                            <div className='each_elm'>
                                <b className='label'> Company : </b>
                                <span className='inp_vw'>{this.state.company}</span>
                            </div>
                            <div className='each_elm'>
                                <b className='label'> Address : </b>
                                <span className='inp_vw'>{this.state.address}</span>
                            </div>
                        </div>
                        : ""}



                    <div className='buttonOuter'>
                        {this.state.tab_s !== '1' ?
                            <button className="nextBtn prv" type="button" onClick={this.PrevTab}>Previous</button>
                            : ""}
                        {this.state.tab_s !== '3' ?
                            <button className="nextBtn" type="button" onClick={this.NextTab}>Next</button>
                            : ""}
                    </div>

                </div>
            </div>
        )
    }
}

export default FormDetail;