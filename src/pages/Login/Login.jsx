import { useContext, useEffect,  useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import SocialLogin from '../../components/SocialLogin/SocialLogin';
import loginImg from '../../assets/login.svg'

const Login = () => {

   
    const [disabled, setDisabled] = useState(true);

    const { signIn } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

     console.log('state in the location login page', location.state)

    


    useEffect(() => {
        loadCaptchaEnginge(3);
    }, [])
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
    }

    const handleValidateCaptcha = (e) => {
        const user_captchar_value = e.target.value;
        if (validateCaptcha(user_captchar_value)) {
            setDisabled(false)
        }
        else {
            setDisabled(true)
        }
    }
    return (
        <>
            <Helmet>
                <title>DP Tourist Guide | Log in</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col gap-4 lg:flex-row-reverse">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold py-4">Login now!</h1>
                        <img src={loginImg} alt="" />
                    </div>
                    <div className="card  w-full md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"
                                    name="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"
                                    name="password" placeholder="password" className="input input-bordered" required />
                                
                            </div>
                            <div className="form-control">   
                                <label className="label">
                                    <LoadCanvasTemplate></LoadCanvasTemplate>
                                </label>
                                <input  onBlur={handleValidateCaptcha} type="text" 
                                    name="captcha" placeholder="type the text above" className="input input-bordered" />
                                
                            </div>
                            <div className="form-control mt-6">

                                <input disabled={disabled} type="submit" className="btn btn-primary" value='Login' />
                            </div>
                        </form>

                        <p className="text-center mb-4 px-6"> <small className='text-yellow-600'>New Here? <Link to="/signup" className='font-bold text-xl text-yellow-700'>Create an account</Link> </small></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div></>

    );
};

export default Login;