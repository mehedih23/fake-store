import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function InfoModal(props) {
    console.log(props)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="info" onClick={handleShow}>
                Info
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.product.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img className="w-50 mb-3" src={props.product.image} alt="product" />
                    <h3 className="">Price : {props.product.price}$</h3>
                    <h5>Category : {props.product.category}</h5>
                    <p><small><b>Rate : {props.product.rating.rate}
                        <br />
                        Reviews : {props.product.rating.count}</b>  </small></p>
                    <p><b>Description</b> : {props.product.description}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default InfoModal