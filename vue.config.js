module.exports = {
    css: {
        loaderOptions: {
            sass: {
                additionalData: 
                `
                @import "@/styles/core/_settings.scss";
                @import "@/styles/layout/_globals.scss";
                @import "@/styles/core/_fonts.scss";
                @import "@/styles/core/_mixins.scss";
                `
            }
        }
    }
};