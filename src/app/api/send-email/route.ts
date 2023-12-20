import { ServiceData } from "@/types/types";
import { NextRequest, NextResponse } from "next/server";

const nodemailer = require("nodemailer");

interface RequestPayloads {
  selectedServices: ServiceData[];
  applicationAmount: number;
  contactInfo: {
    firstName: string;
    lastName: string;
    email: string;
  };
}

export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    console.log("api hitted");
    const {
      selectedServices,
      applicationAmount,
      contactInfo,
    }: RequestPayloads = await req.json();

    const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    
    <style>
        .block {
            display: block;
        }
    
        .bold {
            font-weight: 700;
        }
    
        #logo {
            width: full;
        }
    
        #logo img {
            display: block;
            margin: 40px auto;
            width: 200px;
        }
    </style>
    <body>
        <div id="logo">
            <img src="https://i.ibb.co/99tPsdc/webtricker-logo-black-svg.png" alt="logo" />
        </div>
        <h4 class="block bold">Dear ${contactInfo.firstName}, </h4>
        <p>
            Thank you for submitting your application. We have received the following details:-
        </p>
    
        <p>1. Selected Services:-</p>
         <ul>
           ${selectedServices.map((service) => `<li>${service.name}</li>`)}
         </ul>
        <p>
            Our team will review your application, and we will get back to you as soon as possible. If we need any further
            information, we will reach out to you.
        </p>
    
        <p>
            Thank you for choosing Webtricker. We appreciate your interest!
        </p>
        <div>
            <p>Best regards, <br />
            Mosharaf Hossain
            </p>
        </div>
    </body>
    </html>
    `;

    const transporter = nodemailer.createTransport({
      host: "smtp.titan.email",
      port: 465,
      secure: true,
      // TODO: Have to change the email and password with environment variable
      auth: {
        user: process.env.EMAIL,
        pass: process.env.APP_PASS,
      },
    });
    // send mail with defined transport object
    const result = await transporter.sendMail({
      from: `"Webtricker" ${process.env.EMAIL}`, // sender address
      // to: `${contactInfo.firstName + " " + contactInfo.lastName} , ${
      //   contactInfo.email
      // }`,
      to: contactInfo.email,
      subject: `Application Submission Confirmation`, // Subject line
      text: "", // plain text body
      html: htmlContent, // html body Have to add dynamic html
    });

    console.log(result, "from line 42");
    return NextResponse.json(result);
  } catch (error) {
    console.log(error, "from line 45");
    return NextResponse.json(error);
  }
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  //
  // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
  //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
  //       <https://github.com/forwardemail/preview-email>
  //
};
