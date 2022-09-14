const EntitySchema = require("typeorm").EntitySchema

module.exports = new EntitySchema({
    name: "School",
    columns: {
        id: {
            primary: true,
            type: "uuid",
            generated: "uuid"
        },
        schoolName: {
            type: "text",
            unique: true,
        }
},
}
)