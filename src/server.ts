import express, {Request, Response} from "express";
import serveStatic from "serve-static";
export default class Server{
    constructor(private port:number) {}
    public start():void{
        const app=express();
        app.use(serveStatic("public"))
        app.get("/", (req:Request,resp:Response)=>{
            resp.send("Test ....");
        });
        app.listen(7777,()=>{
            console.log("server started");
        });

    }
}