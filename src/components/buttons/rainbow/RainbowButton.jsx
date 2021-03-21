import './rainbow-button.css'

const Rainbow = ({rainbowType = 1, children, ...props}) => {
    return (<a className={`rainbow-button rainbow-${rainbowType}`} {...props}>
        {children}
    </a>)
}

export default Rainbow
