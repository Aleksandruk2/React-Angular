import classNames from "classnames";
import type {LucideIcon} from "lucide-react";
import React from 'react';

interface IInputProps {
    label: string;
    field: string;
    type: string;
    error?: string;
    touched?: boolean;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    icon?: LucideIcon;
}

const FormInput: React.FC<IInputProps> = ({
                                              label,
                                              field,
                                              type,
                                              value,
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

                    <input type={type}
                           className={classNames("form-control bg-dark text-secondary", {
                               "is-invalid": isError
                           })}
                           name={field}
                           id={field}
                           value={value}
                           onChange={onChange}/>

                    {isError && (<div className="invalid-feedback">{error}</div>)}
                </div>
            </div>
        </>
    );
}

export default FormInput;