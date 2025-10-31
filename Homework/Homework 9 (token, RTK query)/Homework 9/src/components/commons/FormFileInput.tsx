import classNames from "classnames";
import type {LucideIcon} from "lucide-react";

interface IInputProps {
    label: string;
    field: string;
    type: string;
    error?: string;
    touched?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    icon?: LucideIcon;
}

const FormFileInput: React.FC<IInputProps> = ({
                                                  label,
                                                  field,
                                                  type,
                                                  error,
                                                  touched,
                                                  onChange,
                                                  icon: Icon
                                              }) => {

    const isError = touched && error;

    return (
        <>
            <div>
                <label htmlFor={field} className={'form-label text-secondary'}>
                    {label}
                </label>
                <div className="input-group border-secondary">
                    {Icon && (
                        <span className="input-group-text bg-dark">
                            <Icon className="text-secondary" size={20}/>
                        </span>
                    )}

                    <input type={type} accept={"image/*"}
                           className={classNames("form-control bg-dark text-secondary", {
                               "is-invalid": isError
                           })}
                           name={field}
                           id={field}
                           onChange={onChange}/>

                    {isError && (<div className="invalid-feedback">{error}</div>)}
                </div>
            </div>
        </>
    );
}

export default FormFileInput;