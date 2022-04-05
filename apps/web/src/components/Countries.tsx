import React from "react";

import { useQuery, gql } from "@apollo/client";

const QUERY = gql`
  query Countries {
    countries {
      code
      name
      emoji
    }
  }
`;

type Country = {
  code: string;
  name: string;
  emoji: string;
};

const Countries = () => {
  const { data, error, loading } = useQuery<{ countries: Country[] }>(QUERY);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Oooops, Something went wrong!</h2>;
  }

  const countries = data.countries.slice(0, 4);

  return (
    <div>
      {countries.map((country) => (
        <div key={country.code} className="">
          <h3>{country.name}</h3>
          <p>
            {country.code} - {country.emoji}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Countries;
