export function RaceFormTextInput({ value, name, label, ...props }) {

    return (
        <>
            <label htmlFor={name}>{ label }</label>
            <input
                value={value}
                className="border p-2 rounded-sm"
                type="text"
                name={name}
                placeholder={label} />
        </>
    )
}
