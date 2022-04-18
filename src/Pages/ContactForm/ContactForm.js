import React from 'react';
import "./ContactForm.css";
import { useForm } from "react-hook-form";
import { useEffect, useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
    const { register, handleSubmit, reset } = useForm();

    const [contactFormContent, setContactFormContent] = useState([])
    // console.log(contactFormContent)
    useEffect(() => {
        fetch('https://danapori.techsistltd.com/home_details/')
            .then(res => res.json())
            .then(data => setContactFormContent(data.data.message_us))
    }, [])



    const onSubmit = data => {
        console.log(data);
        axios.post('https://danapori.techsistltd.com/drop_message/', data)
            .then(res => {
                if (res.data) {
                    alert('added succesfully')
                    reset();
                }
            })
    }
    return (
        <div className='container-fluid contactForm-bg  p-2 '>

            <div className='container contactForm-background '>
                <h2 className='contactForm-title  text-center mt-3 '>{contactFormContent.title}?</h2>
                <p className='text-center contactForm-description '>{contactFormContent.description}</p>
                <form className='' onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col">
                            <input type="text" className="form-control input-area p-2" {...register("yourName", { required: true })} placeholder="Your Name" />
                            {/* <input type="text" className="form-control" placeholder="Your Name" required aria-label="Your Name" /> */}
                        </div>
                        <div className="col">
                            <input type="email" className="form-control input-area p-2" {...register("email", { required: true })} placeholder="Email" />
                        </div>
                        <br />
                        <br />


                    </div>
                    <div className="row">
                        <div className="col">
                            {/* <select class="form-select" aria-label="Default select example" required>
                            <option selected>Reasoning for Contracting</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select> */}

                            <select class="form-select input-area p-2" {...register("reasonForContract", { required: true })}>
                                <option value="female">Reason for Contracting</option>
                                <option value="male">male</option>
                                <option value="other">other</option>
                            </select>
                        </div>
                        <div className="col">
                            <input type="number" className="form-control input-area p-2" {...register("phone", { required: true })} placeholder="Phone" />
                        </div>
                        <br />
                        <br />


                    </div>
                    <div className='row'>
                        <div className='col'>
                            <textarea class="form-control input-area p-2" id="exampleFormControlTextarea1" rows="3" placeholder='Message'{...register("message", { required: true })}></textarea>
                        </div>
                    </div>
                    <br />

                    <div className='row'>
                        <div className='col text-center'>
                            {/* <button className='w-50  text-white contactForm-button p-1 '>Submit</button> */}
                            <input className='w-50  text-white contactForm-button p-2 ' type="submit" />
                        </div>

                    </div>
                </form>




            </div>




        </div>
    );
};

export default ContactForm;