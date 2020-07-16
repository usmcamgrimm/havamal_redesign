import emailjs from 'emailjs-com'

const form = document.getElementById('email-form-react')

export default function Email() {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('process.env.service_id', 'process.env.template_id', 'process.env.user_id')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }
}