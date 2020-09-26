export default class Pepipost{

    static sendAnonymous(subject, content, to){
        let data = JSON.stringify({
            "from": {
                "email": "info@pepisandbox.com",
                "name": "Sylvie Dubois Design"
            },
            "subject": subject,
            "content": [
                {
                    "type": "html",
                    "value": content
                }
            ],
            "personalizations": [
                {
                    "to": [
                        {
                            "email": to,
                            "name": to
                        }
                    ]
                }
            ]
        });

        let xhr = new XMLHttpRequest();
        xhr.withCredentials = true;

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === this.DONE) {
                console.log(this.responseText);
            }
        });

        xhr.open("POST", "http://api.pepipost.com/v5/mail/send");
        xhr.setRequestHeader("api_key", process.env.VUE_APP_PEPITO_KEY);
        xhr.setRequestHeader("content-type", "application/json");

        xhr.send(data);
    }
}