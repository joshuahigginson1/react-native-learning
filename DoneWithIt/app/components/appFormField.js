// Third Party Imports
import React from "react";
import { useFormikContext } from "formik";

// Local Imports
import AppTextInput from "./appTextInput";
import AppErrorMessage from "./appErrorMessage";

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
