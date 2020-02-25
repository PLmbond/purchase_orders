function app() {
  // Define display file `app.json` as `app`.
  pjs.defineDisplay('app', 'app.json');

  // Main Program Loop
  while (!iExit) {

    // Retrieve records from database.
    var records = pjs.query("SELECT * FROM purchase_orders");

    // Put records into subfile `sfrec` of `app.json`.
    app.sfrec.replaceRecords(records);

    


    // Display Screen `frec` of app.json.
    app.frec.execute();
  
  }

}

module.exports.run = app;
