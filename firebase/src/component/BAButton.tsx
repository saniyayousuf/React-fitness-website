type Btntype = {

    onClick: any,
    label: string
}


export default function BAButton(props: Btntype) {
    const { label, onClick } = props

    return <>
        <button
            onClick={onClick}
            className="rounded-full bg-yellow-400 px-5 py-1 m-0"
        >
            {label}
        </button>
    </>
}