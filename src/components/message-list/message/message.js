import classNames from 'classnames'
import styles from './message.module.css';


export const Message = ({message}) => {
    return(
    <div className={classNames(styles.message, {
        [styles.userMessage]: message.author === 'user',
        [styles.botMessage]: message.author === 'bot',

    })}>
        <h3>{message.author}</h3>
        <p>{message.message}</p>
        <br />
    </div>)
}