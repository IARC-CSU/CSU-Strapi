module.exports = ({ env }) => ({
  // ...
  email: {
    config: {
      provider: 'sendgrid',
      providerOptions: {
        apiKey: env('SENDGRID_API_KEY'),
      },
      settings: {
        defaultFrom: 'lamf@iarc.fr',
        defaultReplyTo: 'lamf@iarc.fr',
      },
    },
  }
});