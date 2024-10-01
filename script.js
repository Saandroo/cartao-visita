function toggleMode(){
    const html = document.documentElement
    //maneira de ser feito-->
    //if (html.classList.contains("light")) {
     // html.classList.remove("light")
    //} else {
    //html.classList.add("light")<--

    html.classList.toggle('light')
    }