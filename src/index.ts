import App from "./app";

const app = new App();

app.app.listen(app.app.get("port"), () => {
  console.log(
    "\nApp is running at http://localhost:%d in %s mode\n * Press CTRL+C to stop\n",
    app.app.get("port"),
    app.app.get("env")
  );
});

app.app.on("close", () => {
  app.close();
});
