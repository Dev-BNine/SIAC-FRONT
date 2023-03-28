import { Link } from 'react-router-dom'

// UI
import { InputUI } from "../../UI/InputUI/InputUI";
import { ButtonUI } from '../../UI/ButtonUI/ButtonUI';


export const MainForgotPassword = () => {
    return (
        <main className='mainForgotPassword'>
            <form className='formResetPassword' action="">
                <Link to="/login" className='btnExit'>
                    Exit
                </Link>

                <h3>Enter Your Email Address.</h3>

                <InputUI style='inputEmail' typeInpt='email' textInpt='Correo electronico' />
                <ButtonUI typeBtn="submit" style="btnSendEmail" text="Enviar" />
            </form>
        </main>
    )
}
