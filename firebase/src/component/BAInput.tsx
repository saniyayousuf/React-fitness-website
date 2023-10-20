type propstype = {

    label: string,
    onChange?: any,
    value?: any,
    type?: string
}


export default function BAInput(props: propstype) {
    const { label, onChange, value, type } = props
    return <>

        <input
            className="w-full p-3 outline-none rounded  
     focus:border-teal-100"
            placeholder={label}
            value={value}
            onChange={onChange}
            type={type ?? "text"} />

    </>
}