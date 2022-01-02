// Third Party Imports
import { useFormikContext } from "formik";

// Local Imports
import AppPicker from "../appPicker";
import AppErrorMessage from "./appErrorMessage";

function AppFormPicker({ fieldName, ...otherProps }) {
    const { setFieldValue, values, errors, touched, setFieldTouched } =
        useFormikContext();
    return (
        <>
            <AppPicker
                placeholder={fieldName}
                onSelectItem={(item) => {
                    setFieldValue(fieldName, item);
                    setFieldTouched(fieldName);
                }}
                {...otherProps}
                selectedItem={values[fieldName]}
            />
            <AppErrorMessage
                visible={touched[fieldName]}
                error={errors[fieldName]}
            />
        </>
    );
}

export default AppFormPicker;
