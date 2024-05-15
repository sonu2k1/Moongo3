const mongoose = require('mongoose');
const Chat = require("./models/chats.js");

main()
.then(() =>{
    console.log("connection sucessful");
})
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats =[
    {
    from: "Hritik",
    to: "aparna",
    msg: "send me notes",
    created_at : new Date(),
    },
    {
        from: "Biswjeet",
        to: "Aditia",
        msg: "send me file",
        created_at : new Date(),
        },
        {
            from: "Adarsh",
            to: "Shivam",
            msg: "come at class fastly",
            created_at : new Date(),
         },
]

Chat.insertMany(allChats);