import React from "react";
import styles from "./AddYourItemForm.module.scss";

const AddYourItemForm = props => (
  <>
    <h2 className="title is-4 has-text-centered	">Add Your Item</h2>
    <form onSubmit={props.addItem}>
      <input type="text" name="title" />
      <input type="text" name="desc" />

      <input type="text" name="price" />

      <button type="submit">Add New Item</button>
    </form>

    {/* <form onSubmit={props.addItem}>
      <div className="column">
        <input
          className="input"
          type="text"
          name="title"
          placeholder="Title"
          value="Fox"
        />

        <input
          className="input "
          type="text"
          name="desc"
          placeholder="Description"
          value="Foxes are small to medium-sized, omnivorous mammals belonging to several genera of the family Canidae. Foxes have a flattened skull, upright triangular ears, a pointed, slightly upturned snout, and a long bushy tail (or brush)."
        />
        <input
          className="input"
          type="text"
          name="price"
          placeholder="Price"
          value="Priceless"
        />
        <input
          className="input"
          type="text"
          name="itemImage"
          placeholder="put your image source"
          value="data:image/jpeg;base64,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"
        />

        <div className="column has-text-centered">
           <button className="button is-primary" type="submit">
            Add Item
          </button> 
        </div>
      </div>
    </form>
  */}
  </>
);

export default AddYourItemForm;
