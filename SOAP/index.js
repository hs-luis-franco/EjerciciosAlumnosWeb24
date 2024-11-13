const axios = require("axios");
const xml2js = require("xml2js");

const soapBody = `
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://tempuri.org/">
    <soapenv:Header/>
    <soapenv:Body>
        <web:Add>
            <web:intA> 140 </web:intA>
            <web:intB> 55 </web:intB>
        </web:Add>
    </soapenv:Body>
</soapenv:Envelope>
`;

axios
  .post("http://www.dneonline.com/calculator.asmx", soapBody, {
    headers: {
      "Content-Type": "text/xml; charset=utf-8",
      SOAPAction: "http://tempuri.org/Add",
    },
  })
  .then((response) => {
    console.log(response.data);
    xml2js.parseString(response.data, (err, result) => {
      console.log(
        result["soap:Envelope"]["soap:Body"][0].AddResponse[0].AddResult[0]
      );
    });
  })
  .catch((error) => {
    console.error(error);
  });
