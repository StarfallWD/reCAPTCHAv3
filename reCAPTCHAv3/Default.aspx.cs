using System;
using System.Text;

/// <summary>
/// This project aims to simplify implementing Google's reCAPTCHAv3 for regular .NET users with minimal fuss.
/// It relies on a web service (reCAPTCHAv3Service.asmx) to be in the root, as well as the reCAPTCHAv3.js to be in the /js folder.
/// Final steps to make this code work in your project are listed in the attached readme.txt
/// </summary>
namespace Westley_Bennett
{
    public partial class Default : System.Web.UI.Page
    {

        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected void BtnLogin_Click(object sender, EventArgs e)
        {
            ReCAPTCHAv3Service.ResponseToken rt = new ReCAPTCHAv3Service.ResponseToken(reCAPTCHAResponse.Value);
            if (rt.Score > 0.5)
            {
                lblStatus.Text = "User is human!";
                lblStatus.ForeColor = System.Drawing.Color.LimeGreen;
            }
            else
            {
                if (rt.ErrorCodes != null && rt.ErrorCodes.Count > 0)
                {
                    StringBuilder sb = new StringBuilder();
                    foreach(string ErrorCode in rt.ErrorCodes)
                    {
                        sb.AppendLine(
                            (sb.ToString() == "" ? "" : ", ") + ErrorCode );
                    }
                    lblStatus.Text = "We don't consider you human, and this is why: " + sb.ToString();
                    lblStatus.ForeColor = System.Drawing.Color.Red;
                }
            }
        }
    }
}