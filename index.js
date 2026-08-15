const express=require("express");
const {connectToMongoDB}=require("./connect");
const path=require('path')
const cookieParser=require('cookie-parser')
const {checkForAuthentication, restrictTo}=require('./middlewares/auth')
//const {restrictToLoggedinUserOnly, checkAuth}=require('./middlewares/auth')
const URL=require('./models/url');

const urlRoute=require('./routes/url');
const staticRoute=require('./routes/staticRouter')
const userRoute=require('./routes/user')

const app=express();
const PORT=8001;

connectToMongoDB('mongodb://localhost:27017/short-url')
.then(()=>console.log('Mongodb connected'))

app.set("view engine", "ejs");
app.set('views',path.resolve("./views"))

// Middleware-plugin
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser())
app.use(checkForAuthentication)

app.get("/test", async (req,res)=>{
    const allUrls= await URL.find({});
    return res.render('home',{
        urls:allUrls,
    });
});

app.use("/url",restrictTo(["NORMAL"]),urlRoute);
app.use("/user", userRoute);
app.use("/", staticRoute);



app.get("/url/:shortId", async (req,res)=>{
    const shortId=req.params.shortId;
    const entry = await URL.findOneAndUpdate(
    {
        shortId,
    },
    {
        $push: {
            visitHistory:{
                timestamp:Date.now(),
            },
        },
    }
);
res.redirect(entry.redirectURL);
})

app.listen(PORT, ()=>console.log(`Server Started at Port:${PORT}`));