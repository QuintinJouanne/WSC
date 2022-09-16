import { CardRow } from "./Home.styled";
import {Link} from "react-router-dom"
import Wilder from "../../components/Wilder/Wilder";
import { useEffect } from "react";
import { useState } from "react";
import Loader from "../../components/Loader/Loader";
import NoWilder from "../../components/NoWilder";
import { SectionTitle } from "../../styles/base-styles";
import { fetchWilders } from "./fetchWilders";

const Home = () => {
    const [wilders, setWilders] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        (async () => {
             const fetchedWilders = await fetchWilders();
             setWilders(fetchedWilders);
             setIsLoading(false)
        })();
    }, [])

  return (
    <>
      <SectionTitle>Wilders</SectionTitle>
      <Link to="/create-wilder">Ajouter un nouveau wilder</Link>
      {isLoading ? (<Loader/>) : ((wilders.length === 0) ? <NoWilder/> : <CardRow>
        {wilders?.map((wilder) => (
          <Wilder
            key={wilder.id}
            firstName={wilder.firstName}
            lastName={wilder.lastName}
            skills={wilder.skills}
          />
        ))}
      </CardRow>)}
    </>
  );
};

export default Home;


