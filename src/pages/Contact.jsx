import React, { useState } from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Snackbar from '@mui/material/Snackbar';
import '../index.css';

const Contact = () => {

    const [data, setData] = useState({ name: '', email: '', subject: '', msg: '' });
    const [message, setMessage] = useState('');
    const [nameError, setName] = useState(false);
    const [emailError, setEmail] = useState(false);
    const [subjectError, setSubject] = useState(false);
    const [open, setOpen] = useState(false);
    const [msgError, setMsg] = useState(false);
    const vertical = 'bottom';
    const horizontal = 'center';
    const {
        name, email, subject, msg
    } = data;

    async function submit(e) {
        let isEmpty = false;
        if (name.length === 0) {
            setName(true);
            isEmpty = true;
        }
        if (email.length === 0) {
            setEmail(true);
            isEmpty = true;
        }
        if (subject.length === 0) {
            setSubject(true);
            isEmpty = true;
        }
        if (msg.length === 0) {
            setMsg(true);
            isEmpty = true;
        }

        e.preventDefault();
        if (!isEmpty) {
            let response = await fetch(`https://artrueinfotech.com/furniture/mail/mail.php?defaultFormContactNameEx=${data.name}&defaultFormContactEmailEx=${data.email}&defaultFormContactSubjectEx=${data.subject}&defaultFormContactMessageEx=${data.msg}`);
            response = await response.json();
            setMessage(response?.response[0]);
            setOpen(true);
            window.location.reload();
        }
    }

    function handle(e) {
        const newdata = { ...data };
        const value = e.target.value;
        if (value.length !== 0) {
            if (e.target.id === 'name' && nameError) {
                setName(false);
            }
            if (e.target.id === 'email' && emailError) {
                setEmail(false);
            }
            if (e.target.id === 'subject' && subjectError) {
                setSubject(false);
            }
            if (e.target.id === 'msg' && msgError) {
                setMsg(false);
            }
        }
        newdata[e.target.id] = value;
        setData(newdata);
    }


    return (
        <>
            <div style={{ background: '#000' }}>
                <MDBContainer style={{ padding: '50px 40px 50px 40px', color: '#fff' }}>
                    <MDBRow center="0">
                        {/* <MDBContainer style={{ padding: '30px' }}> */}
                        <MDBCol md="6">
                            <form>
                                <p className="h4 text-center mb-4" style={{ fontWeight: 'bold' }}>Contact Us</p>

                                <input type="text" id="name" className="form-control" placeholder='Enter Your Name' value={data.name} onChange={(e) => handle(e)} />
                                {nameError && <div style={{ color: 'white' }}>Please enter name!</div>}
                                <br />

                                <input type="email" id="email" className="form-control" placeholder='Enter Your Email' value={data.email} onChange={(e) => handle(e)} />
                                {emailError && <div style={{ color: 'white' }}>Please enter email!</div>}
                                <br />

                                <input type="text" id="subject" className="form-control" placeholder='Enter The Subject' value={data.subject} onChange={(e) => handle(e)} />
                                {subjectError && <div style={{ color: 'white' }}>Please enter subject!</div>}
                                <br />

                                <textarea type="text" id="msg" className="form-control" placeholder='Enter Your Message' rows="15" cols="90" style={{ height: '200px' }} value={data.msg} onChange={(e) => handle(e)} />
                                {msgError && <div style={{ color: 'white' }}>Please enter message!</div>}
                                <div className="text-center mt-4">
                                    <Button variant="contained" style={{ background: '#ea5e35' }} onClick={(e) => submit(e)} endIcon={<SendIcon />}>
                                        Send
                                    </Button>
                                </div>
                            </form>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>

                <div class="map-responsive">

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.8401559619074!2d72.87771671493626!3d21.23818618588538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f900a37cf4d%3A0xb08d4f8ef02e76bf!2sVarni%20Plaza!5e0!3m2!1sen!2sin!4v1645878582970!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy"></iframe>

                </div>
                <Snackbar
                    anchorOrigin={{ vertical, horizontal }}
                    open={open}
                    onClose={() => setOpen(false)}
                    message={message}
                    key={vertical + horizontal}
                    autoHideDuration={4000}
                />
            </div>
        </>
    )
}

export default Contact
