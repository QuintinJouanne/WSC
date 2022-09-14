const EntitySchema = require("typeorm").EntitySchema

module.exports = new EntitySchema({
    name: "Skill",
    columns: {
        id: {
            primary: true,
            type: "uuid",
            generated: "uuid"
        },
        skillName: {
            type: "text",
            unique: true,
        }
},
}
)