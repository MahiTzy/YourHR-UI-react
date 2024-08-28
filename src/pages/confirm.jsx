import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Confirm = () => {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = 'Success';
        // Check registration status
        const registrationStatus = sessionStorage.getItem('registrationStatus');
        if (registrationStatus !== 'success') {
            // Redirect to home page or another page if not registered
            navigate('/');
        } else {
            // Clear the registration status from local storage
            setTimeout(()=> {
                sessionStorage.removeItem('registrationStatus');
                navigate('/');
            }, 5000);
        }
    }, [navigate]);

    return (
        <section className="vh-100 d-flex justify-content-center align-items-center" style={{ backgroundColor: "#2779e2" }}>
            <div className="container text-white text-center">
                <h1 className="display-4">Thank You!</h1>
                <p className="lead">Your form has been successfully submitted. We will review your information and get back to you soon.</p>
                <p>This page will automatically redirected to the home page after 5 seconds.</p>
            </div>
        </section>
    );
};

export default Confirm;
