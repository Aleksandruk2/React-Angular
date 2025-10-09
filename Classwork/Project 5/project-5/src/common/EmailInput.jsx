import classNames from "classnames";
import {Mail} from "lucide-react";

const EmailInput = ({label, field, value, error, touched, onChange}) => {

    const isError = touched && error;

    return (
        <div className="mb-3">
            <label htmlFor={field} className="form-label">
                {label}
            </label>
            <div className="input-group">
                <span className="input-group-text bg-light">
                    <Mail className="text-secondary" size={20}/>
                </span>
                <input type="email"
                       className={classNames("form-control", {
                           "is-invalid": isError
                       })}
                       name={field}
                       id={field}
                       value={value}
                       onChange={onChange}/>

                {isError && (<div className="invalid-feedback">{error}</div>)}
            </div>
        </div>
    );
}

export default EmailInput;