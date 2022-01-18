module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100,
      },
    },
    {
      resolve: "gatsby-plugin-whatshelp",
      options: {
        facebook: "xxx", // Facebook page ID
        whatsapp: "+5219511028474", // WhatsApp number
        email: "clientes@sanitizamihogar.com", // Email
        call: "+5219511028474", // Call phone number
        company_logo_url:
          "//storage.whatshelp.io/widget/xx/xxxx/xxxxxx/logo.jpg", // URL of company logo (png, jpg, gif)
        greeting_message: "Hola estamos para ayudarte", // Text of greeting message
        call_to_action: "Call to Action", // Call to action
        button_color: "#b02030", // Color of button
        position: "right", // Position may be 'right' or 'left'
        order: "whatsapp", // Order of buttons
        ga: true, // Google Analytics enabled
        branding: false, // Show branding string
        mobile: true, // Mobile version enabled
        desktop: true, // Desktop version enabled
        greeting: true, // Greeting message enabled
        shift_vertical: 0, // Vertical position, px
        shift_horizontal: 0, // Horizontal position, px
        domain: "www.sanitizamihogar.com", // site domain
        key: "xxx", // pro-widget key
      },
    },
  ],
};
