import emailjs from 'emailjs-com'

const form = document.getElementById('email-form-react')

export default function Email() {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('process.env.service_id', 'process.env.template_id', e.target, 'process.env.user_id')
            .then((result) => {
                console.log('Success!', result.status, result.text);
            }, (error) => {
                console.log('Send failed...', error);
            });
    }
}