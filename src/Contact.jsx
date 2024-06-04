import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";

const Contact = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        toast.success("Submitted successfully!", {
            position: "top-center",  
        });
    };

    return (
        <>
       

            <section className="bg-custom-bg-200 w-full flex flex-col items-center justify-center">
                <form action="#" method="post" className="bg-white p-10 rounded-2xl w-11/12 lg:w-4/6 my-20" onSubmit={handleSubmit}>
                    <h2 className="font-semibold text-3xl pb-10">Contact Us</h2>

                    <div className="flex flex-col lg:flex-row items-start justify-start w-full gap-3 pb-5">
                        <div className="w-full">
                            <p>First Name <span>*</span></p>
                            <input type="text" className="border outline-none text-xl border-solid border-gray-400 py-2 px-4 rounded-xl w-full" />
                        </div>
                        <div className="w-full">
                            <p>Last Name <span>*</span></p>
                            <input type="text" className="border outline-none text-xl border-solid border-gray-400 py-2 px-4 rounded-xl w-full" />
                        </div>
                    </div>

                    <div className="w-full pb-5">
                        <div className="flex flex-col items-start justify-start w-full">
                            <p>Email Address <span>*</span></p>
                            <div className="w-full border text-xl border-solid border-gray-400 py-2 px-4 rounded-xl">
                                <input type="text" className="w-full outline-none" />
                            </div>
                        </div>
                    </div>

                    <div className="w-full pb-5">
                        <p>Query type <span>*</span></p>
                        <div className="flex flex-col lg:flex-row gap-3 items-start justify-start">
                            <div className="w-full flex items-center gap-2 border text-xl border-solid border-gray-400 py-2 px-4 rounded-xl">
                                <input type="radio" name="group" className="w-5 h-5" />
                                <p className="text-base">General Enquiry</p>
                            </div>
                            <div className="w-full flex items-center gap-2 border text-xl border-solid border-gray-400 py-2 px-4 rounded-xl">
                                <input type="radio" name="group" className="w-5 h-5" />
                                <p className="text-base">General Enquiry</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full pb-5">
                        <p>Message *</p>
                        <textarea className="w-full flex items-center gap-2 outline-none resize-none h-32 border text-xl border-solid border-gray-400 py-2 px-4 rounded-xl"></textarea>
                    </div>

                    <div className="w-full flex items-center justify-start gap-4 py-10">
                        <input type="checkbox" className="align-middle" style={{ width: '1rem', height: '1rem' }} />
                        <p>I consent to being contacted by the term *</p>
                    </div>

                    <button type="submit" className="w-full py-5 text-black bg-custom-green-200 rounded-xl text-lg font-semibold hover:bg-white hover:text-custom-green-200">
                        Submit
                    </button>
                </form>
                <ToastContainer />
            </section>
        </>
    );
}

export default Contact;
