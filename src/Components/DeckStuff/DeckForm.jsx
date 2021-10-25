import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Toast, Button, ToastContainer } from "react-bootstrap";

const DeckForm = ({ handleSubmit, deck, setDeck }) => {
  const initNewDeck = {
    name: "",
    description: "",
  };
  const [newDeck, setNewDeck] = useState({ ...initNewDeck });

  const onSubmit = (e) => {
    e.preventDefault();
    if (!deck) {
      handleSubmit(newDeck);
    } else {
      handleSubmit(deck);
    }

    setNewDeck({ ...initNewDeck });
  };

  const handleChange = (e) => {
    if (!deck) {
      setNewDeck({ ...newDeck, [e.target.id]: e.target.value });
    } else {
      setDeck({ ...deck, [e.target.id]: e.target.value });
    }
  };

  return (
    <div>
      {/* form to create new deck */}
      {!deck && (
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Deck Name"
              value={newDeck.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <textarea
              type="text"
              class="form-control"
              id="description"
              placeholder="Brief description of the deck"
              value={newDeck.description}
              onChange={handleChange}
              required
            />
          </div>
          <div className="create-deck-btns">
            <Link to="/">
              <button className="btn btn-secondary">Cancel</button>
            </Link>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      )}

      {/* form to edit existing deck */}
      {deck && (
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Deck Name"
              value={deck.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <textarea
              type="text"
              class="form-control"
              id="description"
              placeholder="Brief description of the deck"
              value={deck.description}
              onChange={handleChange}
              required
            />
          </div>
          <div className="create-deck-btns">
            <Link to="/">
              <button className="btn btn-secondary">Cancel</button>
            </Link>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      )}

      {/* TOAST EXAMPLE */}
          {/* <Button onClick={toggleShowA} className="mb-2">
            Toggle Toast <strong>with</strong> Animation
          </Button>
          // const [showA, setShowA] = useState(false);

          // const toggleShowA = () => setShowA(!showA);
          
          <ToastContainer
            style={{ position: "fixed", right: "0px", bottom: "10px" }}
          >
            <Toast
              show={showA}
              onClose={() => setShowA(false)}
              show={showA}
              delay={3000}
              autohide
              bg={"primary"}
            >
              <Toast.Header closeButton={false}>
                <strong className="me-auto mx-2">Flashcards</strong>
                <small>now</small>
              </Toast.Header>
              <Toast.Body>
                Woohoo, you're reading this text in a Toast!
              </Toast.Body>
            </Toast>
         </ToastContainer> */}
    </div>
  );
};

export default DeckForm;
