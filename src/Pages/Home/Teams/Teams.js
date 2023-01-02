import React, { useEffect, useState } from "react";
import TeamCard from "./TeamCard";

const Teams = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    fetch("teams.json")
      .then((res) => res.json())
      .then((data) => setTeams(data));
  }, []);
  return (
    <div>
      <div className="text-center mt-10 capitalize mb-4">
        <p className="text-2xl font-bold text-orange-600">Team</p>
        <h2 className="text-5xl text-semibold">Meet Our Team</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomized <br /> words which don't look even slightly
          believable.
        </p>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {teams.map((team, idx) => (
          <TeamCard key={idx} team={team}></TeamCard>
        ))}
      </div>
      <div className="text-center my-10">
        <button className="btn btn-outline btn-error">More Services</button>
      </div>
    </div>
  );
};

export default Teams;
