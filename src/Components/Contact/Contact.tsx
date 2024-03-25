import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ContactProps {
    mainHeadingStyles: React.CSSProperties;
    showNav: boolean;
}

const Contact: React.FC<ContactProps> = ({ mainHeadingStyles, showNav }) => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        message: ''
    })

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: "83f699bd-3505-4eca-9174-9fbf4e3b9b9f",
                name: e.target.name.value,
                email: e.target.email.value,
                message: e.target.message.value,
            }),
        });
        const result = await response.json();
        if (result.success) {
            setFormData({
                name: '',
                email: '',
                message: ''
            })
            toast.success('Thanks to reach me!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                theme: "dark"
            });
        } else {
            toast.error('Error submitting the form!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                theme: "dark"
            });
        }
    }

    const handleValueChange = (e: any) => {
        const { name, value } = e.target;

        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    return (
        <main id="Contact" className={`w-full overflow-hidden ${showNav ? 'blur' : ''} pb-10 pt-14`}>
            <ToastContainer />
            <div className='w-full flex flex-col items-center justify-center gap-8'>
                <div className="w-2/3 flex items-center justify-center gap-5">
                    <div className='w-1/3 h-0.5 bg-white/80'></div>
                    <p className='text-white font-bold text-[35px] tracking-[2px] uppercase text-center' style={mainHeadingStyles}>Wanna Reach Me?</p>
                    <div className='w-1/3 h-0.5 bg-white/80'></div>
                </div>
            </div>
            <div className='w-full md:w-1/2 px-6 lg:px-0 m-auto mt-14'>
                <p className='text-gray-200 text-center py-4 text-lg'>Please feel free to share anything you'd like to collaborate on, contribute to, or connect with me about. Don't hesitate to submit the form below!</p>
                <form onSubmit={handleSubmit} className='space-y-3 pt-6'>
                    <div>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your good name!"
                            className='w-full px-2 py-3 bg-transparent text-gray-200 border border-gray-300 rounded'
                            value={formData.name}
                            required
                            onChange={handleValueChange}
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email!"
                            className='w-full px-2 py-3 bg-transparent text-gray-200 border border-gray-300 rounded'
                            value={formData.email}
                            required
                            onChange={handleValueChange}
                        />
                    </div>
                    <div>
                        <textarea
                            name="message"
                            rows={6}
                            placeholder="Enter Message!"
                            className='w-full px-2 py-3 bg-transparent text-gray-200 border border-gray-300 rounded'
                            value={formData.message}
                            required
                            onChange={handleValueChange}
                        ></textarea>
                    </div>
                    <button type="submit" className='text-gray-300 bg-[#393838] border-2 border-gray-300 px-4 py-2 rounded font-medium hover:border-transparent hover:bg-gray-200 hover:text-black'>Submit</button>
                </form>
            </div>
        </main>
    )
}

export default Contact;