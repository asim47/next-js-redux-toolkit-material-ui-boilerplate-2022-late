import { useEffect } from "react"

const DialogWrapper = props => {

    useEffect(() => {
        if (props.isOpen) {
            document.body.style.overflowY = "hidden"
        }
        return () => {
            document.body.style.overflowY = "scroll"
        }
    }, [])

    return (
        <div
            onClick={(e) => {
                e.stopPropagation();
                props.onClose()
            }}
            style={{
                position: "fixed",
                top: "0",
                left: "0",
                height: "100vh",
                width: "100vw",
                backgroundColor: "rgba(0,0,0,0.2)",
                zIndex: "411111111111111111",
                display: props.isOpen ? "flex" : "none",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
            }} >
            {/* <div
                onClick={(e) => {
                    e.stopPropagation();
                }}
                style={{ height: "auto", width: "auto", }}
            > */}
                {props.children}
            {/* </div> */}
        </div >
    )
}

export default DialogWrapper