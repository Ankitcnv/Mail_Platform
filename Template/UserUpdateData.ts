export const UserUpdateData = async (data: any) => {
  return `<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>User Update Email</title>

        <style>
            @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

            body {
                font-family: "Poppins", sans-serif;
                margin: 0%;
                padding: 0%;
                font-family: "Poppins", sans-serif;
            }

            .container {
                max-width: 600px;
                height: auto;
                border: 0.5px solid rgb(192, 191, 191);
                margin: 20px auto;
                border-radius: 10px;
                background-image: linear-gradient(to right top,
                        #bdd1f6,
                        #cdd9f8,
                        #dbe1f9,
                        #e7e9fa,
                        #f2f2fc,
                        #f2f2fc,
                        #f2f2fc,
                        #f2f2fc,
                        #e7e9fa,
                        #dbe1f9,
                        #cdd9f8,
                        #bdd1f6);
            }

            .header {
                max-width: 100%;
                background-color: white;
                border-top-left-radius: 10px;
                border-top-right-radius: 10px;
            }

            .header img {
                width: 130px;
                padding: 12px 0px 10px 30px;
            }

            .section {
                padding: 0px 30px 0px 30px;
                font-family: "Poppins", sans-serif;
            }

            .button-container {
                margin: 0 auto;
                text-align: center;

                max-width: 250px;
                border-radius: 5px;
            }

            .header_s {
                font-weight: 600;
                color: black;
            }

            .section p {
                font-weight: 400;
                font-size: 14px;
                color: rgb(123, 129, 131);
            }

            .middel-section span {
                font-size: 11px;
                font-weight: 400;
                padding: 0px 30px 0px 30px;
                color: black;
            }

            .social-icons {
                margin-top: 10px;
                text-align: center;
                margin-bottom: 20px;
            }

            .social-icon {
                margin: 0 5px;
            }

            .social-icon img {
                width: 30px;
                height: 30px;
                gap: 10px;
            }

            .green-tick {
                max-width: 100px;
                margin: 0px auto;
            }

            .green-tick img {
                max-width: 100px;
            }

            .footer {
                background-color: rgb(51, 53, 52);
                padding: 2px;
                color: white;
                padding: 5px;
                text-align: center;
                border-bottom-left-radius: 10px;
                border-bottom-right-radius: 10px;
            }

            .footer p {
                font-size: 13px;
                line-height: 5px;
            }

            .footer span {
                font-size: 10px;
            }

            .address span {
                font-size: 10px;
            }

            .address {
                margin-top: -0.5rem;
            }
        </style>
    </head>

    <body>
        <div class="container">
        <div class="header">
         <a href="https://cnvmoney.com/">
            <img src="https://cnvmoney.com/_next/image?url=https%3A%2F%2Fdownload-form-website.s3.ap-south-1.amazonaws.com%2FWebsite%2BContent%2FCNVMONEY%2BLogo.png&w=256&q=75" alt="logo">
         </a>
        </div>
            <section class="section">
                <h2 class="header_s">Updated successfully</h2>
                <p>Dear ,</p>
                <p>
                    We are reaching out to inform you that we have successfully updated the contact information
                    associated with your mutual
                    fund account. Your email address and mobile number have been updated to ensure seamless
                    communication and to keep you
                    informed about your investments.
                </p>
            </section>
            <div class="middel-section">
                <div class="button-container">
                    <div class="green-tick">
                        <img class="" src="https://i.pinimg.com/originals/9b/0c/e2/9b0ce24333947d7d6dc8aec3102d9256.png"
                            alt="">
                    </div>
                    <p style="
              margin: 0px 0px 0px 0px;
              font-size: 20px;
              font-weight: 600;
              color: #ba3d4f;
            ">
                        demo@gmail.com
                    </p>
                    <p style="
                                      margin: 0px 0px 0px 0px;
                                      font-size: 20px;
                                      font-weight: 600;
                                      color: #ba3d4f;
                                    ">
                        +91 78788 89991
                    </p>
                </div>
                <br />
            </div>
            <div class="social-icons">
                <a class="social-icon" href="https://www.youtube.com/@cnvmoney"><img
                        src="https://download-form-website.s3.ap-south-1.amazonaws.com/Website+Content/social/youtube.png"
                        alt="Youtube" /></a>
                <a class="social-icon" href="https://www.instagram.com/cnvmoney"><img
                        src="https://download-form-website.s3.ap-south-1.amazonaws.com/Website+Content/social/instagram.png"
                        alt="Instagram" /></a>
                <a class="social-icon" href="https://www.facebook.com/cnvmoney"><img
                        src="https://download-form-website.s3.ap-south-1.amazonaws.com/Website+Content/social/facebook.png"
                        alt="Facebook" /></a>
                <a class="social-icon" href="https://www.linkedin.com/company/cnvmoney"><img
                        src="https://download-form-website.s3.ap-south-1.amazonaws.com/Website+Content/social/linkedin.png"
                        alt="Linkedin" /></a>
            </div>
            <div class="footer">
                <p style="font-size: 10px">CNVMONEY FinTech Private Limited.</p>
                <p style="font-size: 10px">CIN No : U66120MH2023PTC413186</p>
                <div class="address">
                    <span>
                        Address : B-207, Gopal Bldg,. Ambadi Road, Opp-60 Feet Road, Vasai
                        West, Thane, Maharashtra-401202
                    </span>
                </div>
                <div class="address">
                    <p class="" style="font-size: 10px">Contact No : 880 660 4430</p>
                    <p class="" style="font-size: 10px">Email : kyc@cnvmoney.com</p>
                </div>
            </div>
        </div>
    </body>

</html>`;
};

export default UserUpdateData;
