module.exports = app => {
    let router = require("express").Router();

    const presets = require("../controllers/presets.controller.js");
    const user = require("../controllers/user.controller.js");

    // TODO Get user
    router.get("/user/:id", user.getInfo);
    // TODO Create Presets.

    // TODO Update Presets.

    // TODO Delete Presets.

    // TODO Select Seat.
    // Retrieve all published Tutorials
    router.get("/published", presets.listAllSeatsInRoom);

    // TODO Retrieve Preset data.
    router.get("/preset/:user_id", presets.getPreset);

    // TODO Retrieve Common data

    // // Create a new Tutorial
    // routes.post("/tutorials/", tutorials.create);
    //
    // // Retrieve all Tutorials
    // routes.get("/tutorials/", tutorials.findAll);
    //
    // // Retrieve all published Tutorials
    // routes.get("/tutorials/published", tutorials.findAllPublished);
    //
    // // Retrieve a single Tutorial with id
    // routes.get("/tutorials/:id", tutorials.findOne);
    //
    // // Update a Tutorial with id
    // routes.put("/tutorials/:id", tutorials.update);
    //
    // // Delete a Tutorial with id
    // routes.delete("/tutorials/:id", tutorials.delete);
    //
    // // Create a new Tutorial
    // routes.delete("/tutorials/", tutorials.deleteAll);

    app.use('/api/', router);
};

// TODO In data base create trigger for activation of vents and seats.
