using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Text;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Westley_Bennett;

namespace reCAPTCHAv3
{
    public partial class Headingley_Business_Centre : System.Web.UI.Page
    {
       

        protected void Page_Load(object sender, EventArgs e)
        {
            DataBind();

        }
        protected void btnSubmit_Click(object sender, EventArgs e)
        {
            ReCAPTCHAv3Service.ResponseToken rt = new ReCAPTCHAv3Service.ResponseToken(reCAPTCHAResponse.Value);
            if (rt.Score > 0.5)
            {

                if (rqEmail.IsValid && rqMessage.IsValid && rqName.IsValid && rgEmail.IsValid)
                {
                    SmtpClient mail = new SmtpClient("smtp.gmail.com");
                    mail.Credentials = new NetworkCredential("info@canascorp.com", "ynkwkxwpsxbvxatz"); //ynkwkxwpsxbvxatz
                    mail.EnableSsl = true;
                    mail.Port = 587;
                    try
                    {
                        MailAddress slender = new MailAddress("info@canascorp.com");
                        MailAddress reciever = new MailAddress("info@canascorp.com");
                        MailMessage mesaj = new MailMessage(slender, reciever);
                        mesaj.Subject = "[Canas Corp Website] Contact Request";
                        mesaj.Body = "Contact Request From Website. Please reply to the client by copying the email and creating a new message.<br/>Details;<br/><br/><br/>Client Name : " + txtName.Text + "<br/><br/>Email : " + txtEmail.Text + "<br/><br/>Phone : " + txtPhone.Text + "<br/><br/>Subject : " + txtSubject.Text + "<br/><br/> Message : " + txtMessage.Text;
                        mesaj.IsBodyHtml = true;
                        mail.Send(mesaj);
                    }
                    catch (Exception ex)
                    {
                        lblStatus.Text = ex.Message;
                        //RegisterClientScriptBlock("alert", "<script>alert(' Your message could not be sent, please try again later.')</script>");
                        return;
                    }
                    RegisterClientScriptBlock("alert", "<script>alert('Thank you for your request. We will contact with you as soon as possible.')</script>");
                    txtEmail.Text = "";
                    txtMessage.Text = "";
                    txtName.Text = "";
                    txtPhone.Text = "";
                    txtSubject.Text = "";
                }
            }
            else
            {
                if (rt.ErrorCodes != null && rt.ErrorCodes.Count > 0)
                {
                    StringBuilder sb = new StringBuilder();
                    foreach (string ErrorCode in rt.ErrorCodes)
                    {
                        sb.AppendLine(
                            (sb.ToString() == "" ? "" : ", ") + ErrorCode);
                    }
                    lblStatus.Text = "Captcha Failed: " + sb.ToString();
                    lblStatus.ForeColor = System.Drawing.Color.Red;
                }
            }
        }
    }
}