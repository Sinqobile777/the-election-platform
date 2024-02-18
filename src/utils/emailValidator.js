const disposableDomains = require('disposable-email-domains');

const isDisposableEmail = (email) => {
    const [, domain] = email.split('@');
    return disposableDomains.includes(domain);
};

module.exports = { isDisposableEmail };
