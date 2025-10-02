const TextFieldBase = ({
    field,
    label,
    value,
    onChange,
    type="text"
}) => {
    return (
        <>
            <div className="mb-3">
                <label htmlFor="field" className="form-label">{label}</label>
                <input type={type} className="form-control"
                       id="field" name="field"
                       aria-describedby="emailHelp"
                       value={value}
                       onChange={onChange}
                />
            </div>
        </>
    )
}

export default TextFieldBase