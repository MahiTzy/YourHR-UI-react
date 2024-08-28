import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveUser } from "../service/userService";

const Signup = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
    });
    const [file, setFile] = useState(null);
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        phone: "",
        file: "",
    });

    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Signup";
    }, []);

    const validateForm = () => {
        const newErrors = { name: "", email: "", phone: "", file: "" };
        let isValid = true;

        // Validate name
        if (!user.name) {
            newErrors.name = "Full name is required.";
            isValid = false;
        }

        // Validate email
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!user.email || !emailPattern.test(user.email)) {
            newErrors.email = "Valid email address is required.";
            isValid = false;
        }

        // Validate phone
        const phonePattern = /^\d{10}$/;
        if (!user.phone || !phonePattern.test(user.phone)) {
            newErrors.phone = "Phone number should be 10 digits.";
            isValid = false;
        }

        // Validate file
        if (!file) {
            newErrors.file = "File is required.";
            isValid = false;
        } else if (file.size > 5 * 1024 * 1024) {
            newErrors.file = "File size exceeds 5 MB.";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleClick = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        const formData = new FormData();
        formData.append('name', user.name);
        formData.append('email', user.email);
        formData.append('phone', user.phone);
        if (file) {
            formData.append('resume', file);
        }

        await saveUser(formData);
        sessionStorage.setItem('registrationStatus', 'success');
        navigate('/confirm');
    };

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    return (
        <section className="min-vh-100 py-5" style={{ backgroundColor: "#2779e2" }}>
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-xl-9">

                        <div className="card" style={{ borderRadius: "15px" }}>
                            <div className="card-body">
                                <form onSubmit={handleClick} encType="multipart/form-data">
                                    <div className="row align-items-center pt-4 pb-3">
                                        <div className="col-md-3 ps-5">
                                            <h6 className="mb-0">Full name</h6>
                                        </div>
                                        <div className="col-md-9 pe-5">
                                            <input
                                                onChange={handleChange}
                                                name="name"
                                                type="text"
                                                className="form-control form-control-lg"
                                                placeholder="John Doe"
                                            />
                                            {errors.name && <div className="text-danger">{errors.name}</div>}
                                        </div>
                                    </div>
                                    <hr className="mx-n3" />
                                    <div className="row align-items-center py-3">
                                        <div className="col-md-3 ps-5">
                                            <h6 className="mb-0">Email address</h6>
                                        </div>
                                        <div className="col-md-9 pe-5">
                                            <input
                                                onChange={handleChange}
                                                name="email"
                                                type="email"
                                                className="form-control form-control-lg"
                                                placeholder="example@example.com"
                                            />
                                            {errors.email && <div className="text-danger">{errors.email}</div>}
                                        </div>
                                    </div>
                                    <hr className="mx-n3" />
                                    <div className="row align-items-center py-3">
                                        <div className="col-md-3 ps-5">
                                            <h6 className="mb-0">Phone number</h6>
                                        </div>
                                        <div className="col-md-9 pe-5">
                                            <input
                                                onChange={handleChange}
                                                name="phone"
                                                type="tel"
                                                className="form-control form-control-lg"
                                                placeholder="1234567890"
                                            />
                                            {errors.phone && <div className="text-danger">{errors.phone}</div>}
                                        </div>
                                    </div>
                                    <hr className="mx-n3" />
                                    <div className="row align-items-center py-3">
                                        <div className="col-md-3 ps-5">
                                            <h6 className="mb-0">Upload CV</h6>
                                        </div>
                                        <div className="col-md-9 pe-5">
                                            <input
                                                onChange={handleFileChange}
                                                name="resume"
                                                className="form-control form-control-lg"
                                                id="formFileLg"
                                                type="file"
                                            />
                                            <div className="small text-muted mt-2">
                                                Upload your CV/Resume or any other relevant file. Max file size 5 MB
                                            </div>
                                            {errors.file && <div className="text-danger">{errors.file}</div>}
                                        </div>
                                    </div>
                                    <hr className="mx-n3" />
                                    <div className="px-5 py-4">
                                        <button
                                            type="submit"
                                            data-mdb-button-init
                                            data-mdb-ripple-init
                                            className="btn btn-primary btn-lg"
                                        >
                                            Send application
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Signup;
