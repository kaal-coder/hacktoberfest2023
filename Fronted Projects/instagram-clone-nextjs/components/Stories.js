import { faker } from "@faker-js/faker";
import { useState } from "react";
import { useEffect } from "react";
import { useAuth } from "../context/useAuth";
import Story from "./Story";

const Stories = () => {
  const [suggestions, setSuggestions] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    const suggestion = [...Array(10)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setSuggestions(suggestion);
  }, []);

  return (
    <div className="flex space-x-2 p-6 mt-8 border-grey-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black justify-center">
      {user ? (
        suggestions.map((profile) => (
          <Story
            key={profile.id}
            username={profile.username}
            img={profile.avatar}
          />
        ))
      ) : (
        <h1 className="font-bold">Log in to see the stories</h1>
      )}
    </div>
  );
};

export default Stories;
