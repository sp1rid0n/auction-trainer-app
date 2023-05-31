import { Link } from 'react-router-dom'
import { FormField } from "../../components/form.field/FormField"
import { PrimaryButton } from "../../ui/primary.button/PrimaryButton"
import { PageKeys, navItems } from '../../navigation/nav.items'

export const RegistrationPage = () => {

    return (
        <div className="page-container">
            <div className="auth-form">
                <h1 className="auth-form__title">Регистрация</h1>
                <form className="auth-form__form">
                    <div 
                        className="auth-form__fields-container"
                    >
                        <FormField 
                            label='Логин'
                            containerClassName="auth-form__field"
                        />
                        <FormField 
                            label='Пароль'
                            containerClassName="auth-form__field"
                            type='password'
                        />
                        <FormField 
                            label='Повторите пароль'
                            containerClassName="auth-form__field"
                            type='password'
                        />
                    </div>
                    <div className="auth-form__buttons-container">
                        <PrimaryButton 
                            text="Регистрация" 
                            type="submit"
                            className="auth-form__button"
                        />
                        <Link 
                            to={navItems[PageKeys.SignIn]!.getPageUrl()}
                            className='link'
                        >
                            Вход
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}