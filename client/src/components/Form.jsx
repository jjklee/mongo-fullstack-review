import React from 'react';
import axios from 'axios';

class Form extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            name : '',
            priority: 0
        }

        this.onChangeInput = this.onChangeInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChangeInput(e){
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.addData(this.state.name, this.state.priority);
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input type="text" name="name" placeholder="Todo" onChange={this.onChangeInput}/>
                    </label>
                    <label>
                        <input type="number" name="priority" onChange={this.onChangeInput}/>
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default Form;