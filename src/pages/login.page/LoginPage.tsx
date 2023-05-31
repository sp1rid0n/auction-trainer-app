import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { FormField } from '../../components/form.field/FormField'
import { PrimaryButton } from '../../ui/primary.button/PrimaryButton'
import { PageKeys, pagesLink } from '../../navigation/nav.items'

export const LoginPage = () => {

    const { values, errors } = useFormik({
        initialValues: {
            login: "",
            password: "",
        },
        onSubmit: (values) => {
            console.log(values)
        }
    })
    
    return (
        <div className="page-container">
            <div className="auth-form">
                <h1 className="auth-form__title">Вход</h1>
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
                    </div>
                    <div className="auth-form__buttons-container">
                        <PrimaryButton 
                            text="Вход" 
                            type="submit"
                            className="auth-form__button"
                        />
                        <Link 
                            to={pagesLink[PageKeys.SignUp]}
                            className='link'
                        >
                            Регистрация
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
}