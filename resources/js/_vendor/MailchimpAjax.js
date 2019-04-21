export default function() {
  /*
   * Mailchimp AJAX form submit VanillaJS
   * Vanilla JS
   * Author: Michiel Vandewalle
   * Github author: https://github.com/michiel-vandewalle
   * Github project: https://github.com/michiel-vandewalle/Mailchimp-AJAX-form-submit-vanillaJS
   */

  if (document.getElementsByTagName("form").length > 0) {
    document
      .getElementsByTagName("form")[0]
      .addEventListener("submit", function(e) {
        e.preventDefault();

        // Check for spam
        if (document.getElementById("js-validate-robot").value !== "") {
          return false;
        }

        // Get url for mailchimp
        var url = this.action.replace("/post?", "/post-json?");

        // Add form data to object
        var data = "";
        var inputs = this.querySelectorAll("#js-form-inputs input");
        for (var i = 0; i < inputs.length; i++) {
          data +=
            "&" + inputs[i].name + "=" + encodeURIComponent(inputs[i].value);
        }

        // Create & add post script to the DOM
        var script = document.createElement("script");
        script.src = url + data;
        document.body.appendChild(script);

        // Callback function
        var callback = "callback";
        window[callback] = function(data) {
          // Remove post script from the DOM
          delete window[callback];
          document.body.removeChild(script);

          // Display response message
          document.getElementById("js-subscribe-response").innerHTML = data.msg;
        };
      });
  }
}
