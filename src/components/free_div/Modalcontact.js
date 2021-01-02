import React, { Component } from 'react';
import classNames from 'classnames';
import './Modalcontact.css';

class Modalcontact extends Component {
    render() {
        const $=document.querySelector.bind(document);
        function closeModal(e) {
            if (e.target.classList.contains('modalcontact')||e.target.classList.contains('close')) {
                $('.modal_content').classList.remove('modal_show');
                $('.modalcontact').classList.remove('modal_bg');
                setTimeout(()=> {
                    $('.modalcontact').classList.remove('modalcontact_show');
                    document.body.classList.remove('oh_y');
                    document.body.style.paddingRight=0;
                },300) 
            }
        }
        return (
            <div className={classNames('modalcontact')} onClick={(e)=>closeModal(e)}>
                <div className={classNames('modal_content','rounded')}>
                    <div className="modal_header">
                        <button type="button" className="close" data-dismiss="modal" onClick={(e)=>closeModal(e)}>×</button>
                        <h5 className="modal_title text-center m-0">Để lại lời nhắn cho chúng tôi</h5>
                    </div>
                    <hr className="mt-0" />
                    <div className="modal_body">
                        <form acceptCharset="UTF-8" action="/contact" className="modal_form" method="post">
                            <input name="form_type" type="hidden" defaultValue="contact" />
                            <input name="utf8" type="hidden" defaultValue="✓" />
                            <div className="row mx-0">
                                <div className="col-12">
                                    <div className="input_group">
                                        <input required type="text" className="form-control" id="yourname" name="contact[name]" placeholder="Tên của bạn" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="input_group">
                                        <input required type="email" className="form-control" id="youremail" name="contact[email]" placeholder="Email của bạn" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="input_group">
                                        <input required pattern="\+?\(?\d{2,4}\)?[\d\s-]{3,}" maxLength={12} type="text" id="yourphone" name="contact[phone]" className="form-control" placeholder="Số điện thoại của bạn" aria-label="phone" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="input_group">
                                        <textarea required placeholder="Nội dung" className="form-control" id="yourinfor" name="contact[body]" defaultValue={""} />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="input_group">
                                        <div className="recaptcha">
                                            This site is protected by reCAPTCHA and the Google
                                            <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer"> Privacy Policy </a> 
                                            and <a href="https://policies.google.com/terms" target="_blank" rel="noreferrer">Terms of Service</a> apply.
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 d-flex justify-content-center"><button type="submit" className="button">Gửi cho chúng tôi</button></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modalcontact;