using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Net.Http;
using System.Reflection;
using System.Threading.Tasks;
using System.Web.Script.Services;
using System.Web.Services;

namespace Westley_Bennett
{
    /// <summary>
    /// A webservice to assist in handling Google's reCAPTCHA in a more simplified way
    /// </summary>
    [WebService(Namespace = "Westley_Bennett")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    [ScriptService]
    public class ReCAPTCHAv3Service : WebService
    {
        public static string Token = string.Empty;
        public static ResponseToken response = new ResponseToken();
        private static readonly string apiAddress = "https://www.google.com/recaptcha/api/siteverify";
        public static readonly string siteKey = "SiteKey";
        private static readonly string secretKey = "SecretKey";

        /// <summary>
        /// Sets the token value on the current WebService
        /// </summary>
        /// <param name="_token"></param>
        [WebMethod]
        [ScriptMethod()]
        public void SetToken(string _token)
        {
            Token = _token;
        }

        /// <summary>
        /// Verifies the reCAPTCHA and returns the string value back to the JavaScript
        /// </summary>
        /// <returns></returns>
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public string CaptchaVerify()
        {
            //It should only call once
            if (response.Score == 0)
            {
                Task<string> responseString = RecaptchaVerify(Token);
                response = JsonConvert.DeserializeObject<ResponseToken>(responseString.Result, new ResponseTokenConverter());
            }
            return JsonConvert.SerializeObject(response);
        }

        /// <summary>
        /// Takes the incoming token and verifies it against Google's reCAPTCHA service
        /// </summary>
        /// <param name="recaptchaToken"></param>
        /// <returns></returns>
        private async Task<string> RecaptchaVerify(string recaptchaToken)
        {
            string url = $"{apiAddress}?secret={secretKey}&response={recaptchaToken}";
            using (HttpClient httpClient = new HttpClient())
            {
                try
                {
                    string responseString = await httpClient.GetStringAsync(url);
                    return responseString;

                }
                catch (Exception ex)
                {
                    throw new Exception(ex.Message);
                }
            }
        }

        /// <summary>
        /// Custom made JSONConverter to convert a JSON string into a ResponseToken class. Made by WHB on 07.22.2021
        /// </summary>
        public class ResponseTokenConverter : JsonConverter
        {
            public override bool CanConvert(Type objectType)
            {
                if (objectType.Name == nameof(ResponseToken)) return true;
                return false;
            }

            public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)
            {
                ResponseToken rt = new ResponseToken();
                if (reader.TokenType != JsonToken.Null)
                {
                    if (reader.TokenType == JsonToken.StartArray)
                    {
                        JToken token = JToken.Load(reader);
                        List<string> items = token.ToObject<List<string>>();
                        string t = token.ToString();
                        rt = new ResponseToken(t);
                    }
                    else if (reader.TokenType == JsonToken.StartObject)
                    {
                        reader.Read();
                        PropertyInfo[] pis = rt.GetType().GetProperties();

                        while (reader.TokenType != JsonToken.EndObject)
                        {
                            if (reader.TokenType == JsonToken.PropertyName)
                            {
                                string propertyName = reader.Value.ToString();
                                reader.Read();

                                //Set the values, if we can find them
                                foreach (PropertyInfo pi in pis)
                                {
                                    if (pi.Name.ToLower() == propertyName.ToLower())
                                    {
                                        pi.SetValue(rt, reader.Value);
                                        break;
                                    }
                                }
                            }
                            else if (reader.TokenType == JsonToken.String)
                            {
                                //If it's a string, it must be one of the error codes
                                if (rt.ErrorCodes == null) rt.ErrorCodes = new List<string>();
                                rt.ErrorCodes.Add(reader.Value.ToString());
                            }
                            reader.Read(); //read the next one
                        }
                    }
                }
                return rt;
            }

        public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)
        {
            throw new NotImplementedException();
        }
    }

    /// <summary>
    /// A ResponseToken that the programmer can use to decide what to do with the data returned from Google
    /// </summary>
    public class ResponseToken
    {

        /// <summary>
        /// Empty constructor
        /// </summary>
        public ResponseToken()
        {

        }

        /// <summary>
        /// Constructor from a raw JSONInput string
        /// </summary>
        /// <param name="JSONInput"></param>
        public ResponseToken(string JSONInput)
        {
            if (JSONInput == "")
            {
                //Report a bad input
                Score = 0;
                ErrorCodes = new List<string>() { "Server Error, please confirm that the SiteKey and SecretKey are setup properly for this service." };
                Success = false;
                return;
            }

            //Generically set all of the values that exist into the ResponseToken
            JObject jo = JObject.Parse(JSONInput);
            foreach (KeyValuePair<string, JToken> kvp in jo)
            {
                string name = kvp.Key;
                JToken jt = kvp.Value;

                //Set the value based on the name
                switch (name)
                {
                    case "Challenge_ts":
                        Challenge_ts = (DateTime)jt.ToObject(typeof(DateTime));
                        break;
                    case "Score":
                        Score = (float)jt.ToObject(typeof(float));
                        break;
                    case "ErrorCodes":
                        ErrorCodes = (List<string>)jt.ToObject(typeof(List<string>));
                        break;
                    case "Success":
                        Success = (bool)jt.ToObject(typeof(bool));
                        break;
                    case "Hostname":
                        Hostname = (string)jt.ToObject(typeof(string));
                        break;
                    default:
                        Debug.WriteLine("");
                        break; //do nothing, just ignore unknown values
                }
            }

        }

        public DateTime Challenge_ts { get; set; }
        public double Score { get; set; }
        public List<string> ErrorCodes { get; set; }
        public bool Success { get; set; }
        public string Hostname { get; set; }
    }
}
}
