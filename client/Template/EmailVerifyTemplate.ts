export const EmailVerifyTemplate = async (username: any) => {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Email Verification</title>

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
        padding: 0px 30px 0px 30px;
          font-family: "Poppins", sans-serif;
      }
     .button-container {
        max-width: 340px;
        margin: 0px 30px 2px 30px;
        background-color: #007bff;
        text-align: center;
        border-radius: 5px;
        padding: 8px 0px 8px 0px;
      }
      .link-btn {
        background-color: transparent;
        border: none;
        padding: 12px 0px 12px 0px;
        font-weight: 500;
        font-family: "Poppins", sans-serif;
        color: white;
        font-size: 15px;
        cursor: pointer;
      }
      .button-container a {
        text-decoration: none;
        color:white;
      }
      .ii a[href] {
    color: white;
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
      .link {
        padding: 0px 30px 0px 30px;
      }
      .link a p {
        font-size: 10px;
        font-weight: 500;
        color: #007bff;
        text-wrap: wrap;
        cursor: pointer;
        text-decoration: underline;
      }
      a {
        color: #007bff;
      }

      .social-icons {
        margin-top: 20px;
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
        <h2 class="header_s">Verify Your Email</h2>
        <p>
          Hi ${username}! Use the link below to verify your email and start enjoying
          services
        </p>
      </section>
      <div class="middel-section">
        <div class="button-container">
             <a class="link-btn" href="http://localhost:3000/auth/login"
            >Verify Email</a
          >
        </div>
        <span>our past this link into your browser</span>
        <br />
        <div class="link">
          <a href=""
            ><p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. ebfiw
              iwhevi ihvbjowe jsdcwir4
            </p>
          </a>
        </div>
      </div>
      <div class="social-icons">
        <a class="social-icon" href="https://www.youtube.com/@cnvmoney"
          ><img src="https://download-form-website.s3.ap-south-1.amazonaws.com/Website+Content/social/youtube.png" alt="Youtube"
        /></a>
         <a class="social-icon" href="https://www.instagram.com/cnvmoney"
           ><img src="https://download-form-website.s3.ap-south-1.amazonaws.com/Website+Content/social/instagram.png" alt="Instagram"
         /></a>
         <a class="social-icon" href="https://www.facebook.com/cnvmoney"
           ><img src="https://download-form-website.s3.ap-south-1.amazonaws.com/Website+Content/social/facebook.png" alt="Facebook"
         /></a>
         <a class="social-icon" href="https://www.linkedin.com/company/cnvmoney"
           ><img src="https://download-form-website.s3.ap-south-1.amazonaws.com/Website+Content/social/linkedin.png" alt="Linkedin"
         /></a>
      </div>
    </div>
  </body>
</html>
`;
};

export default EmailVerifyTemplate;
