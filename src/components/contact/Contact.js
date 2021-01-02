import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
    render() {
        return (
            <div className="row __margin lh-content">
                <div className="col-md-6">
                    <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.617755974432!2d106.65411361474405!3d10.76391396236798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752eec7a06c0ad%3A0x5cb6cda1f5e5e5ef!2zMTgyIEzDqiDEkOG6oWkgSMOgbmgsIFBoxrDhu51uZyAxNSwgUXXhuq1uIDExLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1596769218600!5m2!1svi!2s" width="100%" height="800px" frameBorder={0} style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} />
                    </div>
                </div>
                <div className="col-md-6 lh-right py-3">
                    <div className="lh-address">
                    <div className="lh-title ml-3">
                        <h1>Liên hệ</h1>
                        <hr />
                    </div>
                    <br />
                    <table>
                        <tbody><tr>
                            <td className="icon"><i className="fas fa-map-marker-alt" /></td>
                            <td className="text1 text-secondary ">Địa chỉ chúng tôi</td>
                        </tr>
                        <tr>
                            <td />
                            <td className="text2"><b>Tầng 4, tòa nhà Flemington, số 182, đường Lê Đại Hành, phường 15, quận 11, Tp. Hồ Chí <br />Minh.</b></td>
                        </tr>
                        <tr>
                            <td className="icon"><i className="far fa-envelope" /></td>
                            <td className="text1 text-secondary "> Email chúng tôi</td>
                        </tr>
                        <tr>
                            <td />
                            <td className="text2"><b>hi@haravan.com </b></td>
                        </tr>
                        <tr>
                            <td className="icon"><i className="fas fa-phone-alt" /></td>
                            <td className="text1 text-secondary "> Điện thoại</td>
                        </tr>
                        <tr>
                            <td />
                            <td className="text2"><b>1900.636.099 </b></td>
                        </tr>
                        <tr>
                            <td className="icon"><i className="far fa-calendar-alt" /></td>
                            <td className="text1 text-secondary "> Thời gian làm việc</td>
                        </tr>
                        <tr>
                            <td />
                            <td className="text2"><b>Thứ 2 đến Thứ 6 từ 8h đến 18h; Thứ 7 và Chủ nhật từ 8h00 đến 17h00</b></td>
                        </tr>
                        </tbody></table>
                    </div>
                    <div className="contact__info">
                    <div className="lh-title ml-3 my-4">
                        <h1>Gửi thắc mắc cho chúng tôi</h1>
                        <hr />
                    </div>
                    <br />
                    <div>
                        <input type="text" name="text" placeholder="Tên của bạn" className="ht" /><br /><br />
                        <div className="d-flex m__dt">
                        <input type="text" name="text" placeholder="Email" />
                        <input type="text" name="text" placeholder="Số điện thoại của bạn" className="ml-4" />
                        </div>
                        <br />
                        <textarea type="text" name="text" placeholder="Nội dung" cols={50} rows={5} defaultValue={""} />
                        <br />
                        <p className="terms">This site is protected by reCAPTCHA and the Google <a href="#">Privacy Policy</a> and <a href="#">Terms of Service </a> apply.</p>
                        <button className="btn btn-outline-primary">Gửi cho chúng tôi</button>
                    </div>
                    </div>
                </div>
                </div>
        );
    }
}

export default Contact;