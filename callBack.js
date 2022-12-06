
const api_url =
	"https://dummyjson.com/products";


async function getapi(url) {
	
	
	const response = await fetch(url);
	
	
	var data = await response.json();
	console.log(data);
	if (response) {
		hideloader();
	}
    show(data)
}

getapi(api_url);


function hideloader() {
	document.getElementById('loading').style.display = 'none';
}

function show(data) {
	let tab = ``;
	for (let r of data.products) {
		tab +=
		 `
		 <li>${r.title}</li>
		 <li>${r.thumbnail}</li>
		 <li>${r.description}</li>
		 <li>${r.price}</li>
		 <li>${r.discountPercentage}</li>
		 <li>${r.rating}</li>
		 <li>${r.stock}</li>
		 <li>${r.brand}</li>
		 <li>${r.category}</li>
		`;
	}
	document.getElementById("products").innerHTML = tab;
}
