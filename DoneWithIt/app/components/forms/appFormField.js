// Third Party Imports
import { useFormikContext } from "formik";

// Local Imports
import AppTextInput from "./appTextInput.js";
import AppErrorMessage from "./appErrorMessage.js";

function AppFormField({ fieldName, ...otherProps }) {
    const { handleChange, setFieldTouched, touched, errors } =
        useFormikContext();
    return (
        <>
            <AppTextInput
                onChangeText={handleChange(fieldName)}
                onBlur={() => setFieldTouched(fieldName)}
                {...otherProps}
            />
            <AppErrorMessage
                visible={touched[fieldName]}
                error={errors[fieldName]}
            />
        </>
    );
}

export default AppFormField;
