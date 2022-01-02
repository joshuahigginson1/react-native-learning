// Third Party Imports
import { useFormikContext } from "formik";

// Local Imports
import CustomButton from "../customButton";

function AppSubmitButton({ title }) {
    const { handleSubmit } = useFormikContext();
    return <CustomButton title={title} onPress={handleSubmit} />;
}

export default AppSubmitButton;
