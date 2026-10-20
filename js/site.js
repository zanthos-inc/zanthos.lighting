(function () {
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.getElementById("nav");
    if (toggle && nav) {
        toggle.addEventListener("click", function () {
            var open = nav.classList.toggle("open");
            toggle.setAttribute("aria-expanded", open ? "true" : "false");
        });
        nav.addEventListener("click", function (e) {
            if (e.target.tagName === "A") {
                nav.classList.remove("open");
                toggle.setAttribute("aria-expanded", "false");
            }
        });
    }

    /* Lead form. Posts to Formspree once REPLACE_WITH_FORM_ID is filled in;
       until then it opens a pre-filled email so no lead is lost. */
    var form = document.getElementById("lead-form");
    var status = document.getElementById("form-status");
    if (!form) { return; }

    function field(id) { return (document.getElementById(id).value || "").trim(); }

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        var name = field("lf-name");
        var email = field("lf-email");
        var town = field("lf-town");
        var interest = field("lf-interest");
        var message = field("lf-message");
        var configured = form.action.indexOf("REPLACE_WITH_FORM_ID") === -1;

        if (!configured) {
            var subject = "Evening demo request: " + town;
            var body = "Name: " + name + "\nEmail: " + email + "\nTown: " + town +
                "\nInterested in: " + interest + "\n\n" + message;
            window.location.href = "mailto:contact@zanthos.lighting?subject=" +
                encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
            return;
        }

        status.textContent = "Sending…";
        fetch(form.action, {
            method: "POST",
            headers: { "Accept": "application/json" },
            body: new FormData(form)
        }).then(function (r) {
            if (r.ok) {
                form.reset();
                status.textContent = "Got it. We'll reply within one business day to set a time.";
            } else {
                status.textContent = "That didn't send. Email us at contact@zanthos.lighting and we'll take it from there.";
            }
        }).catch(function () {
            status.textContent = "That didn't send. Email us at contact@zanthos.lighting and we'll take it from there.";
        });
    });
})();
