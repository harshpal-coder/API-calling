let btn = document.querySelector('button');

btn.addEventListener('click', async () => {
    let fact = await getfacts();
    console.log(fact);
    let p = document.querySelector("#result");
    p.innerHTML = fact;
});

let url = "https://catfact.ninja/fact";

async function getfacts() {
    try {
        let response = await axios.get(url);
        return response.data.fact;
    } catch (error) {
        console.error("Error fetching cat fact:", error);
    }
}