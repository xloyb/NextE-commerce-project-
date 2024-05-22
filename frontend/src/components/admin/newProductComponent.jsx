"use client"
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { useRouter } from "next/navigation";
import { addArticle } from '@/services/ArticleService';

import axios from 'axios';
import { FilePond, registerPlugin } from 'react-filepond'
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

const NewProduct = ({ scategories }) => {
    const router = useRouter();

    const [files, setFiles] = useState([]);

    const [reference, setReference] = useState("");
    const [designation, setDesignation] = useState("");
    const [prix, setPrix] = useState("");
    const [marque, setMarque] = useState("");
    const [qtestock, setQtestock] = useState("");
    const [imageart, setImageart] = useState("");
    const [scategorieID, setScategorieID] = useState("");
    const [validated, setValidated] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === true) {
            const newProduct = {
                reference,
                designation,
                prix,
                marque,
                qtestock,
                imageart,
                scategorieID
            };
            //faire le add dans la BD
            addArticle(newProduct)
                .then(res => {
                    router.push('/admin/products')
                    router.refresh()
                })
                .catch(error => {
                    alert("Erreur ! Insertion non effectuée")
                })
        }
        setValidated(true);
    }
    const serverOptions = () => {
        console.log('server pond');
        return {
            process: (fieldName, file, metadata, load, error, progress, abort) => {
                console.log(file)
                const data = new FormData();

                data.append('file', file);
                data.append('upload_preset', 'dez4zjlzu');
                data.append('cloud_name', 'dez4zjlzu');
                data.append('public_id', file.name);
                axios.post('https://api.cloudinary.com/v1_1/dez4zjlzu/image/upload', data)
                    .then((response) => response.data)
                    .then((data) => {
                        console.log(data);
                        setImageart(data.url);
                        load(data);
                    })
                    .catch((error) => {
                        console.error('Error uploading file:', error);
                        error('Upload failed');
                        abort();
                    });
            },
        };
    };
    return (
        <div>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <h2>Ajout Produit</h2>
                <div className="container w-100 d-flex justify-content-center">
                    <div>
                        <div className='form mt-3'>
                            <Row className="mb-2">
                                <Form.Group as={Col} md="6" >
                                    <Form.Label >Référence *</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Référence"
                                        value={reference}
                                        onChange={(e) => setReference(e.target.value)}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Saisir Référence Article
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="6">
                                    <Form.Label>Désignation *</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Désignation"
                                        value={designation}
                                        onChange={(e) => setDesignation(e.target.value)}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Saisir Désignation
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row className="mb-2">
                                <Form.Group className="col-md-6">
                                    <Form.Label>Marque *</Form.Label>
                                    <InputGroup hasValidation>
                                        <Form.Control
                                            type="text"
                                            required
                                            placeholder="Marque"
                                            value={marque}
                                            onChange={(e) => setMarque(e.target.value)}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Marque Incorrecte
                                        </Form.Control.Feedback>
                                    </InputGroup>
                                </Form.Group>
                                <Form.Group as={Col} md="6">
                                    <Form.Label>Prix</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Prix"
                                        value={prix}
                                        onChange={(e) => setPrix(e.target.value)}
                                    />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group className="col-md-6 ">
                                    <Form.Label>
                                        Qté stock<span className="req-tag">*</span>
                                    </Form.Label>
                                    <Form.Control
                                        required
                                        type="number"
                                        value={qtestock}
                                        onChange={(e) => setQtestock(e.target.value)}
                                        placeholder="Qté stock"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Qté stock Incorrect
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} md="6">
                                    <Form.Label>Image</Form.Label>
                                    <div style={{ width: "80%", margin: "auto", padding: "1%" }}>
                                        <FilePond
                                            files={files}
                                            acceptedFileTypes="image/*"
                                            onupdatefiles={setFiles}
                                            allowMultiple={false}
                                            server={serverOptions()}
                                            name="file"

                                        />
                                    </div>
                                </Form.Group>
                                <Form.Group as={Col} md="12">
                                    <Form.Label>S/Catégorie</Form.Label>
                                    <Form.Control
                                        as="select"
                                        type="select"
                                        value={scategorieID}
                                        onChange={(e) => setScategorieID(e.target.value)}
                                    >
                                        <option></option>
                                        {scategories.map((scat) => <option key={scat._id}
                                            value={scat._id}>{scat.nomscategorie}</option>
                                        )}
                                    </Form.Control>
                                </Form.Group>
                            </Row>
                        </div>
                    </div>
                </div>
                <Button type="submit">Enregistrer</Button>
                <Button type="button" className="btn btn-warning"
                    onClick={() => handleReset()}>Annuler</Button>
            </Form>
        </div>
    );
};
export default NewProduct