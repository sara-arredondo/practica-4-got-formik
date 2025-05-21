import { useState } from "react"
import { useFormik } from 'formik';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const validate = values => {
    const errors = {};

    if (!values.fullName) {
        errors.fullName = 'El nombre es obligatorio';
    } else if (values.fullName.length < 3 || /\d/.test(values.fullName)) {
        errors.fullName = "El nombre debe tener más de dos letras y no contener números"
    }

    if (!values.title) {
        errors.title = 'El título es obligatorio';
    }

    if (!values.family) {
        errors.family = 'La familia es obligatoria';
    }

    if (!values.imageUrl) {
        errors.imageUrl = 'Ingresar una URL de una imagen es obligatorio';
    } else if (!values.imageUrl.includes("https")) {
        errors.imageUrl = "Debe ser una URL de imagen válida";
    }
    return errors;
}

function AddCharacter( {createCharacter} ) {

    const formik = useFormik({
        initialValues: {
            fullName: "",
            title: "",
            family: "",
            imageUrl: "",
        },

        onSubmit: (values, { resetForm }) => {
            createCharacter(values);
            resetForm()
        },

        validate,
    })

    return (
        <Box 
            component="form"
            onSubmit={formik.handleSubmit}
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                maxWidth: 400,
                mx: "auto",
                mt: 4,
            }}>
            <TextField
                id="outlined-basic"
                label="Nombre del personaje"
                variant="outlined"
                name="fullName"
                value={formik.values.fullName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                helperText={formik.touched.fullName && formik.errors.fullName}
            />
            <TextField
                id="outlined-basic"
                label="Titulo del personaje"
                variant="outlined"
                name="title"
                value={formik.values.title}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.title && Boolean(formik.errors.title)}
                helperText={formik.touched.title && formik.errors.title}
            />
            <TextField
                id="outlined-basic"
                label="Familia del personaje"
                variant="outlined"
                name="family"
                value={formik.values.family}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.family && Boolean(formik.errors.family)}
                helperText={formik.touched.family && formik.errors.family}
            />
            <TextField
                label="URL de imagen"
                variant="outlined"
                name="imageUrl"
                value={formik.values.imageUrl}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.imageUrl && Boolean(formik.errors.imageUrl)}
                helperText={formik.touched.imageUrl && formik.errors.imageUrl}
            />
            <Button type="submit" variant="contained">CREAR</Button>
        </Box>
    )
}

export default AddCharacter