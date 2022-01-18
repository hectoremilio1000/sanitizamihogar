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
        whatsapp: "+5219511028474", // WhatsApp number

        company_logo_url:
          "https://imagenesrutalab.s3.amazonaws.com/sanitizamihigar/logos/logosanitiza.png", // URL of company logo (png, jpg, gif)
        greeting_message: "Hola estamos para ayudarte", // Text of greeting message
        call_to_action: "Llámanos", // Call to action
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
