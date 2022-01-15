import * as Sentry from "sentry-expo";

const init = () => {
    Sentry.init({
        dsn: "https://c1ecb16beacb44fbbd339ee50cec4eca@o1117073.ingest.sentry.io/6150944",
        enableInExpoDevelopment: true,
        debug: false, // If `true`, Sentry will try to print out useful debugging information if something goes wrong with sending the event. Set it to `false` in production
    });
};

const logException = (error) => {
    console.log(error);
    Sentry.Native.captureException(error);
};

const logMessage = (message) => {
    console.log(message);
    Sentry.Native.captureMessage(message);
};

export default { init, logException, logMessage };
