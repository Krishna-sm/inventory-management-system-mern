const { default: mongoose } = require("mongoose");
const { PUBLIC_DATA } = require("../../constant");

exports.ConnectDB = async()=>{
    try {
        await mongoose.connect(PUBLIC_DATA.mongo_uri)
        console.log(`the app is connect with ${mongoose.connection.host}`);
    } catch (error) {
            mongoose.disconnect();
            process.exit(1)
    }
}