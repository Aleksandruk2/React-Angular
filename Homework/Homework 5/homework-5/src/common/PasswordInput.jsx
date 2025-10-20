import {Lock} from "lucide-react";
import classNames from "classnames";

const PasswordInput = ({value, label, field, touched, error, onChange}) => {
    const isError = touched && error;

    return (
        <>
            <div className={'mb-3 '}>
                <label htmlFor={field} className={'form-label'}>
                    {label}
                </label>
                <div className={'input-group'}>
                    <span className={'input-group-text bg-light'}>
                        <Lock className={'text-secondary'} size={20}/>
                    </span>
                    <input type="password"
                           className={classNames("form-control", {
                               'is-invalid': isError
                           })}
                           name={field}
                           id={field}
                           value={value || ""}
                           onChange={onChange}/>
                    {isError && (<div className={'invalid-feedback'}>{error}</div>)}
                </div>
            </div>
        </>
    );
}
export default PasswordInput;