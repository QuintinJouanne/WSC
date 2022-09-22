import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CardRow } from "./Home.styled";
import Wilder from "../../components/Wilder/Wilder";
import Loader from "../../components/Loader";
import { SectionTitle } from "../../styles/base-styles";
import { CREATE_WILDER_PATH } from "../paths";
import { fetchWilders, WilderType } from "./rest";
import React from "react";
import { getErrorMessage } from "../../utils";

const Home = () => {
  const [wilders, setWilders] = useState<null | WilderType[]>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const fetchedWilders = await fetchWilders();
        setWilders(fetchedWilders);
      } catch (error) {
        setErrorMessage(getErrorMessage(error));
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  const renderMainContent = () => {
    if (isLoading) {
      return <Loader />;
    }
    if (errorMessage) {
      return errorMessage;
    }
    if (!wilders?.length) {
      return "Aucun wilder à afficher.";
    }
    return (
      <CardRow>
        {wilders?.map((wilder) => (
          <Wilder
            key={wilder.id}
            firstName={wilder.firstName}
            lastName={wilder.lastName}
            skills={wilder.skills}
          />
        ))}
      </CardRow>
    );
  };

  return (
    <>
      <SectionTitle>Wilders</SectionTitle>
      <Link to={CREATE_WILDER_PATH}>Ajouter un nouveau Wilder</Link>
      <br />
      <br />
      {renderMainContent()}
    </>
  );
};

export default Home;
