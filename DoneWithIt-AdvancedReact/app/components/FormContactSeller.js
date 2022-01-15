import { Keyboard, Alert } from "react-native";
import * as Notifications from "expo-notifications";
import * as Yup from "yup";

// Local Imports
import { Form, FormField, SubmitButton } from "./forms";
import messages from "../api/messages";

function ContactSellerForm({ listing }) {
    const handleSubmit = async ({ message }, { resetForm }) => {
        // Dismiss Keyboard.
        Keyboard.dismiss();

        // Send API call.
        const response = await messages.registerMessage(message, listing.id);

        // If error, log error.
        if (!response.ok) {
            console.log("Error", response);
            Alert.alert("Error", "Could not message the seller.");
        }

        // Reset form.
        resetForm();

        // Show a local notification.
        Notifications.scheduleNotificationAsync({
            content: {
                title: "Success!",
                body: "Your message has been sent to the seller.",
            },
            trigger: null,
        });
    };

    const validationSchema = Yup.object().shape({
        message: Yup.string().required().min(4).label("Message"),
    });

    // Return a form.
    return (
        <Form
            initialValues={{
                message: "",
            }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
        >
            <FormField
                maxLength={255}
                multiline
                name="message"
                numberOfLines={3}
                placeholder="Message"
            />
            <SubmitButton title="Send Message!" />
        </Form>
    );
}

export default ContactSellerForm;
