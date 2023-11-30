'use client'
import React, { useState } from 'react';
import { Client, Databases, ID } from 'appwrite';

const Contact = () => {
    const [formData, setFormData] = useState({
        Name: '',
        Email: '',
        Message: '',
    });
    const [message, setMessage] = useState({
        type: '',
        content: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const client = new Client()
            .setEndpoint('https://cloud.appwrite.io/v1')
            .setProject('65686ac6e7cacf6b3360'); // Replace with your Appwrite project ID

        const databases = new Databases(client);

        try {
            const response = await databases.createDocument(
                '65686b2f1c70523998cb', // Replace with your Appwrite database ID
                '65686b3f91213bea400b', // Replace with your collection ID
                ID.unique(),
                formData
            );
            
            setMessage({
                type: 'success',
                content: 'Form submitted successfully!',
            });
            console.log('Contact form submitted:', response);
            // You can add a success message or redirect the user to a thank-you page.
        } catch (error) {
            console.error('Error submitting contact form:', error);
            setMessage({
                type: 'error',
                content: 'Error submitting form. Please try again later.',
            });
            // Handle the error, e.g., show an error message to the user.
        }
    };

    const handleCloseMessage = () => {
        setMessage({
            type: '',
            content: '',
        });
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-blue-950 to-black">
            <div className="text-5xl text-center text-white items-center justify-center p-4 m-4 ">
                <div className="flex items-center justify-center">
                    <h1 className=" p-4 border-b-4 border-blue-800 text-white hover:border-white">Contact Me</h1>
                </div>
            </div>
            <div className="flex flex-col bg-white p-8 rounded-lg shadow-md md:w-full w-80">
            {message.type && (
                    <div className={`mt-4 p-4 bg-${message.type === 'success' ? 'green' : 'red'}-100 rounded-md relative`}>
                        <p className={`text-${message.type === 'success' ? 'green' : 'red'}-700`}>
                            {message.content}
                        </p>
                        <button
                            onClick={handleCloseMessage}
                            className="absolute top-0 right-0 p-2 cursor-pointer"
                        >
                            &#x2715;
                        </button>
                    </div>
                )}
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="Name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            id="Name"
                            name="Name"
                            value={formData.Name} // Add value attribute
                            onChange={handleChange} // Add onChange event handler
                            className="mt-1 p-2 w-full border rounded-md"
                            placeholder="Your Name"
                        />
                    </div>
                    <div>
                        <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="Email"
                            name="Email"
                            value={formData.Email} // Add value attribute
                            onChange={handleChange} // Add onChange event handler
                            className="mt-1 p-2 w-full border rounded-md"
                            placeholder="Your Email"
                        />
                    </div>
                    <div>
                        <label htmlFor="Message" className="block text-sm font-medium text-gray-700">
                            Message
                        </label>
                        <textarea
                            id="Message"
                            name="Message"
                            value={formData.Message} // Add value attribute
                            onChange={handleChange} // Add onChange event handler
                            rows="4"
                            className="mt-1 p-2 w-full border rounded-md"
                            placeholder="Your Message"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                    >
                        Send Message
                    </button>
                </form>
                
            </div>
        </div>
    );
};

export default Contact;
