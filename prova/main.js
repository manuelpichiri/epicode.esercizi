const navigationLink = [
    {
        text: "Home",
        href: "#",
    },
    {
        text: "About",
        href: "#",
    },
    {
        text: "Contact",
        href: "#",
    }

]

const navbar = document.querySelector("nav")

const navUl = document.createElement("ul")

navbar.appendChild(navUl)

navigationLink.forEach(link => {

    const li = document.createElement("li")
    const a = document.createElement("a")

    a.href = link.href
    a.innerText = link.text

    li.appendChild(a)

    navUl.appendChild(li)
})

