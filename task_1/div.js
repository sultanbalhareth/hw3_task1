const functions = require('@google-cloud/functions-framework');

functions.http('div', (req, res) => {
  // Check if the request method is POST
  if (req.method === 'POST') {
    // receiving the request from client
    const x_y_values = {
      X: req.body.X,
      Y: req.body.Y,
    }

    // Assuming you want to send back a JSON response
    const x_y__result_values = {
      X: x_y_values.X,
      Y: x_y_values.Y,
      result: parseFloat(x_y_values.X) / parseFloat(x_y_values.Y) // converting X and Y just in case they are strings and div them to get the final result
    };

    // Send the JSON response
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(JSON.stringify(x_y__result_values));
  } else {
    // If the request method is not POST, return an error response
    res.status(405).send('Method Not Allowed');
  }
});
