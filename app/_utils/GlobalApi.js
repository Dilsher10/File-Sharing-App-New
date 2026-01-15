const SendEmail = (data) => {
    return fetch('/api/send/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .catch(error => {
        console.error('Error sending email:', error);
        throw error;
    });
}

export default {
    SendEmail
}
