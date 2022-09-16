import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { SectionTitle } from "../../styles/base-styles";
import { createWilder } from "./rest";

const CreateWilder = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const submit = async () => {
    try {
      await createWilder(firstName, lastName);
      toast.success(`Wilder ${firstName} ${lastName} créé avec succès.`);
      setFirstName("");
      setLastName("");
    } catch (error) {
      console.log("error caught ????");
      toast.error(error.message);
    }
  };

  return (
    <>
      <SectionTitle>Ajouter un nouveau Wilder</SectionTitle>
      <form
        onSubmit={async (event) => {
          event.preventDefault();
          await submit();
        }}
      >
        <label>
          Prénom
          <br />
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(event) => {
              setFirstName(event.target.value);
            }}
          />
        </label>
        <br />
        <label>
          Nom
          <br />
          <input
            type="text"
            required
            id="firstName"
            name="lastName"
            value={lastName}
            onChange={(event) => {
              setLastName(event.target.value);
            }}
          />
        </label>
        <br />
        <button>Valider</button>
      </form>
      <ToastContainer />
    </>
  );
};

export default CreateWilder;