export const OtpTemplate = async () => {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>OTP Email</title>

    <style>
      @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
      body {
        font-family: "Poppins", sans-serif;
        margin: 0%;
        padding: 0%;
        font-family: "Poppins", sans-serif;
      }
      .container {
        max-width: 400px;
        height: auto;
        border: 0.5px solid rgb(192, 191, 191);
        margin: 20px auto;
        border-radius: 10px;
        background-image: linear-gradient(
          to right top,
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
          #bdd1f6
        );
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
        padding: 0px 0px 0px 30px;
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
      .otp{
          margin: 0px 0px 0px 0px;
              font-size: 30px;
              font-weight: 600;
              color: #ba3d4f;
              padding:3px 5px 3px 5px;
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
        <h2 class="header_s">Verify Online Account</h2>
        <p>
          This OTP Valid Only 3 Days for <span
            style="font-size: 16px; color: rgb(104, 103, 103); font-weight: 500"
            >CNVMONEY</span
          > Online Account Activation.
          Once it's done you will be able to Online Transaction!
        </p>
      </section>
      <div class="middel-section">
        <div class="button-container">
          <p class="otp">123456</p>
        </div>
        <br />
      </div>
      <div class="social-icons">
        <a class="social-icon" href="https://www.youtube.com/@cnvmoney"
          ><img
            src="https://download-form-website.s3.ap-south-1.amazonaws.com/Website+Content/social/youtube.png"
            alt="Youtube"
        /></a>
        <a class="social-icon" href="https://www.instagram.com/cnvmoney"
          ><img
            src="https://download-form-website.s3.ap-south-1.amazonaws.com/Website+Content/social/instagram.png"
            alt="Instagram"
        /></a>
        <a class="social-icon" href="https://www.facebook.com/cnvmoney"
          ><img
            src="https://download-form-website.s3.ap-south-1.amazonaws.com/Website+Content/social/facebook.png"
            alt="Facebook"
        /></a>
        <a class="social-icon" href="https://www.linkedin.com/company/cnvmoney"
          ><img
            src="https://download-form-website.s3.ap-south-1.amazonaws.com/Website+Content/social/linkedin.png"
            alt="Linkedin"
        /></a>
      </div>
    </div>
  </body>
</html>
`;
};

export default OtpTemplate;
