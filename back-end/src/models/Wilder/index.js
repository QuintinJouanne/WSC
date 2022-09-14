const EntitySchema = require("typeorm").EntitySchema;

module.exports = new EntitySchema({
  name: "Wilder",
  columns: {
    id: {
      primary: true,
      type: "uuid",
      generated: "uuid",
    },
    firstName: {
      type: "text",
    },
    lastName: {
      type: "text",
    },
  },
  relations: {
    school: {
      target: "School",
      type: "many-to-one",
      eager: true,
    },
    skills: {
      target: "Skill",
      type: "many-to-many",
      joinTable: true,
      eager: true,
    },
  },
});