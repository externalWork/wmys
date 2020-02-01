import React from 'react';
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
        <div className="top">
          <div className="container">
            <div className="row">
              <div className="col-7 d-flex align-items-center">
                <img className="phone_img" src="assets/image/phone@2x.png" alt=""/>
                <div>
                  <div className="join">加盟咨询热线</div>
                  <div className="contact">
                    联系人：李胜华<br/>联系电话：13738037181
                  </div>
                </div>
              </div>
              <div className="col-5 d-flex justify-content-center justify-content-lg-end">
                <div className="text-center">
                  <img className="qr_code" src="assets/image/qr_code@2x.png" alt=""/>
                  <div className="desc">扫一扫 关注公众号</div>
                </div>
              </div>
            </div>
          </div>

        </div>

      <div className="bottom text-center">
        <div className="container">
          杭州创胜生物科技有限公司  版权所有 淅ICP备14022040号-8
        </div>
      </div>
    </footer>
  );
}
