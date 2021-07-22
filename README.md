# reCAPTCHAv3
This project aims to simplify implementing Google's reCAPTCHAv3 for regular .NET Framework users with minimal fuss.

By Westley Bennett, with MOST knowledge and code "stolen" from Nihar Sarkar's StackOverflow post at https://stackoverflow.com/a/55390797/7308469
I just put this all together, centralized the code as much as possible for portability, and genericized it as much as possible.

License - This software is released under the Creative Commons Attribution Share Alike 4.0 International, which can be found here:
https://creativecommons.org/licenses/by-sa/4.0/legalcode

Prerequisites:
Microsoft .NET Framework 4.5 or higher
The following nuget packages - Microsoft.AspNet.WebApi, Newtonsoft.Json, and System.Net.Http

Below are the steps needed for implementation:

1.	Place the web service file reCAPTCHAv3Service.asmx in your project root
2.	Place the reCAPTCHAv3.js file to be in the /js folder of your project. Create the folder if it doesn't exist
3.	Add the following lines to whatever webpages you want to implement the reCAPTCHA on.
	a.	In the markup, between the HEAD tags:
        <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://www.google.com/recaptcha/api.js?render=<%=Westley_Bennett.ReCAPTCHAv3Service.siteKey%>"></script>
        <script src="js/reCAPTCHAv3.js"></script>
    b.  In the markup, this line anywhere between the <form></form> tags:
        <asp:HiddenField ID="reCAPTCHAResponse" runat="server" />
    c.  In the markup, at the following attribute into whatever button you want to trigger the reCAPTCHAv3 code into:
        OnClientClick="btnClick()"
4.  Replace the placeholders of "SiteKey" and "SecretKey" inside of the reCAPTCHAv3.js and reCAPTCHAv3Service.asmx with your own actual values
5.  Handle the resulting output however you want! By obtaining a ReCAPTCHAv3Service.ResponseToken object in your codebehind like shown in the
    below example, you can choose what is done with the variables that are returned by Google:

        ReCAPTCHAv3Service.ResponseToken rt = new ReCAPTCHAv3Service.ResponseToken(reCAPTCHAResponse.Value);
        if (rt.Score > 0.5)
        {
            lblStatus.Text = "User is human!";
            lblStatus.ForeColor = System.Drawing.Color.LimeGreen;
        }
        else
        {
            if (rt.ErrorCodes.Count > 0)
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
