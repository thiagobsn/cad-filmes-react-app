import { Formik, Form, Field } from 'formik';
import {Component} from 'react';
import * as yup from 'yup';


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

    render(){
        return (
            <Formik 
                enableReinitialize
                validateOnMount={true}
                validationSchema={FilmeSchema}
                initialValues={this.props.filme || FILME_INICIAL}
                onSubmit={(values,actions) => this.salvarFilme(values, actions)}
                render={({errors, touched, isSubmitting}) => (
                    <Form>
                        <div>
                            <div>
                                <label>Título</label>
                                <Field 
                                    name="titulo"
                                    placeholder="Título"
                                />
                                {touched.titulo && errors.titulo && <span>{errors.titulo}</span>}
                            </div>
                            <div>
                                <label>Subtítulo</label>
                                <Field 
                                    name="subtitulo"
                                    placeholder="Subtítulo"
                                />
                                {touched.subtitulo && errors.subtitulo && <span>{errors.subtitulo}</span>}
                            </div>
                            <div>
                                <label>Diretor</label>
                                <Field 
                                    name="diretor"
                                    placeholder="Diretor"
                                />
                                {touched.diretor && errors.diretor && <span>{errors.diretor}</span>}
                            </div>
                            <div>
                                <button>Novo</button>
                                <button type="submit" disabled={isSubmitting}>Salvar</button>
                            </div>
                        </div>
                    </Form>
                )}

            > 

            </Formik>
        )
    }

}

export default Cadastro;