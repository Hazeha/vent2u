module.exports = app => {
    let router = require("express").Router();

    const presets = require(    "../controllers/presets.controller.js");
    const user = require(       "../controllers/user.controller.js");
    const rooms = require(      "../controllers/rooms.controller.js");
    const vents = require(      "../controllers/vents.controller.js");

    // Get user
    router.get("/user/:id", user.getInfo);

    // Get rooms
    router.get("/rooms/", rooms.getAll);

    // Get Vent / Seat
    router.get("/vents/:room", vents.getAll);

    // Select Vent / Seat
    router.put("/vents/:id", vents.putVent);
    // TODO Create Presets.

    // TODO Update Presets.
    router.put("/preset/:id", presets.putPreset);
    // TODO Delete Presets.

    // TODO Retrieve Specific Preset data.
    router.get("/preset/:user_id", presets.getPreset);

    app.use('/api/', router);
};

// TODO In data base create trigger for activation of vents and seats.
