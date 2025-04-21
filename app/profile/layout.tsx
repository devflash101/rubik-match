export default function ProfileLayout(props: {
    children : React.ReactNode,
    settings : React.ReactNode
}) {
    return (
        <>
            {props.children}
            {props.settings}
            <div id="modal-root" />
        </>
    )
};