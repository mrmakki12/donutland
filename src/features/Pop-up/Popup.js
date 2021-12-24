import './popup.css';

export const Popup = (props) => {

    const { display, setDisplay } = props;

    return (
        <div className='popup-container' style={{display: display}}>
            <div className='order-complete-header'>
                <h1>ORDER COMPLETE!</h1>
            </div>
            <div className='message'>
                <p>Thanks for your order!
                    The best donut makers in the world are now preparing 
                    your order and it should be ready soon, so get in your car 
                    and come pick them up! We can't wait to meet you!
                </p>
            </div>
            <div className='close'>
                <button className='close-button' onClick={ () => setDisplay('none')}>
                    CLOSE.
                </button>
            </div>
        </div>
    )
}
