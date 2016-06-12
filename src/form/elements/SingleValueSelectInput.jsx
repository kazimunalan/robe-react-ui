import React from "react";
import { ShallowComponent } from "robe-react-commons";
import Select from "react-select";
import Col from "react-bootstrap/lib/Col";
import "react-select/dist/react-select.css";

// read more https://github.com/JedWatson/react-select

class SingleValueSelectInput extends ShallowComponent {

    constructor(props) {
        super(props);
    };

    render() {

        let placeholder = this.props.placeholder == undefined ? "<Lütfen Seçiniz>" : this.props.placeholder;

        return (
            <Col className="form-group">
                <Select
                    {...this.props}
                    multi={false}
                    noResultsText="Sonuç bulunamadı."
                    placeholder={placeholder}/>
            </Col>

        );
    };
}


module.exports = SingleValueSelectInput;