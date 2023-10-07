import classes from './Button.module.css' 

/* const Button =(props) => {
    return <button onClick={props.callback} style={{color:'red'}} >{props.label}</button>
}
export default Button */

const Button =(props) => {
    const {callback, label, color}=props
    return <button onClick={props.callback} style={{color:'red'}} >{props.label}</button>
}
export default Button

/* const Button = ({callback, label, color})=> {

    return <button onClick={props.callback} style={{color:'red'}} >{props.label}</button>
}
export default Button */