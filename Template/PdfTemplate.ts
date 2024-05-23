

export const PdfTemplate = async ( data:any) => {
    return `<!DOCTYPE html>
    <html lang="en">
    
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
    
                body {
                    margin: 0%;
                    padding: 0%;
                    font-family: "Poppins", sans-serif;
                    font-style: normal;
                }
    
                .container {
                    width: 788px;
                    height: 1115px;
                    margin: 3px auto;
    
                    position: relative;
                }
    
                .main-header {
                    width: 100%;
    
                    border-bottom: 0.5px solid #e21c1c;
    
                }
    
                .header {
                    width: 100%;
                    background-color: white;
                    border-top-left-radius: 70px;
    
                }
    
                .header img {
                    width: 130px;
                    margin: 12px 0px 10px 30px;
    
                }
    
                div span {
                    font-weight: 500;
                    font-size: 12px;
                    padding-right:5px;
    
                }
    
                span label {
                    text-decoration: none;
                    position: relative;
                    font-weight: 300;
                    color: black;
                    
                }
    
                span label::after {
                    content: '';
                    position: absolute;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    border-bottom: 0.1px solid rgb(49, 49, 49);
                
                }
    
                .unicode {
                    width: 70%;
                    padding: 10px;
                    margin: 10px auto;
                }
    
                .unicode-left {
                    font-size: 12px;
                }
    
                .unicode-right {
                    float: right;
                    margin-top: -3.2rem;
                    border-radius: 10px;
                    text-align: center;
                    color: gray;
    
                    font-size: 12px;
                    border: 0.5px solid rgb(221, 221, 221);
                    padding: 10px;
                }
    
                .unicode-right span {
                    font-weight: 300;
                }
    
                .form_header {
                    width: auto;
                    background-color: rgb(86, 142, 245);
                    padding: 2px;
                    margin-bottom: 0.5rem;
                }
    
    
                .detail1 {
                    margin: 0px 30px 0px 30px;
                }
    
                .user-details {
                    margin-bottom: 0.5rem;
                }
    
                .details2 {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
    
                .footer {
                    position: absolute;
                    width: 100%;
                    bottom: 4%;
    
                }
    
                .red-line {
                    background-color: #e21c1c;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                    height: 12px;
                }
    
                .blue-line {
                    background-color: #0143a2;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin-top: 2rem;
                    width: 100%;
                    height: 12px;
    
                }
    
                .footer-name {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background-color: white;
                    font-size: 20px;
                    letter-spacing: 2px;
                    padding-left: 5px;
                    padding-bottom: 10px;
                    padding-top: 10px;
                    margin-top: -1px;
                    font-weight: 400;
                    padding-right: 2px;
                    color: rgb(97, 95, 95);
    
                }
    
                .other-details {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                }
    
                .other-checkbox {
                    width: 400px;
    
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                }
    
                .other-checkbox span {
                    padding: 5px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-weight: 400;
                }
    
                .signature {
                    margin: 20px 30px 0px 30px;
                }
    
                .signature p {
                    font-weight: 300;
                    font-size: 12px;
                    margin: 0%;
    
                }
    
                .signature-container {
                    width: 230px;
                    height: 110px;
                    background-color: rgb(223, 222, 222);
                    display: flex;
                    border: 0.5px solid gray;
                    align-items: center;
                    flex-direction: column;
                    margin-top: 5px;
                }
    
                .signature-photo {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
    
                }
    
                .signature-img {
                    margin-top: 1.3px;
                    background-color: rgb(221, 221, 221);
                    width: 230px;
                    height: 90px;
                }
    
                .signature img {
                    width: 230px;
                    height: 90px;
                    object-fit: cover;
                    background-repeat: no-repeat;
                    background-size: cover;
                }
    
                .cheque {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin: 25px auto;
                    border: 0.5px solid gray;
                    width: 550px;
                    height: 220px;
                }
    
                .cheque span {
                    width: 100%;
                    text-align: center;
                    background-color: gray;
                }
    
                .cheque-img {
                    width: 550px;
                    height: 200px;
                    background-color: rgb(221, 221, 221);
                }
    
                .cheque-img img {
                    width: 100%;
                    height: 200px;
                }
            </style>
        </head>
    
        <body>
            <div class="container">
                <div class="main-header" style="background-color: #0143a2;">
                    <div class="header">
                        <a href="https://cnvmoney.com/">
                            <img src="https://cnvmoney.com/_next/image?url=https%3A%2F%2Fdownload-form-website.s3.ap-south-1.amazonaws.com%2FWebsite%2BContent%2FCNVMONEY%2BLogo.png&w=256&q=75"
                                alt="logo">
                        </a>
                    </div>
                </div>
                <div class="unicode">
                    <div class="unicode-left"><span>UNICODE CLIENT CODE: <label>${data.ucc_code}</label></span><br>
                        <span>PAN NO: <label>${data.PAN}</label></span>
                    </div>
                    <div class="unicode-right"><span>ARN-114773</span>
                        <br><span>CREDIT AND VAULT FINANCIAL SERVICES</span>
                    </div>
                </div>
                <div>
                    <div class="form_header">
                        <span style="margin-left: 30px;">FIRST APPLICANT DETAILS</span>
                    </div>
                    <div class="user-details">
                        <div class="detail1">
                            <span>Name: <label>${data.First_Name!==null ? data.First_Name:""}&nbsp;${data.Middle_Name}&nbsp;${data.Last_Name}</label></span><span
                                style="float: inline-end;">KYC: <label></label></span>
                            <br><span>PAN NO: <label>${data.PAN}</label></span><span
                                style="float: inline-end;">D.O.B: <label>${data.DOB!=="Invalid Date"?data.DOB:""}</label></span><br><span>Gurdian
                                Name: <label>${data.Guardian_First_Name!==null?data.Guardian_First_Name:""} ${data.Guardian_Middle_Name!==null? data.Guardian_Middle_Name:""}</label></span><span
                                style="float: inline-end;">Gurdian PAN NO: <label>${data.Guardian_PAN!==null? data.Guardian_PAN:""}</label></span>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="form_header">
                        <span style="margin-left: 30px;">SECOND APPLICANT DETAILS</span>
                    </div>
                    <div class="user-details">
                        <div class="detail1">
                            <span>Name: <label></label>${data.Joint_Name1}</span>
                            <br><span>PAN NO: <label>${data.Joint_PAN1}</label></span><span
                                style="float: inline-end;">D.O.B: <label>${data.Joint_DOB1!=="Invalid Date"? data.Joint_DOB1:""}</label></span><br><span>Email: <label></label></span><span
                                style="float: inline-end;">Mobile: <label>${ data.Joint_Mobile1}</label></span>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="form_header">
                        <span style="margin-left: 30px;">THIRD APPLICANT DETAILS</span>
                    </div>
                    <div class="user-details">
                        <div class="detail1">
                            <span>Name: <label>${data.Joint_Name2}</label></span>
                            <br><span>PAN NO: <label>${data.Joint_PAN2}</label></span><span
                                style="float: inline-end;">D.O.B: <label>${data.Joint_DOB2!=="Invalid Date"? data.Joint_DOB2:""}</label></span><br><span>Email: <label></label></span><span
                                style="float: inline-end;">Mobile: <label>${data.Joint_Mobile2}</label></span>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="form_header">
                        <span style="margin-left: 30px;">CONTACT DETAILS</span>
                    </div>
                    <div class="user-details">
                        <div class="detail1">
                            <span>Address: <label>${data.Add1} ${data.Add2} ${data.Add3}</label></span>
                            <br>
                            <div class="details2">
                                <span>City: <label>${data.city}</label></span>
                                <span>Pincode: <label>${data.pincode}</label></span>
                                <span>State: <label>${data.State}</label></span>
                            </div>
                            <div class="details2">
                                <span>Country: <label>${data.Country}</label></span>
                                <span>Email: <label>${data.Email_Id}</label></span>
                                <span>Mobile: <label>${data.Mobile}</label></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="form_header">
                        <span style="margin-left: 30px;">NOMINEE DETAILS</span>
                    </div>
                    <div class="user-details">
                        <div class="detail1" style="line-height: 18px;">
                            <span>Name OF 1st Nominee: <label>${data.Nominee_Name1}</label></span><span
                                style="float: inline-end;">% OF
                                Allocation:
                                <label>${data.Nominee_Percentage1!==0?data.Nominee_Percentage1:""}</label></span><br><span>Nominee
                                PAN: <label>${data.Nominee_PAN1}</label></span><span style="float: inline-end;">Nominee
                                Relation:
                                <label>${data.Nominee_Relation1}</label></span><br>
                                ${data.Nominee_Type1 === "Y" ? `<span> Nominee
                                Guardian: <label>${data.Guardian_Name1}</label></span> <span
                                style="float: inline-end;">Nominee DOB1: <label>${data.Nominee_DOB1!=="Invalid Date"? data.Nominee_DOB1:""}</label></span>` : ""}
    
                        </div>
                    </div>
                    <div class="user-details">
                        <div class="detail1" style="line-height: 18px;">
                            <span>Name OF 2st Nominee: <label>${data.Nominee_Name2}</label></span><span
                                style="float: inline-end;">% OF
                                Allocation:
                                <label>${data.Nominee_Percentage2!==0?data.Nominee_Percentage2:""}</label></span><br><span>Nominee
                                PAN: <label>${data.Nominee_PAN2}</label></span><span style="float: inline-end;">Nominee
                                Relation:
                                <label>${data.Nominee_Relation2}</label></span><br>
                                ${data.Nominee_Type2 === "Y" ? `<span> Nominee
                                Guardian: <label>${data.Guardian_Name2}</label></span> <span
                                style="float: inline-end;">Nominee DOB2: <label>${data.Nominee_DOB2!=="Invalid Date"? data.Nominee_DOB2:""}</label>` : ""}
    
                        </div>
                    </div>
                    <div class="user-details">
                        <div class="detail1" style="line-height: 18px;">
                            <span>Name OF 3st Nominee: <label></label></span><span style="float: inline-end;">% OF
                                Allocation:
                                <label>${data.Nominee_Percentage3!==0?data.Nominee_Percentage3:""}</label></span><br><span>Nominee
                                PAN: <label>${data.Nominee_PAN3}</label></span><span style="float: inline-end;">Nominee
                                Relation:
                                <label>${data.Nominee_Relation3}</label></span><br>
                                ${data.Nominee_Type3 === "Y" ? `<span> Nominee
                                Guardian: <label>${data.Guardian_Name3}</label></span> <span
                                style="float: inline-end;">Nominee DOB3: <label>${data.Nominee_DOB3!=="Invalid Date"? data.Nominee_DOB3:""}</label>` : ""}
    
    
                        </div>
                    </div>
                </div>
                <div>
                    <div class="form_header">
                        <span style="margin-left: 30px;">BANK DETAILS 1</span>
                    </div>
                    <div class="user-details">
                        <div class="detail1">
                            <span>Bank Name: <label>${data.BANK_Name1!==null?data.BANK_Name1:""}</label></span><span style="float: inline-end;">
                                Branch: <label></label></span><br>
                            <div class="details2"><span>A/C NO: <label>${data.Account_No1}</label></span>
                                <span>A/C Type: <label>${data.Account_Type1}</label></span>
                                <span>IFSC CODE: <label>${data.IFSC_Code1}</< /label></span>
                            </div>
                        </div>
                    </div>
    
                </div>
                <div>
                    <div class="form_header">
                        <span style="margin-left: 30px;">BANK DETAILS 2</span>
                    </div>
                    <div class="user-details">
                        <div class="detail1">
                            <span>Bank Name: <label>${data.BANK_Name2!==null?data.BANK_Name2:""}</label></span><span style="float: inline-end;">
                                Branch: <label></label></span><br> 
                            <div class="details2"><span>A/C NO: <label>${data.Account_No2}</label></span>
                                <span>A/C Type: <label>${data.Account_Type2}</label></span>
                                <span>IFSC CODE: <label>${data.IFSC_Code2}</< /label></span>
                            </div>
                        </div>
                    </div>
    
                </div>
                <div class="footer">
                    <div class="red-line">
                        <div class="blue-line">
                            <p class="footer-name">www.cnvmoney.com</p>
                        </div>
                    </div>
                </div>
    
            </div>
            <div class="container" style="margin-top: 3px;">
                <div class="main-header" style="background-color: #0143a2;">
                    <div class="header">
                        <a href="https://cnvmoney.com/">
                            <img src="https://cnvmoney.com/_next/image?url=https%3A%2F%2Fdownload-form-website.s3.ap-south-1.amazonaws.com%2FWebsite%2BContent%2FCNVMONEY%2BLogo.png&w=256&q=75"
                                alt="logo">
                        </a>
                    </div>
                </div>
                <div>
                    <div class="form_header" style="margin-top: 5px;">
                        <span style="margin-left: 30px;">BANK DETAILS 3</span>
                    </div>
                    <div class="user-details">
                        <div class="detail1">
                            <span>Bank Name: <label>${data.BANK_Name3!==null?data.BANK_Name3:""}</label></span><span style="float: inline-end;">
                                Branch: <label></label></span><br>
                            <div class="details2"><span>A/C NO: <label>${data.Account_No3}</label></span>
                                <span>A/C Type: <label>${data.Account_Type3}</label></span>
                                <span>IFSC CODE: <label>${data.IFSC_Code3}</label></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="form_header">
                        <span style="margin-left: 30px;">BANK DETAILS 4</span>
                    </div>
                    <div class="user-details">
                        <div class="detail1">
                            <span>Bank Name: <label>${data.BANK_Name4!==null?data.BANK_Name4:""}</label></span><span style="float: inline-end;">
                                Branch: <label></label></span><br>
                            <div class="details2"><span>A/C NO: <label>${data.Account_No4}</label></span>
                                <span>A/C Type: <label>${data.Account_Type4}</label></span>
                                <span>IFSC CODE: <label>${data.IFSC_Code4}</label></span>
                            </div>
                        </div>
                    </div>
    
                </div>
                <div>
                    <div class="form_header">
                        <span style="margin-left: 30px;">BANK DETAILS 5</span>
                    </div>
                    <div class="user-details">
                        <div class="detail1">
                            <span>Bank Name: <label>${data.BANK_Name5!==null?data.BANK_Name5:""}</label></span><span style="float: inline-end;">
                                Branch: <label></label></span><br>
                            <div class="details2"><span>A/C NO: <label>${data.Account_No5}</label></span>
                                <span>A/C Type: <label>${data.Account_Type5}</label></span>
                                <span>IFSC CODE: <label>${data.IFSC_Code5}</label></span>
                            </div>
                        </div>
                    </div>
    
                </div>
    
                <div>
                    <div class="form_header">
                        <span style="margin-left: 30px;">OTHER DETAILS </span>
                    </div>
                    <div class="detail1">
                        <div class="other-details">
                            <div class="other "><span>Occupation:</span></div>
                            <div class="other-checkbox"><span><input type="checkbox" ${data.Occupation==="01"
                                        ?"checked":""}>Business</span>
                                <span><input type="checkbox" ${data.Occupation==="02" ?"checked":""}>Services</span>
                                <span><input type="checkbox" ${data.Occupation==="03" ?"checked":""}>Professional</span>
                                <span><input type="checkbox" ${data.Occupation==="04" ?"checked":""}>Agriculture</span>
                                <span><input type="checkbox" ${data.Occupation==="05" ?"checked":""}>Retired</span>
                                <span><input type="checkbox" ${data.Occupation==="06" ?"checked":""}>Housewife</span>
                                <span><input type="checkbox" ${data.Occupation==="07" ?"checked":""}>Student</span>
                                <span><input type="checkbox" ${data.Occupation==="08" ?"checked":""}>Others</span>
                            </div>
                        </div>
                    </div>
    
                    <div class="detail1" style="margin-top: 5px;">
                        <div class="other-details">
                            <div class="other "><span>Income Details:</span></div>
                            <div class="other-checkbox"><span><input type="checkbox" ${data.Income_Slab==="31"
                                        ?"checked":""}>Below 1 lakh</span>
                                <span><input type="checkbox" ${data.Income_Slab==="32" ?"checked":""}>1 to 5 lacs</span>
                                <span><input type="checkbox" ${data.Income_Slab==="33" ?"checked":""}>5 to 10 lacs</span>
                                <span><input type="checkbox" ${data.Income_Slab==="34" ?"checked":""}>10 to 25 lacs</span>
                                <span><input type="checkbox" ${data.Income_Slab==="35" ? "checked" : "" }>25 lacs to 1
                                    crore</span>
                                <span><input type="checkbox" ${data.Income_Slab==="36" ?"checked":""}>Above 1 crore</span>
    
                            </div>
                        </div>
                    </div>
    
                    <div class="detail1" style="margin-top: 5px;">
                        <div class="other-details">
                            <div class="other "><span>POLITICALLY EXPOSED PERSON STATUS:</span></div>
                            <div class="other-checkbox"><span><input type="checkbox" ${data.Politically_Exposed==="Y"
                                        ?"checked":""}>Yes, Politically Exposed Person</span>
                                <span><input type="checkbox" ${data.Politically_Exposed==="N" ?"checked":""}>I AM RELATED
                                    Politically Exposed Person</span>
                                <span><input type="checkbox" ${data.Politically_Exposed==="R" ?"checked":""}>NOT
                                    APPLICABLE</span>
    
    
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="signature">
                        <p>Declaration and Signature</p>
                        <p>
                            I/we confirm that details provided by me/us are true and correct
                            holder has disclosed to me/us all the commission (in the form of
                            trial commission or any other mode.) payable to him for the
                            different competing schemes of various mutual funds amongst which
                            the scheme is being recommended to me/us
                        </p>
                        <div class="signature-photo">
                            <div class="signature-container"><span
                                    style="background-color: gray; width: 100%; text-align: center;">FIRST
                                    APPLICANT
                                    SIGNATURE</span>
                                <div class="signature-img"><img src=${data.signatureLink} alt=""></div>
                            </div>
                            <div class="signature-container"><span
                                    style="background-color: gray; width: 100%; text-align: center;">SECOND
                                    APPLICANT
                                    SIGNATURE</span>
                                <div class="signature-img"><img src="" alt=""></div>
                            </div>
                            <div class="signature-container"><span
                                    style="background-color: gray; width: 100%; text-align: center;">THIRD
                                    APPLICANT
                                    SIGNATURE</span>
                                <div class="signature-img"><img src="" alt=""></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cheque">
                    <span>YOUR CHEQUE IMAGE</span>
                    <div class="cheque-img"><img src=${data.checkLink} alt=""></div>
                </div>
                <div class="footer">
                    <div class="red-line">
                        <div class="blue-line">
                            <p class="footer-name">www.cnvmoney.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    </html>`;
}

export default PdfTemplate