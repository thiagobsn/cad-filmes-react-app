import { Formik, Form, Field } from 'formik';
import {Component} from 'react';
import * as yup from 'yup';
import {Grid, Button, TextField} from '@material-ui/core'


const FILME_INICIAL = {
    titulo: '',
    subtitulo: '',
    diretor: ''
};

const FilmeSchema = yup.object().shape({

    titulo : yup.string().required('Informe o título do filme!'),
    subtitulo : yup.string().required('Informe o subtítulo do filme!'),
    diretor : yup.string().required('Informe o diretor do filme!'),

});

class Cadastro extends Component {

    salvarFilme(values, actions){
        actions.setSubmitting(true);
        console.log('values ', values);
        this.props.salvar(values);
        actions.resetForm();
        setTimeout(() => actions.setSubmitting(false), 5000);

    }

    handleChange(name, value, setFieldValue){
        setFieldValue(name, value);
    }

    handleNovoFilme(handleReset){
        this.props.limpar();
        handleReset(FILME_INICIAL);
    }

    render(){
        return (
                    <Formik 
                        enableReinitialize
                        validateOnMount={true}
                        validationSchema={FilmeSchema}
                        initialValues={this.props.filme || FILME_INICIAL}
                        onSubmit={(values,actions) => this.salvarFilme(values, actions)}
                        render={({values, errors, touched, setFieldValue, setFieldTouched, handleReset, isSubmitting}) => (
                            <Form>
                                <>
                                    <Grid container spacing={3}>
                                        <Grid item xs={11}>
                                            <Field
                                                component={TextField} 
                                                name="titulo"
                                                label="Títilo"
                                                variant="outlined"
                                                fullWidth
                                                value={values.titulo}
                                                onChange={(e) => this.handleChange('titulo',e.target.value, setFieldValue)}
                                                onFocus={() => setFieldTouched('titulo')} 
                                                error={touched.titulo && errors.titulo}
                                                helperText={touched.titulo && errors.titulo}                                            
                                            />
                                        </Grid>
                                        <Grid item xs={11}>
                                            <Field
                                                component={TextField} 
                                                name="subtitulo"
                                                label="Subtítilo"
                                                variant="outlined"
                                                size="small"
                                                fullWidth
                                                value={values.subtitulo}
                                                onChange={(e) => this.handleChange('subtitulo',e.target.value, setFieldValue)}
                                                onFocus={() => setFieldTouched('subtitulo')} 
                                                error={touched.subtitulo && errors.subtitulo}
                                                helperText={touched.subtitulo && errors.subtitulo}                                            
                                            />
                                        </Grid>
                                        <Grid item xs={11}>
                                            <Field
                                                component={TextField} 
                                                name="diretor"
                                                label="Diretor"
                                                variant="outlined"
                                                size="small"
                                                fullWidth
                                                value={values.diretor}
                                                onChange={(e) => this.handleChange('diretor',e.target.value, setFieldValue)}
                                                onFocus={() => setFieldTouched('diretor')} 
                                                error={touched.diretor && errors.diretor}
                                                helperText={touched.diretor && errors.diretor}                                            
                                            />
                                        </Grid>
                                        <Grid item xs={11}>

                                            <Grid container spacing={3} justify="flex-end">
                                                <Grid item>
                                                    <Button variant="contained" onClick={() => this.handleNovoFilme(handleReset)}>Novo</Button>
                                                </Grid>
                                                <Grid item>
                                                <Button variant="contained" type="submit" disabled={isSubmitting} color="primary">Salvar</Button>
                                                </Grid>
                                            </Grid>

                                        </Grid> 

                                    </Grid>
                                </>

                            </Form>
                        )}

                    > 
                    </Formik>
        )
    }

}

export default Cadastro;