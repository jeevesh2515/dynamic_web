const mongoose = require("mongoose");
mongoose.connect(`mongodb+srv://jeevesh:jeevesh@cluster0.cpixz.mongodb.net/website?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("connection successful");
}).catch((error) => {
    console.log(error);
})

