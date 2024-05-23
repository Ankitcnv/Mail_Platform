export const Redemption = async (username: any) => {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Redemption Email</title>
    <style>
      @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
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
      table {
        font-size: 12px;
        margin: 0px auto;
        width:95%;
      }
      
      th {
        background-color: rgb(189, 186, 186);
      }

      tr,
      th,
      td {
        border: 0.5px solid black;
        text-align: center;
        padding: 2px;
      }
      th {
        font-weight: 600;
      }
      td {
        font-weight: 400;
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
        color: black;
        padding: 5px 15px 5px 25px;
            font-family: "Poppins", sans-serif;
      }
      .details {
        font-size: 12px;
        padding: 5px 15px 0px 25px;
            font-family: "Poppins", sans-serif;
      }
      .profile {
        height: 2px;
        background-color: gray;
        max-width: 720px;
        padding: 0px 15px 0px 15px;
        margin: 0px auto;
            font-family: "Poppins", sans-serif;
      }
      span {
        font-size: 12px;
        padding: 5px 15px 5px 25px;
      }
      .social-icons {
        margin-top: 20px;
        text-align: center;
        margin-bottom:10px;
      }

      .social-icon {
        margin: 0 5px;
      }

      .social-icon img {
        width: 30px;
        height: 30px;
        gap: 10px;
      }
      .table-container {
        margin-top: 1rem;
        width:100%
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
      <div class="middle"></div>

      <div class="content">
        <p class="user">Dear ${username},</p>
        <p class="details">We hope this email finds you well.</p>
        <p class="details">
    We are writing to confirm the successful completion of your recent Redemption transaction. Below are the details of the transaction for your reference:
        </p>
        <div class="profile"></div>

        <div class="table-container">
          <table class="table">
            <tr>
              <th>Transaction Date</th>
              <th>Time</th>
              <th>Folio No</th>
              <th>Scheme Name</th>
              <th>Amount</th>
              <th>Transaction ID</th>
            </tr>
            <tr>
              <td>Transaction Date</td>
              <td>Time</td>
              <td>16362635/12</td>
              <td>Name of the Mutual Fund</td>
              <td>Transaction Amount</td>
              <td>Transaction ID</td>
            </tr>
          </table>
        </div>
        <br>
        <span>Regards,</span>
        <br />
        <span>Team cnvmoney</span>
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
    </div>
  </body>
</html>

`;
};

export default Redemption;
