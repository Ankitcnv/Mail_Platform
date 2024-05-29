import nodemailer from "nodemailer";
import puppeteer from "puppeteer";
// import { UserUpdateData } from "@/Template/UserUpdateData";
import { userData } from "@/app/formdata/data";
import { PdfTemplate } from "@/Template/PdfTemplate";

const generatePdfFromHtml = async (htmlContent) => {
  let browser = null;
  try {
    console.log("Launching puppeteer...");
    browser = await puppeteer.launch({
      headless: true,
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage",
        "--disable-accelerated-2d-canvas",
        "--disable-gpu",
        "--disable-extensions",
        "--disable-background-networking",
        "--disable-background-timer-throttling",
        "--disable-backgrounding-occluded-windows",
        "--disable-client-side-phishing-detection",
        "--disable-default-apps",
        "--disable-hang-monitor",
        "--disable-ipc-flooding-protection",
        "--disable-popup-blocking",
        "--disable-prompt-on-repost",
        "--disable-renderer-backgrounding",
        "--disable-sync",
        "--disable-translate",
        "--metrics-recording-only",
        "--mute-audio",
        "--no-first-run",
        "--safebrowsing-disable-auto-update",
      ],
      timeout: 120000, // Increase timeout to 120 seconds
    });

    const page = await browser.newPage();

    console.log("Setting page content...");
    await page.setContent(htmlContent, {
      waitUntil: "networkidle0",
      timeout: 120000, // Increase timeout to 120 seconds
    });

    console.log("Generating PDF from page...");
    const pdfBuffer = await page.pdf({ format: "A4", printBackground: true });

    console.log("PDF generated, closing browser...");
    await browser.close();

    console.log("Puppeteer process finished...");
    return pdfBuffer;
  } catch (error) {
    console.error("Error during PDF generation:", error);
    if (browser) {
      await browser.close();
    }
    throw new Error("Failed to generate PDF");
  }
};

export const sendMessage = async ({
  username,
  email,
}: {
  username: string;
  email: string;
}) => {
  try {
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.USERMAIL,
        pass: process.env.PASSMAIL,
      },
    });

    const htmlContent = await PdfTemplate(userData);

    const pdfBuffer = await generatePdfFromHtml(htmlContent);

    console.log("PDF generated...");
    await transport.sendMail({
      from: process.env.USERMAIL,
      to: email,
      subject: "Exciting Opportunity: Join Our Development Team!",
      html: htmlContent,
      attachments: [
        {
          filename: "attachment.pdf",
          content: pdfBuffer,
          contentType: "application/pdf",
        },
      ],
    });

    console.log("Email sent successfully!");
  } catch (error) {
    console.log(error);
  }
};
