function CustomBtn(props) {
    return (
        <div>
            <button
            style={{backgroundColor: 'yellow', height: 50, width: 100}}>
                {props.title}
            </button>
        </div>
    )
    
}
export default CustomBtn