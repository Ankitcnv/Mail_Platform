export const BirthDay = async (
  username: string,
  url?: string,
  heading: string,
  textarea: string
) => {
  return `<!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Birth Day Wishes</title>
    <style>
      @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
      @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Fasthand&display=swap');

      body,
      table,
      td,
      th {
        margin: 0;
        padding: 0;
        border-collapse: collapse;
        font-family: "Poppins", sans-serif;
        font-weight: 400;
        font-style: normal;
      }

      .container {
        max-width: 800px;
        max-height: auto;
        border-radius: 10px;
      
        margin: 10px auto;
        border: 0.5px solid rgb(212, 212, 212);

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

      .user {
        font-size: 14px;
        padding: 0px 15px 0px 25px;
        color: gray;
      }

      .details {
        font-size: 14px;
        padding: 0px 15px 0px 25px;
        color: gray;
        margin-top: -14px;
      }

      .profile {
        height: 2px;
        background-color: gray;
        max-width: 720px;
        padding: 0px 15px 0px 15px;
        margin: 0px auto;
      }

      span {
        font-size: 14px;
        padding: 5px 15px 5px 25px;
        color: gray;
      }

      .social-icons {
        margin-top: 20px;
        text-align: center;
        margin-bottom: 10px;
      }

      .social-icon {
        margin: 0 5px;
      }

      .social-icon img {
        width: 30px;
        height: 30px;
        gap: 10px;
      }

      .gift {
        position: absolute;
        max-width: 100px;
      }

      .content {
        text-align: center;
        margin-top:1rem;
      }

      .img-container {
        max-width: 200px;
        margin: 0px auto;
      }

      .img-container img {
        width: 100%;
      }

      .title {
        line-height: 3px;


      }

      .title1 {
        font-family: "Freehand", cursive;
        font-weight: 400;
       
        color: gray;
        font-size: 20px;
      }

      .title2 {
        font-family: "Freehand", cursive;
        font-weight: 400;
        
        color: gray;
         font-size: 18px;
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
      <div class="content">
          <p class="details">${heading}</p>

        <div class="img-container">
          <img src=${url} alt="">
          <div class="title">
            <p class="title1">HAPPY BIRTHDAY</p>
            <p class="title2">From cnvmoney</p>
          </div>
          <div class="" style="height: 2px; background-color: brown;"></div>
        </div>
        <p class="user">Hi ${username},</p>
        <p class="details">
          ${
            !textarea
              ? "May your day overflow with love, laughter, and blessings. Here's to another fantastic year ahead! Enjoy!"
              : textarea
          }

        </p>
        <span>- Team cnvmoney</span>
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

    </div>
    </div>
  </body>

</html>`;
};

export default BirthDay;
