import React from "react";

const skills = [
  { name: "JavaScript", level: 85 },
  { name: "HTML", level: 90 },
  { name: "CSS", level: 80 },
  { name: "React", level: 75 },
  { name: "Node.js", level: 70 },
  { name: "SQL", level: 65 },
  { name: "Git", level: 80 },
  { name: "GitHub", level: 85 },
];

const SkillBar = ({ skill, level }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-lg font-semibold text-gray-700">{skill}</span>
        <span className="text-sm text-gray-500">{level}%</span>
      </div>
      <div className="w-full bg-gray-300 rounded-full h-4">
        <div
          className="bg-green-500 h-4 rounded-full"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

const SobreMim = () => {
  return (
    <div className="h-screen/2 w-full flex items-center justify-center bg-white">
      <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Minhas Skills
        </h1>
        <div className="space-y-6">
          {skills.map((skill) => (
            <SkillBar key={skill.name} skill={skill.name} level={skill.level} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SobreMim;
